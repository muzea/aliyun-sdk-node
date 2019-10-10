interface CreateTriggerRequest {
    "RegionId"?: string;
    "Namespace": string;
    "Source": string;
    "FileIds": string;
    "FunctionIds": string;
    "InvocationMode": number;
    "ProjectId": string;
    "Sandbox"?: number;
    "Production"?: number;
}
export { CreateTriggerRequest };