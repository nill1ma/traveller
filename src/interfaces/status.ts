export const LabelStatus = {
    planning: {label:"Planning", backgroundColor: "#87CEFA", color: "white"},
    pending: {label:"Pending", backgroundColor: "#808080", color: "white"},
    started: {label:"Started", backgroundColor: "#00FF7F", color: "white"},
    finished: {label:"Finished", backgroundColor: "#D2691E", color: "white"},
    cancelled: {label:"Cancelled", backgroundColor: "#800000", color: "white"},
}

export type Status = keyof typeof LabelStatus;
