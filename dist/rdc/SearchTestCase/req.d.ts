interface SearchTestCaseRequest {
    "RegionId"?: string;
    "CorpIdentifier": string;
    "AkProjectId": string;
    "PageSize"?: number;
    "CaseTag"?: string;
    "PageNum"?: string;
    "CreateDateStart"?: string;
    "CreateDateEnd"?: string;
    "UpdateDateStart"?: string;
    "UpdateDateEnd"?: string;
}
export { SearchTestCaseRequest };