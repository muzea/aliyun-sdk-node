export interface ContinuouslyPushRequest {
    /**
     * AppKey信息。
     * @example `23267207`
     */
    "AppKey": number;
    /**
     * 消息ID。
     * 调用Push接口，设置Target为TBD，调用后获得的MessageId。它代表了一个已经保存到推送系统的消息。
     * @example `500131`
     */
    "MessageId": string;
    /**
     * 推送目标：
     * - **DEVICE**：根据设备推送
     * - **ACCOUNT**：根据账号推送
     * - **ALIAS**：根据别名推送
     * 持续推送只支持这3种目标类型。
     * @example `DEVICE`
     */
    "Target": string;
    /**
     * 根据Target来设定，多个值使用逗号分隔，超过限制需要分多次推送。
     * - Target=DEVICE，值如`deviceid1,deviceid2`（最多支持1000个）。
     * - Target=ACCOUNT，值如`account1,account2`（最多支持1000个）。
     * - Target=ALIAS，值如`alias1,alias2`（最多支持1000个）。
     * @example `a692961a92534047ad3625****`
     */
    "TargetValue": string;
}
