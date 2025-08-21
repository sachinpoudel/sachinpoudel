import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

export default function Variants() {
  return (
    <Stack spacing={2}>
      {/* For variant="text", adjust the height via font-size */}

      {/* For other variants, adjust the size with `width` and `height` */}

      <Skeleton
        variant="rounded"
        width={210}
        height={60}
        sx={{
          bgcolor: "grey.200", // light mode
          "@media (prefers-color-scheme: dark)": {
            bgcolor: "grey.800", // dark mode
          },
        }}
      />
    </Stack>
  );
}
