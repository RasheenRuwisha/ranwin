import { cn } from "@/lib/utils";
import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { motion } from "framer-motion";
import { IconTrash, IconUpload } from "@tabler/icons-react";
import { useDropzone } from "react-dropzone";

const mainVariant = {
  initial: {
    x: 0,
    y: 0,
  },
  animate: {
    x: 20,
    y: -20,
    opacity: 0.9,
  },
};

const secondaryVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

export const FileUpload = forwardRef(
  ({ onChange }: { onChange?: (files: File[]) => void }, ref) => {
    const [files, setFiles] = useState<File[]>([]);
    const fileInputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => ({
      getFiles: files,
      clearFiles: () => setFiles([]),
    }));

    const handleFileChange = (newFiles: File[]) => {
      setFiles((prevFiles) => {
        const updatedFiles = [...prevFiles, ...newFiles];

        // Keep only the last 6 files
        if (updatedFiles.length > 6) {
          return updatedFiles.slice(updatedFiles.length - 6);
        }

        return updatedFiles;
      });

      onChange && onChange(newFiles);
    };

    const handleRemoveFile = (index: number) => {
      setFiles((prevFiles) => prevFiles.filter((_, idx) => idx !== index));
      console.log(files);
    };

    const handleClick = () => {
      fileInputRef.current?.click();
    };

    const { getRootProps, isDragActive } = useDropzone({
      multiple: false,
      noClick: true,
      onDrop: handleFileChange,
      onDropRejected: (error) => {
        console.log(error);
      },
    });

    return (
      <div className="w-full" {...getRootProps()}>
        <motion.div
          onClick={handleClick}
          whileHover="animate"
          className="p-10 group/file block rounded-lg cursor-pointer w-full relative overflow-hidden"
        >
          <input
            ref={fileInputRef}
            id="file-upload-handle"
            type="file"
            multiple
            accept="image/png, image/gif, image/jpeg"
            onChange={(e) => {
              const selectedFiles = Array.from(e.target.files || []).slice(
                0,
                6
              ); // Limit to 6 files
              handleFileChange(selectedFiles);
            }}
            className="hidden"
          />

          <div className=" absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]">
            <GridPattern />
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="relative z-20 font-sans font-bold text-neutral-700 dark:text-neutral-300 text-base">
              Upload file
            </p>
            <p className="relative z-20 font-sans font-normal text-neutral-400 dark:text-neutral-400 text-base mt-2">
              Drag or drop your files here or click to upload (Max 6 files)
            </p>
            <div className="relative grid  mt-10 max-w-xl mx-auto">
              <div className="relative grid grid-cols-3 gap-4   max-w-xl mx-auto">
                {files.length > 0 &&
                  files.map((file, idx) => (
                    <motion.div
                      key={"file" + idx}
                      layoutId={
                        idx === 0 ? "file-upload" : "file-upload-" + idx
                      }
                      className={cn(
                        "relative overflow-hidden z-40 bg-white dark:bg-neutral-900 flex flex-col items-start justify-start md:h-32 w-32  mt-4 mx-auto rounded-md",
                        "shadow-sm"
                      )}
                    >
                      <div className="flex text-sm md:flex-row flex-col items-start md:items-center   justify-between text-neutral-600 dark:text-neutral-400">
                        <motion.img
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          layout
                          src={URL.createObjectURL(file)}
                          className="h-32 w-32 object-fill rounded-md"
                        />
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleRemoveFile(idx);
                          }}
                          className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full hover:bg-red-600"
                        >
                          <IconTrash size={16} />
                        </button>
                      </div>
                    </motion.div>
                  ))}
              </div>

              {!files.length && (
                <motion.div
                  layoutId="file-upload"
                  variants={mainVariant}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                  className={cn(
                    "relative group-hover/file:shadow-2xl z-40 bg-white dark:bg-neutral-900 flex align-center items-center justify-center h-32 mt-4 w-32 max-w-[8rem] mx-auto rounded-md",
                    "shadow-[0px_10px_50px_rgba(0,0,0,0.1)]"
                  )}
                >
                  {isDragActive ? (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-neutral-600 flex flex-col items-center"
                    >
                      Drop it
                      <IconUpload className="h-4 w-4 text-neutral-600 dark:text-neutral-400" />
                    </motion.p>
                  ) : (
                    <IconUpload className="h-4 w-4 text-neutral-600 dark:text-neutral-300" />
                  )}
                </motion.div>
              )}

              {!files.length && (
                <motion.div
                  variants={secondaryVariant}
                  className="absolute opacity-0 border border-dashed border-sky-400 inset-0 z-30 bg-transparent flex items-center justify-center h-32 mt-4 w-full max-w-[8rem] mx-auto rounded-md"
                ></motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    );
  }
);

export function GridPattern() {
  const columns = 41;
  const rows = 11;
  return (
    <div className="flex  bg-gray-100 dark:bg-neutral-900 flex-shrink-0 flex-wrap justify-center items-center gap-x-px gap-y-px  scale-105">
      {Array.from({ length: rows }).map((_, row) =>
        Array.from({ length: columns }).map((_, col) => {
          const index = row * columns + col;
          return (
            <div
              key={`${col}-${row}`}
              className={`w-10 h-10 flex flex-shrink-0 rounded-[2px] ${
                index % 2 === 0
                  ? "bg-gray-50 dark:bg-neutral-950"
                  : "bg-gray-50 dark:bg-neutral-950 shadow-[0px_0px_1px_3px_rgba(255,255,255,1)_inset] dark:shadow-[0px_0px_1px_3px_rgba(0,0,0,1)_inset]"
              }`}
            />
          );
        })
      )}
    </div>
  );
}
