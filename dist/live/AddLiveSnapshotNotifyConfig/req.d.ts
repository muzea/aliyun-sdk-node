export interface AddLiveSnapshotNotifyConfigRequest {
    /**
     * 主播流域名。
     * @example `www.yourdomain***.com`
     */
    "DomainName": string;
    /**
     * 回调URL，必须是合法URL，长度不超过500。
     * @example `http://callback.yourdomain***.com`
     */
    "NotifyUrl": string;
    /**
     * 回调鉴权开关。取值：
     * - **yes**：开启。
     * - **no**（默认）：关闭。
     * >当填yes时NotifyAuthKey必填。
     * @example `yes`
     */
    "NotifyReqAuth"?: string;
    /**
     * 回调鉴权密钥，长度为16~32个字符，只允许填大小写字母和数字。
     * >当NotifyReqAuth参数值为**yes**时该参数必填。
     * @example `yourkey`
     */
    "NotifyAuthKey"?: string;
}
