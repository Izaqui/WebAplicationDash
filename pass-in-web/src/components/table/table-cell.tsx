import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface TableCellProps extends ComponentProps<"th"> {}

export function TableCell(props: TableCellProps){
    return(
        <td
        {...props}
        className={twMerge("py-3 px-4 text-sm text-zinc-200", props.className)}
        />
    );
}