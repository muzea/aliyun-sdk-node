export interface GetAppRequest {
    /**
     * 应用 ID
     * @example `59b0bbfe-929b-4a8c-9833-3ce70b4bad38`
     */
    "Id": string;
    /**
     * 包名
     * @example `com.a.test`
     */
    "PackageName": string;
    /**
     * 设备 ID
     * @example `xxx-xxx-xxx`
     */
    "DeviceId": string;
    /**
     * 客户端版本
     * @example `1.0.002`
     */
    "ClientVersion"?: string;
    /**
     * 客户端基础参数，记录 SDK 版本号等信息
     * @example `{"version":"1.0.0"}`
     */
    "ClientBaseParam"?: string;
}
