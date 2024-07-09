export interface SetLiveStreamsNotifyUrlConfigRequest {
    /**
     * 您的推流域名。
     * @example `demo.aliyundoc.com`
     */
    "DomainName": string;
    /**
     * 直播流信息推送到的URL地址。
     * @example `http://guide.aliyundoc.com/notify`
     */
    "NotifyUrl": string;
    /**
     * 是否开启鉴权。取值：
     * - **yes**：开启。如果选择取值为**yes**，必须同时设置请求参数NotifyAuthKey。
     * - **no**：不开启。
     * > 不填默认为**no**。
     * 鉴权逻辑请参考下文的**推流回调鉴权说明**。
     * @example `yes`
     */
    "NotifyReqAuth"?: string;
    /**
     * 鉴权key。
     * > 当请求参数NotifyReqAuth取值为**yes**时，本参数必填。
     * 取值要求：
     * - 16~64个字符。
     * - 支持大写字母、小写字母、数字。
     * @example `123456`
     */
    "NotifyAuthKey"?: string;
}
