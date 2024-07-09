export interface GetDetectProcessRequest {
    /**
     * ID
     * @example `0f1c45cd-3eee-4e60-b505-2e330b87****`
     */
    "Id": string;
    /**
     * 客户端基础参数，记录 SDK 版本号等信息
     * @example `{"version":"1.0.0"}`
     */
    "ClientBaseParam"?: string;
}
