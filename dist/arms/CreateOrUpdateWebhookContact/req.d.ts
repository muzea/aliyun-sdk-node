export interface CreateOrUpdateWebhookContactRequest {
    /**
     * Webhook告警联系人ID。
     * - 不填代表创建新的Webhook告警联系人。
     * - 填写代表修改指定Webhook告警联系人信息。
     * @example `123`
     */
    "WebhookId"?: number;
    /**
     * Webhook告警联系人名称。
     * @example `Webhook告警`
     */
    "WebhookName": string;
    /**
     * HTTP请求方法。
     * - Post
     * - Get
     * @example `Post`
     */
    "Method": string;
    /**
     * **Method**的请求方法URL。
     * @example `https://oapi.dingtalk.com/robot/send?access_token=e1a049121******`
     */
    "Url": string;
    /**
     * HTTP请求头。
     * @example `[{"Content-Type":"application/json;charset=utf-8"}]`
     */
    "BizHeaders"?: string;
    /**
     * HTTP请求参数。
     * @example `[{"content":"mike"}]`
     */
    "BizParams"?: string;
    /**
     * 告警触发时发送的通知模板，当**Method**设置为**Post**时必填，可使用`$content`占位符输出通知内容，不可超过500个字符。更多信息，请参见[通知模板的变量说明](~~251834~~)。
     * @example `{ "告警名称":"{{ .commonLabels.alertname }}{{if .commonLabels.clustername }}", "集群名称":"{{ .commonLabels.clustername }} {{ end }}{{if eq "app" .commonLabels._aliyun_arms_involvedObject_kind }}", "应用名称":"{{ .commonLabels._aliyun_arms_involvedObject_name }} {{ end }}", "通知策略":"{{ .dispatchRuleName }}", "告警时间":"{{ .startTime }}", "告警内容":"{{ for .alerts }} {{ .annotations.message }} {{ end }}" }`
     */
    "Body"?: string;
    /**
     * 告警恢复时发送的通知模板，当**Method**设置为**Post**时必填，可使用`$content`占位符输出通知内容，不可超过500个字符。更多信息，请参见[通知模板的变量说明](~~251834~~)。
     * @example `{ "告警名称":"{{ .commonLabels.alertname }}{{if .commonLabels.clustername }}", "集群名称":"{{ .commonLabels.clustername }} {{ end }}{{if eq "app" .commonLabels._aliyun_arms_involvedObject_kind }}", "应用名称":"{{ .commonLabels._aliyun_arms_involvedObject_name }} {{ end }}", "通知策略":"{{ .dispatchRuleName }}", "恢复时间":"{{ .endTime }}", "告警内容":"{{ for .alerts }} {{ .annotations.message }} {{ end }}" }`
     */
    "RecoverBody"?: string;
}
