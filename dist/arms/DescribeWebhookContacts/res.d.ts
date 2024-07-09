export interface DescribeWebhookContactsResponse {
    /**
     * 请求ID。
     * @example `4D6C358A-A58B-4F4B-94CE-F5AAF023****`
     */
    RequestId: string;
    /**
     * 分页对象。
     */
    PageBean: {
        /**
         * 查询到的Webhook告警联系人总数。
         * @example `1`
         */
        Total: number;
        /**
         * 查询的页数。
         * @example `1`
         */
        Page: number;
        /**
         * 每页的Webhook告警联系人数。
         * @example `20`
         */
        Size: number;
        /**
         * Webhook告警联系人列表。
         */
        WebhookContacts: {
            /**
             * Webhook告警联系人ID。
             * @example `123`
             */
            WebhookId: number;
            /**
             * Webhook告警联系人名称。
             * @example `webhook名称`
             */
            WebhookName: string;
            /**
             * Webhook告警联系人详情。
             */
            Webhook: {
                /**
                 * HTTP请求方法。
                 * - Get
                 * - Post
                 * @example `Post`
                 */
                Method: string;
                /**
                 * 请求方法URL。
                 * @example `https://oapi.dingtalk.com/robot/send?access_token=91f2f6****`
                 */
                Url: string;
                /**
                 * HTTP请求头。
                 * @example `[{"Content-Type":"application/json"}]`
                 */
                BizHeaders: any;
                /**
                 * HTTP请求参数。
                 * @example `[{"content:"mike"}]`
                 */
                BizParams: any;
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
        }[];
    };
}
