export interface DescribeAlertHistoryListResponse {
    /**
     * 状态码。
     * >200表示成功。
     * @example `200`
     */
    Code: string;
    /**
     * 错误信息。
     * @example `The Request is not authorization.`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `C3C69FBE-2262-541F-A409-C52F380BAE63`
     */
    RequestId: string;
    /**
     * 总记录条数。
     * @example `2`
     */
    Total: string;
    /**
     * 操作是否成功。取值：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: boolean;
    AlarmHistoryList: {
        /**
         * 报警历史详情。
         */
        AlarmHistory: {
            /**
             * 通道沉默状态。取值：
             * - 2（默认值）：通道沉默。
             * - 0：报警或恢复。
             * - 1：失效期。
             * @example `2`
             */
            Status: number;
            /**
             * 监控项名称。
             * @example `cpu_total`
             */
            MetricName: string;
            /**
             * 报警重试次数。
             * @example `3`
             */
            EvaluationCount: number;
            /**
             * 报警状态。取值：
             * - ALARM：报警状态。
             * - OK：正常状态。
             * @example `ALARM`
             */
            State: string;
            /**
             * 云服务的命名空间。
             * @example `acs_ecs_dashboard`
             */
            Namespace: string;
            /**
             * URL回调地址。
             * @example `https://www.aliyun.com`
             */
            Webhooks: string;
            /**
             * 报警规则名称。
             * @example `ECS_Rule`
             */
            RuleName: string;
            /**
             * 报警规则ID。
             * @example `applyTemplate61dc81b5-d357-4cf6-a9b7-9f83c1d5****`
             */
            RuleId: string;
            /**
             * 报警持续的时间。单位：毫秒。
             * @example `360133`
             */
            LastTime: number;
            /**
             * 出现报警或报警恢复时的监控值。
             * @example `10.58`
             */
            Value: string;
            /**
             * 报警触发的表达式。
             * @example `$Average>=10`
             */
            Expression: string;
            /**
             * 应用分组ID。
             * @example `7671****`
             */
            GroupId: string;
            /**
             * 报警推送的时间戳。单位：毫秒。
             * @example `1640586600000`
             */
            AlertTime: number;
            /**
             * 实例名称。
             * @example `i-bp1cqhiw1za2****`
             */
            InstanceName: string;
            /**
             * 报警的资源。
             * @example `{\"instanceId\":\"i-bp1cqhiw1za2****\"}`
             */
            Dimensions: string;
            /**
             * 报警的级别和通知方式。取值：
             * <props="china">- P2：电话+短信+邮件+钉钉机器人。</props>
             * <props="china">- P3：短信+邮件+钉钉机器人。</props>
             * <props="china">- P4：邮件+钉钉机器人。</props>
             * <props="china">- OK：无报警。</props>
             * <props="intl">- P4：邮件+钉钉机器人。</props>
             * <props="intl">- OK：无报警。</props>
             * <props="partner">- P4：邮件+钉钉机器人。</props>
             * <props="partner">- OK：无报警。</props>
             * @example `P4`
             */
            Level: string;
            Contacts: {
                /**
                 * 报警联系人。
                 */
                Contact: string[];
            };
            ContactALIIMs: {
                /**
                 * 报警联系人的旺旺号。
                 * > 该参数仅适用于中国站。
                 */
                ContactALIIM: string[];
            };
            ContactMails: {
                /**
                 * 报警联系人的邮箱地址。
                 */
                ContactMail: string[];
            };
            ContactSmses: {
                /**
                 * 报警联系人的手机号码。
                 * > 该参数仅适用于中国站。
                 */
                ContactSms: string[];
            };
            ContactGroups: {
                /**
                 * 报警联系人组。
                 */
                ContactGroup: string[];
            };
        }[];
    };
}
