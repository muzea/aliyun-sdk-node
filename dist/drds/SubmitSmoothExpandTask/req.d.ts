interface SubmitSmoothExpandTaskRequest {
    "RegionId"?: string;
    "DbName": string;
    "TransferTaskInfos": string[];
    "DrdsInstanceId": string;
    "RdsSuperInstances"?: string[];
    "DbInstanceIsCreating"?: boolean;
}
export { SubmitSmoothExpandTaskRequest };