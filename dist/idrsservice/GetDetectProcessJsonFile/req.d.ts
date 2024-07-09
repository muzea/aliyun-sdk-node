export interface GetDetectProcessJsonFileRequest {
    /**
     * ID
     * @example `hpsk3wdo-2020122319`
     */
    "Id": string;
    /**
     * 客户端基础参数，记录 SDK 版本号等信息
     * @example `{"version":"1.0.0"}`
     */
    "ClientBaseParam"?: string;
}
