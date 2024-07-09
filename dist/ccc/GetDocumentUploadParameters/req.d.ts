export interface GetDocumentUploadParametersRequest {
    /**
     * 文件名称。
     * @example `blacklist.xlsx`
     */
    "FileName": string;
    /**
     * 请求ID。
     * @example `24BE19E8-BF7D-4992-A35E-15EBA874F2E5`
     */
    "RequestId"?: string;
    /**
     * 实例ID。
     * @example `9cfad875-6260-4a53-ab6e-b13e3fb31f7d`
     */
    "InstanceId": string;
}
