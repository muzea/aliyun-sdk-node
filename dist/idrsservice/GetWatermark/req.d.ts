export interface GetWatermarkRequest {
    /**
     * 水印 ID
     * @example `728fd812a876ec04818858982baebe6f`
     */
    "WatermarkId"?: string;
    /**
     * 客户端版本
     * @example `1.0.003`
     */
    "ClientVersion"?: string;
    /**
     * 客户端基础参数，记录 SDK 版本号等信息
     * @example `{"version":"1.0.0"}`
     */
    "ClientBaseParam"?: string;
}
