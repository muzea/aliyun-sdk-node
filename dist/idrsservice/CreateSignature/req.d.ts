export interface CreateSignatureRequest {
    /**
     * 质检应用 ID
     * @example `5bbfb884-1186-4d48-906b-88d586770f6b`
     */
    "AppId": string;
    /**
     * 过期时间，单位秒，默认时间 300s
     * @example `300`
     */
    "ExpireTime"?: number;
    /**
     * rtc 用户 ID
     * @example `550070734466****`
     */
    "Uid": string;
    /**
     * 客户端版本
     * @example `1.0.001`
     */
    "ClientVersion"?: string;
    /**
     * 客户端基础参数，记录 SDK 版本号等信息
     * @example `{"version":"1.0.0"}`
     */
    "ClientBaseParam"?: string;
}
