export interface GetRecordResultRequest {
    /**
     * 双录 ID
     * @example `A1899517-BB99-5D3E-A71B-97524DCB0942`
     */
    "RecordId": string;
    /**
     * 客户端基础参数，记录 SDK 版本号等信息
     * @example `{"version":"1.0.0"}`
     */
    "ClientBaseParam"?: string;
}
