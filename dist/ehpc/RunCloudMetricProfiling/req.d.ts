interface RunCloudMetricProfilingRequest {
    "RegionId"?: string;
    "HostName": string;
    "ProcessId": number;
    "ClusterId": string;
    "Duration"?: number;
    "Freq"?: number;
}
export { RunCloudMetricProfilingRequest };