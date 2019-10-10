interface DiagnosisVersionRequest {
    "RegionId": string;
    "ProjectId": string;
    "VersionType": string;
    "VersionId": string;
    "IdType": string;
    "OriginalId": string;
    "DiagnoseStyle": string;
    "EndTime"?: string;
    "StartTime"?: string;
}
export { DiagnosisVersionRequest };