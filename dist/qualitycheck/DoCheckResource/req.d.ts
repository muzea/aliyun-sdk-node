interface DoCheckResourceRequest {
    "RegionId"?: string;
    "Pk": string;
    "Interrupt"?: boolean;
    "Bid"?: string;
    "Hid"?: number;
    "Country"?: string;
    "TaskIdentifier"?: string;
    "TaskExtraData"?: string;
    "GmtWakeup"?: string;
    "Success"?: boolean;
    "Message"?: string;
    "Level"?: number;
    "Prompt"?: string;
}
export { DoCheckResourceRequest };