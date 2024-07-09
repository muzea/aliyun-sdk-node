export interface SendMessageToGroupRequest {
    /**
     * 互动消息应用ID。
     * @example `VKL3***`
     */
    "AppId": string;
    /**
     * 消息组ID。
     * @example `AE35-****-T95F`
     */
    "GroupId": string;
    /**
     * 操作人用户ID。
     * @example `de1**a0`
     */
    "OperatorUserId": string;
    /**
     * 消息类型。type字段值小于等于10000时表示系统消息，大于10000时表示自定义消息。
     * @example `12000`
     */
    "Type"?: number;
    /**
     * 消息体，JSONString类型。
     * @example `test`
     */
    "Data": string;
    /**
     * 当前消息内容是否需要阿里云内容安全审核。取值：
     * - **true**： 不需要安全审核。
     * - **false**（默认值）：需要安全审核。
     * @example `true`
     */
    "SkipAudit"?: boolean;
}
