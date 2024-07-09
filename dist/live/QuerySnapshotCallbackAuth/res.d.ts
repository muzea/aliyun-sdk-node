export interface QuerySnapshotCallbackAuthResponse {
    /**
     * 请求ID。
     * @example `16A96B9A-F203-4EC5-8E43-CB92E68F4CD5`
     */
    RequestId: string;
    /**
     * 回调鉴权密钥。
     * @example `yourkey`
     */
    CallbackAuthKey: string;
    /**
     * 主播流域名。
     * @example `example.aliyundoc.com`
     */
    DomainName: string;
    /**
     * 回调鉴权开关。取值：
     * - **yes**：开启。
     * - **no**：关闭。
     * @example `yes`
     */
    CallbackReqAuth: string;
}
