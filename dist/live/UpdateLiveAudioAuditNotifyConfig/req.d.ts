export interface UpdateLiveAudioAuditNotifyConfigRequest {
    /**
     * 主播流域名。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 回调地址。用于接收问题语音内容的回调
     * @example `http://guide.aliyundoc.com/callback`
     */
    "Callback"?: string;
    /**
     * 审核回调模板。取值：
     * - **{DomainName}**：播流域名。
     * - **{AppName} **：播流所属应用名称。
     * - **{StreamName}**：播流名称。
     * - **{Timestamp}**：Unix时间戳，返回回调时间。单位：秒。
     * - **{Result}**：检测结果。
     * @example `{"domain":{DomainName},"app":{AppName},"stream":{StreamName},"timestamp":{Timestamp},"result":{Result}}`
     */
    "CallbackTemplate"?: string;
}
