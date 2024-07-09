export interface PushMessageToiOSRequest {
    /**
     * AppKey信息。
     * @example `24780725`
     */
    "AppKey": number;
    /**
     * 推送目标。可取值：
     * - **DEVICE**：根据设备推送
     * - **ACCOUNT**：根据账号推送
     * - **ALIAS**：根据别名推送
     * - **TAG**：根据标签推送
     * - **ALL**：推送给全部设备
     * @example `ALL`
     */
    "Target": string;
    /**
     * 根据Target来设定，多个值使用逗号分隔，超过限制需要分多次推送。
     * - Target=DEVICE，值如`deviceid111,deviceid1111`（最多支持1000个）。
     * - Target=ACCOUNT，值如`account111,account222`（最多支持1000个）。
     * - Target=ALIAS，值如`alias111,alias222`（最多支持1000个）。
     * - Target=TAG，支持单Tag和多Tag，格式请参见[标签格式](~~434847~~)。
     * - Target=ALL，值为**all**。
     * @example `all`
     */
    "TargetValue": string;
    /**
     * 发送的消息的标题。
     * @example `my title`
     */
    "Title": string;
    /**
     * 发送的消息内容。
     * @example `my body`
     */
    "Body": string;
    /**
     * 消息是否离线保存。StoreOffline默认设置为false。
     * 若保存，在推送时候用户不在线，在过期时间（ExpireTime）内用户上线时会被再次发送。ExpireTime默认为72小时。
     * @example `true`
     */
    "StoreOffline"?: boolean;
    /**
     * 推送任务自定义标识，当JobKey不为空时，回执日志中会附带该字段。查看回执日志参见[回执日志](~~434651~~)。
     * @example `123`
     */
    "JobKey"?: string;
}
