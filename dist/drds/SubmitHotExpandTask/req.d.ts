interface SubmitHotExpandTaskRequest {
    "RegionId"?: string;
    "DbName": string;
    "InstanceDbMapping": string[];
    "Mapping": string[];
    "ExtendedMapping": string[];
    "DrdsInstanceId": string;
    "TaskName"?: string;
    "TaskDesc"?: string;
    "SupperAccountMapping"?: string[];
}
export { SubmitHotExpandTaskRequest };