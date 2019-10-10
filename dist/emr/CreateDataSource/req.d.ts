interface CreateDataSourceRequest {
    "RegionId": string;
    "Name": string;
    "SourceType": string;
    "Description"?: string;
    "Conf"?: string;
    "ClusterId"?: string;
    "NavParentId"?: string;
}
export { CreateDataSourceRequest };