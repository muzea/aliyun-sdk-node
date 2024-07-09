export interface AddLiveDetectNotifyConfigRequest {
    /**
     * 主播流域名。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 发现涉黄、涉政等违规内容的回调地址。
     * @example `http://demo.aliyundoc.com/examplecallback.action`
     */
    "NotifyUrl": string;
}
