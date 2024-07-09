export interface GetPreSignedUrlRequest {
    /**
     * 客户端版本。
     * @example `1.0.001`
     */
    "ClientVersion"?: string;
    /**
     * 客户端基础参数，记录 SDK 版本号等信息
     * @example `{"version":"1.0.0"}`
     */
    "ClientBaseParam"?: string;
    /**
     * 前缀
     * @example `test.mp4`
     */
    "Prefix"?: string;
}
