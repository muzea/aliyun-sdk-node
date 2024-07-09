export interface CreateOrUpdateWebhookContactResponse {
    /**
     * 请求ID。
     * @example `16AF921B-8187-489F-9913-43C808B4****`
     */
    RequestId: string;
    /**
     * 返回的WebhookContact对象。
     */
    WebhookContact: {
        /**
         * Webhook告警联系人ID。
         * @example `123`
         */
        WebhookId: number;
        /**
         * Webhook告警联系人名称。
         * @example `Webhook告警`
         */
        WebhookName: string;
        /**
         * 返回的Webhook对象。
         */
        Webhook: {
            /**
             * HTTP请求方法。
             * - Post
             * - Get
             * @example `Post`
             */
            Method: string;
            /**
             * 请求方法URL。
             * @example `https://oapi.dingtalk.com/robot/send?access_token=e1a049121******`
             */
            Url: string;
            /**
             * HTTP请求头。
             * @example `[{"Content-Type":"application/json;charset=utf-8"}]`
             */
            BizHeaders: string;
            /**
             * HTTP请求参数。
             * @example `[{"content":"mike"}]`
             */
            BizParams: string;
            /**
             * 告警通知模板。
             * @example `{ "告警名称":"{{ .commonLabels.alertname }}{{if .commonLabels.clustername }}", "集群名称":"{{ .commonLabels.clustername }} {{ end }}{{if eq "app" .commonLabels._aliyun_arms_involvedObject_kind }}", "应用名称":"{{ .commonLabels._aliyun_arms_involvedObject_name }} {{ end }}", "通知策略":"{{ .dispatchRuleName }}", "告警时间":"{{ .startTime }}", "告警内容":"{{ for .alerts }} {{ .annotations.message }} {{ end }}" }`
             */
            Body: string;
            /**
             * 告警恢复模板。
             * @example `{ "告警名称":"{{ .commonLabels.alertname }}{{if .commonLabels.clustername }}", "集群名称":"{{ .commonLabels.clustername }} {{ end }}{{if eq "app" .commonLabels._aliyun_arms_involvedObject_kind }}", "应用名称":"{{ .commonLabels._aliyun_arms_involvedObject_name }} {{ end }}", "通知策略":"{{ .dispatchRuleName }}", "恢复时间":"{{ .endTime }}", "告警内容":"{{ for .alerts }} {{ .annotations.message }} {{ end }}" }`
             */
            RecoverBody: string;
        };
    };
}
