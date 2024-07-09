export interface DescribeLiveSnapshotNotifyConfigResponse {
    /**
     * 主播流域名。
     * @example `www.yourdomain***.com`
     */
    DomainName: string;
    /**
     * 回调鉴权密钥。
     * @example `yourkey`
     */
    NotifyAuthKey: string;
    /**
     * 回调鉴权开关。取值：
     * - **yes**：开启。
     * - **no**：关闭。
     * @example `yes`
     */
    NotifyReqAuth: string;
    /**
     * 回调URL
     * @example `http://callback.yourdomain***.com`
     */
    NotifyUrl: string;
    /**
     * 请求ID。
     * @example `5056369B-D337-499E-B8B7-B761BD37B08A`
     */
    RequestId: string;
}
