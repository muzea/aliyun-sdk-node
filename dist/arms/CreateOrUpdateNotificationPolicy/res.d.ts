export interface CreateOrUpdateNotificationPolicyResponse {
    /**
     * 请求ID。
     * @example `A5EC8221-08F2-4C95-9AF1-49FD998C****`
     */
    RequestId: string;
    /**
     * 通知策略对象。
     */
    NotificationPolicy: {
        /**
         * 通知策略ID。
         * @example `1234`
         */
        Id: number;
        /**
         * 通知策略名称。
         * @example `notificationpolicy_test`
         */
        Name: string;
        /**
         * 匹配告警事件规则。
         */
        MatchingRules: {
            /**
             * 匹配条件。
             */
            MatchingConditions: {
                /**
                 * 匹配条件Key。
                 * @example `altertname`
                 */
                Key: string;
                /**
                 * 匹配条件Value。
                 * @example `test`
                 */
                Value: string;
                /**
                 * 匹配条件聚合方式。
                 * - `eq`：等于
                 * - `neq`：不等于
                 * - `in`：包含
                 * - `nin`：不包含
                 * - `re`：匹配正则
                 * - `nre`：正则不匹配
                 * @example `eq`
                 */
                Operator: string;
            }[];
        }[];
        /**
         * 当告警下面全部事件都恢复时，告警状态是否自动恢复为已解决。当告警恢复时，系统将会发送通知给处理人。
         * - `true`（默认）：发送通知。
         * - `false`：不发送通知。
         * @example `true`
         */
        SendRecoverMessage: boolean;
        /**
         * 事件分组。
         */
        GroupRule: {
            /**
             * 设置事件分组。
             *
             * - 不填（默认）：所有告警会按`alertname`分组发送给处理人。
             * - 设置分组字段：相同字段的告警内容会分别通过独立信息发送给处理人。
             */
            GroupingFields: string[];
            /**
             * 分组等待时间，默认为5秒。
             * @example `5`
             */
            GroupWait: number;
            /**
             * 分组间隔时间，默认为30秒。
             * @example `30`
             */
            GroupInterval: number;
        };
        /**
         * 通知规则。
         */
        NotifyRule: {
            /**
             * 通知时间段开始时间。
             * @example `00:00`
             */
            NotifyStartTime: string;
            /**
             * 通知时间段结束时间。
             * @example `23:59`
             */
            NotifyEndTime: string;
            /**
             * 通知方式。
             */
            NotifyChannels: string[];
            /**
             * 通知对象列表。
             */
            NotifyObjects: {
                /**
                 * 通知对象类型。
                 * - CONTACT：联系人
                 * - CONTACT_GROUP：联系人组
                 * - ARMS_CONTACT：ARMS联系人
                 * - ARMS_CONTACT_GROUP：ARMS联系人组
                 * - DING_ROBOT_GROUP：钉钉/飞书/企业微信 IM机器人
                 * - CONTACT_SCHEDULE：排班表
                 * @example `CONTACT`
                 */
                NotifyObjectType: string;
                /**
                 * 通知对象ID。
                 * @example `123`
                 */
                NotifyObjectId: number;
                /**
                 * 通知对象名称。
                 * @example `test`
                 */
                NotifyObjectName: string;
                /**
                 * 通知对象为联系人时的单独的联系方式
                 */
                NotifyChannels: string[];
            }[];
        };
        /**
         * 通知模板。
         */
        NotifyTemplate: {
            /**
             * 邮件告警通知标题。
             * @example `{{ .commonLabels.alertname }}`
             */
            EmailTitle: string;
            /**
             * 邮件告警通知内容。
             * @example `告警名称：{{ .commonLabels.alertname }}{{if .commonLabels.clustername }} 集群名称：{{ .commonLabels.clustername }} {{ end }}{{if eq "app" .commonLabels._aliyun_arms_involvedObject_kind }} 应用名称：{{ .commonLabels._aliyun_arms_involvedObject_name }} {{ end }} 通知策略：{{ .dispatchRuleName }} 告警时间：{{ .startTime }} 告警内容：{{ for .alerts }} {{ .annotations.message }}  {{if .generatorURL }}  <a href="{{.generatorURL}}" > 详情链接</a>  {{ end }} {{ end }}`
             */
            EmailContent: string;
            /**
             * 邮件告警恢复通知标题。
             * @example `{{ .commonLabels.alertname }}`
             */
            EmailRecoverTitle: string;
            /**
             * 邮件告警恢复通知内容。
             * @example `告警名称：{{ .commonLabels.alertname }}{{if .commonLabels.clustername }} 集群名称：{{ .commonLabels.clustername }} {{ end }}{{if eq "app" .commonLabels._aliyun_arms_involvedObject_kind }} 应用名称：{{ .commonLabels._aliyun_arms_involvedObject_name }} {{ end }} 通知策略：{{ .dispatchRuleName }} 恢复时间：{{ .endTime }} 告警内容：{{ for .alerts }} {{ .annotations.message }}  {{if .generatorURL }} <a href="{{.generatorURL}}" > 详情链接</a>  {{ end }} {{ end }}`
             */
            EmailRecoverContent: string;
            /**
             * 短信告警通知内容。
             * @example `发生{{ .level }}告警 告警名称：{{ .commonLabels.alertname }}{{if .commonLabels.clustername }} 集群名称：{{ .commonLabels.clustername }} {{ end }}{{if eq "app" .commonLabels._aliyun_arms_involvedObject_kind }} 应用名称：{{ .commonLabels._aliyun_arms_involvedObject_name }} {{ end }} 通知策略：{{ .dispatchRuleName }} 告警时间：{{ .startTime }} 告警内容：{{ for .alerts }} {{ .annotations.message }} {{ end }}`
             */
            SmsContent: string;
            /**
             * 短信告警恢复通知内容。
             * @example `告警已经恢复 告警名称：{{ .commonLabels.alertname }}{{if .commonLabels.clustername }} 集群名称：{{ .commonLabels.clustername }} {{ end }}{{if eq "app" .commonLabels._aliyun_arms_involvedObject_kind }} 应用名称：{{ .commonLabels._aliyun_arms_involvedObject_name }} {{ end }} 通知策略：{{ .dispatchRuleName }} 恢复时间：{{ .endTime }} 告警内容：{{ for .alerts }} {{ .annotations.message }} {{ end }}`
             */
            SmsRecoverContent: string;
            /**
             * 电话告警通知内容。
             * @example `告警名称：{{ .commonLabels.alertname }}{{if .commonLabels.clustername }} 集群名称：{{ .commonLabels.clustername }} {{ end }}{{if eq "app" .commonLabels._aliyun_arms_involvedObject_kind }} 应用名称：{{ .commonLabels._aliyun_arms_involvedObject_name }} {{ end }} 通知策略：{{ .dispatchRuleName }} 告警时间：{{ .startTime }} 告警内容：{{ for .alerts }} {{ .annotations.message }} {{ end }}`
             */
            TtsContent: string;
            /**
             * 电话告警恢复通知内容。
             * @example `告警名称：{{ .commonLabels.alertname }}{{if .commonLabels.clustername }} 集群名称：{{ .commonLabels.clustername }} {{ end }}{{if eq "app" .commonLabels._aliyun_arms_involvedObject_kind }} 应用名称：{{ .commonLabels._aliyun_arms_involvedObject_name }} {{ end }} 通知策略：{{ .dispatchRuleName }} 恢复时间：{{ .endTime }} 告警内容：{{ for .alerts }} {{ .annotations.message }} {{ end }}`
             */
            TtsRecoverContent: string;
            /**
             * 机器人告警通知内容。
             * @example `{{if .commonLabels.clustername }}   >  集群名称：{{ .commonLabels.clustername }}    {{ end }}{{if eq "app" .commonLabels._aliyun_arms_involvedObject_kind }}   >  应用名称：{{ .commonLabels._aliyun_arms_involvedObject_name }}    {{ end }}{{ for .alerts }} >  {{ .annotations.message }} {{if .generatorURL }} [详情链接]({{.generatorURL}}) {{end}} {{if  eq "true" .labels._aliyun_arms_is_denoise_filtered }} （疑似噪音） {{end}}  {{end}}`
             */
            RobotContent: string;
        };
        /**
         * 升级规则ID。
         * @example `123`
         */
        EscalationPolicyId: number;
        /**
         * 对于长期未解决的告警是否发送重复通知。
         * - `true`（默认）：按设置的重复通知时间间隔发送通知。
         * - `false`：根据设置升级策略发送通知。
         * @example `true`
         */
        Repeat: boolean;
        /**
         * 重复通知时间间隔，单位为秒。
         * @example `600`
         */
        RepeatInterval: number;
        /**
         * 告警需要推送到的工单系统，显示为工单系统的集成ID。
         * @example `34`
         */
        IntegrationId: number;
        /**
         * 极简模式
         */
        DirectedMode: boolean;
        /**
         * 通知策略是否启用，enable 启用，disable 停用
         * @example `enable`
         */
        State: string;
    };
}
