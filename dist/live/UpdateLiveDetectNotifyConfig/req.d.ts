export interface UpdateLiveDetectNotifyConfigRequest {
    /**
     * 主播流域名。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 发现涉黄等违规内容的回调地址。
     * @example `http://guide.aliyundoc.com/examplecallback.action`
     */
    "NotifyUrl": string;
}
