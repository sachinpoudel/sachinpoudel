// src/components/CustomSkeleton.tsx
import React from "react";
import Skeleton from "@mui/material/Skeleton";

type Props = {
  variant?: "text" | "rectangular" | "circular"; // skeleton type
  width?: string | number; // width of skeleton
  height?: string | number; // height of skeleton
  count?: number; // number of skeleton lines (for paragraphs)
  spacing?: number; // optional spacing between lines
};

const CustomSkeleton: React.FC<Props> = ({
  variant = "text",
  width = "100%",
  height,
  count = 1,
  spacing = 1,
}) => {
  return (
    <>
      {Array(count)
        .fill(0)
        .map((_, i) => (
          <Skeleton
            key={i}
            variant={variant}
            width={width}
            height={height}
            sx={{
              mb: i < count - 1 ? spacing : 0,
              bgcolor: "grey.800",
              "@media (prefers-color-scheme: dark)": {
                bgcolor: "grey.800",
              },
            }}
          />
        ))}
    </>
  );
};

export default CustomSkeleton;
