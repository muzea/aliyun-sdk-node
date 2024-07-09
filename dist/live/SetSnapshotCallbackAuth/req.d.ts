export interface SetSnapshotCallbackAuthRequest {
    /**
     * 主播流域名。
     * @example `example.aliyundoc.com`
     */
    "DomainName": string;
    /**
     * 回调鉴权开关。取值：
     * - **yes**：开启。
     * - **no**：关闭。
     * @example `yes`
     */
    "CallbackReqAuth": string;
    /**
     * 自定义回调鉴权密钥。
     * @example `yourkey`
     */
    "CallbackAuthKey": string;
}
