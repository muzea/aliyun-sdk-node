interface RunCommandRequest {
    "RegionId": string;
    "Name": string;
    "Type": string;
    "CommandContent": string;
    "InstanceId": string[];
    "SourceRegionId"?: string;
    "OwnerId"?: number;
    "Description"?: string;
    "WorkingDir"?: string;
    "Timeout"?: number;
    "EnableParameter"?: boolean;
    "Timed"?: boolean;
    "Frequency"?: string;
    "Parameters"?: string;
    "KeepCommand"?: boolean;
    "ContentEncoding"?: string;
}
export { RunCommandRequest };