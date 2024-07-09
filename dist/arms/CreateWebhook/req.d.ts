export interface CreateWebhookRequest {
    /**
     * 自定义联系人名称。
     * @example `Webhook告警`
     */
    "ContactName": string;
    /**
     * HTTP请求方法。
     * - `Get`
     * - `Post`
     * @example `Post`
     */
    "Method": string;
    /**
     * **Method**的请求方法URL。
     * @example `https://oapi.dingtalk.com/robot/send?access_token=e1a049121ddbfce1ca963d115ef88cc7219583c4fb79fe6e398fbfb688******`
     */
    "Url": string;
    /**
     * HTTP请求参数。
     * @example `[{"name":"mike"}]`
     */
    "HttpParams"?: string;
    /**
     * HTTP请求头。
     * @example `[{"Content-Type":"application/json"}]`
     */
    "HttpHeaders"?: string;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 告警触发时发送的通知模板，当**Method**设置为**Post**时必填，可使用$content占位符输出通知内容，不可超过500个字符。
     * @example `{ "告警名称":"{{ .commonLabels.alertname }}{{if .commonLabels.clustername }}", "集群名称":"{{ .commonLabels.clustername }} {{ end }}{{if eq "app" .commonLabels._aliyun_arms_involvedObject_kind }}", "应用名称":"{{ .commonLabels._aliyun_arms_involvedObject_name }} {{ end }}", "通知策略":"{{ .dispatchRuleName }}", "告警时间":"{{ .startTime }}", "告警内容":"{{ for .alerts }} {{ .annotations.message }} {{ end }}" }`
     */
    "Body": string;
    /**
     * 告警恢复时发送的通知模板，当**Method**设置为**Post**时必填，可使用$content占位符输出通知内容，不可超过500个字符。
     * @example `{ "告警名称":"{{ .commonLabels.alertname }}{{if .commonLabels.clustername }}", "集群名称":"{{ .commonLabels.clustername }} {{ end }}{{if eq "app" .commonLabels._aliyun_arms_involvedObject_kind }}", "应用名称":"{{ .commonLabels._aliyun_arms_involvedObject_name }} {{ end }}", "通知策略":"{{ .dispatchRuleName }}", "恢复时间":"{{ .endTime }}", "告警内容":"{{ for .alerts }} {{ .annotations.message }} {{ end }}" }`
     */
    "RecoverBody"?: string;
}
