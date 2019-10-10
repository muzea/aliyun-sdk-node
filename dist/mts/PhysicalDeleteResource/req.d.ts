interface PhysicalDeleteResourceRequest {
    "RegionId"?: string;
    "Pk": string;
    "Bid": string;
    "Hid": number;
    "Country": string;
    "TaskIdentifier": string;
    "TaskExtraData": string;
    "GmtWakeup": string;
    "Invoker": string;
    "Interrupt"?: boolean;
    "Success"?: boolean;
    "Message"?: string;
}
export { PhysicalDeleteResourceRequest };