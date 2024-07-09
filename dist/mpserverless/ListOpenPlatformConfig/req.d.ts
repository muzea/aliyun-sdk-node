export interface ListOpenPlatformConfigRequest {
    /**
     * 服务空间ID。
     * @example `0e16bb12-14af-****-b24c-5ac1a9a7bb9f`
     */
    "SpaceId": string;
    /**
     * 平台。可选值：
     *  - Alipay
     *  - Wechat
     * @example `Alipay`
     */
    "Platform": string;
}
