interface InvokeShellCommandRequest {
    "RegionId": string;
    "ClusterId": string;
    "Command": string;
    "Instance"?: string[];
    "WorkingDir"?: string;
    "Timeout"?: number;
}
export { InvokeShellCommandRequest };