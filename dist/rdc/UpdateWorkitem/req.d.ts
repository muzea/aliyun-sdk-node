interface UpdateWorkitemRequest {
    "RegionId"?: string;
    "AKProjectId": number;
    "CorpIdentifier": string;
    "Modifier": string;
    "IssueId": number;
    "AssignedTo"?: string;
    "TemplateId"?: number;
    "Subject"?: string;
    "Description"?: string;
    "Stamp"?: string;
    "CfList"?: string;
    "Status"?: string;
    "Priority"?: string;
    "SeriousLevel"?: string;
    "Verifier"?: string;
    "SprintId"?: number;
    "IgnoreCheck"?: boolean;
    "Cfs"?: string;
}
export { UpdateWorkitemRequest };