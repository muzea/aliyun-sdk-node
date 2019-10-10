interface CreateWorkitemRequest {
    "RegionId"?: string;
    "CorpIdentifier": string;
    "Author": string;
    "AssignedTo": string;
    "TemplateId": number;
    "Subject": string;
    "Stamp": string;
    "AKProjectId": number;
    "Description"?: string;
    "CfList"?: string;
    "Verifier"?: string;
    "PriorityId"?: number;
    "SeriousLevelId"?: number;
    "WatcherUsers"?: string;
    "ModuleIds"?: string;
}
export { CreateWorkitemRequest };