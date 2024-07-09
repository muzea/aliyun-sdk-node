export interface DescribeAlertLogListResponse {
    /**
     * 请求ID。
     * @example `1C4A3709-BF52-42EE-87B5-7435F0929585`
     */
    RequestId: string;
    /**
     * 操作是否成功。取值：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 状态码。
     * > 200表示成功。
     * @example `200`
     */
    Code: string;
    /**
     * 错误信息。
     * @example `The specified resource is not found.`
     */
    Message: string;
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 每页显示记录条数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 报警历史列表。
     */
    AlertLogList: {
        /**
         * 监控项名称。
         * @example `cpu_total`
         */
        MetricName: string;
        /**
         * 事件名称。
         * @example `IOHang`
         */
        EventName: string;
        /**
         * 云产品标识。取值：
         * - 如果是阿里云产品，则为云产品名称缩写，例如：ECS。
         * - 如果非阿里云产品，则为`acs_产品关键字`，例如：acs_networkmonitor。
         * @example `ECS`
         */
        Product: string;
        /**
         * 命中的报警黑名单UUID。
         * @example `8410dbbd-7d30-41c5-94cb-****`
         */
        BlackListUUID: string;
        /**
         * 报警相关信息，为一个JSON串。
         * @example `{"alertName":"e47aa0ac-4076-44db-a47d-d1083968****_Availability"}`
         */
        Message: string;
        /**
         * 云产品的命名空间。
         * @example `acs_ecs_dashboard`
         */
        Namespace: string;
        /**
         * 报警级别的变更。取值：
         * - `P4->OK`：由P4级别报警到报警恢复。
         * - `P4->P4`：P4级别报警。
         * @example `P4->OK`
         */
        LevelChange: string;
        /**
         * 资源ID。
         * @example `i-m5e1qg6uo38rztr4****`
         */
        InstanceId: string;
        /**
         * 报警规则名称。
         * @example `CPU使用率`
         */
        RuleName: string;
        /**
         * 报警规则ID。
         * @example `d582b9e9-b1c1-4f17-9279-0fe7333a****_ResponseTime`
         */
        RuleId: string;
        /**
         * 命中的报警黑名单名称。
         * @example `Black_Test`
         */
        BlackListName: string;
        /**
         * 应用分组名称。
         * @example `ECS_Instances`
         */
        GroupName: string;
        /**
         * 应用分组ID。
         * @example `7301****`
         */
        GroupId: string;
        /**
         * 发生报警的时间戳。
         * 单位：毫秒。
         * @example `1610043776621`
         */
        AlertTime: string;
        /**
         * 资源名称。
         * @example `portalHost`
         */
        InstanceName: string;
        /**
         * 命中的报警黑名单详情。
         * @example `{"id":12****,"metricProject":"acs_ecs_dashboard","userId":173651113438****,"uuid":"8410dbbd-7d30-41c5-94cb-****","name":"alert-****","productCategory":"ecs","instances":[{"instanceId":"i-m5e1qg6uo38rztr4****"}],"metrics":null,"scopeType":"USER","scopeValue":"","startTime":"0001-01-01T00:00:00Z","endTime":"9999-12-31T23:59:59.999999999+08:00","effectiveTime":null,"isEnable":true,"status":1,"gmtCreate":"2021-11-02T16:35:59+08:00","gmtModified":"2021-11-02T16:35:59+08:00","loadTime":"2021-11-02T16:36:15.213072177+08:00"}`
         */
        BlackListDetail: string;
        /**
         * 报警级别和报警通知方式。取值：
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
        /**
         * 报警状态。取值：
         * - 0：发生报警或报警恢复正常。
         * - 1：非生效期。
         * - 2：通道沉默周期。
         * - 3：主机重启中。
         * - 4：不发送报警。
         * <props="china">当报警状态为0时，如果Level的取值为P2、P3或P4，则发生告警；如果Level的取值为OK，则报警恢复正常。</props>
         * <props="intl">当报警状态为0时，如果Level的取值为P4，则发生告警；如果Level的取值为OK，则报警恢复正常。</props>
         * <props="partner">当报警状态为0时，如果Level的取值为P4，则发生告警；如果Level的取值为OK，则报警恢复正常。</props>
         * @example `0`
         */
        SendStatus: string;
        /**
         * 报警的扩展信息。
         */
        ExtendedInfo: {
            /**
             * 扩展字段名称。
             * @example `userId`
             */
            Name: string;
            /**
             * 扩展字段值。
             * @example `100931896542****`
             */
            Value: string;
        }[];
        /**
         * 报警资源的维度。
         */
        Dimensions: {
            /**
             * 报警资源的Key。
             * @example `instanceId`
             */
            Key: string;
            /**
             * 报警资源的Value。
             * @example `i-m5e1qg6uo38rztr4****`
             */
            Value: string;
        }[];
        /**
         * 报警回调的URL地址列表。
         */
        WebhookList: {
            /**
             * 报警回调的状态码。
             * @example `200`
             */
            code: string;
            /**
             * 报警回调的URL地址。
             * @example `https://www.aliyun.com/webhook.html`
             */
            url: string;
            /**
             * 报警回调的返回信息。
             * @example `success`
             */
            message: string;
        }[];
        DingdingWebhookList: string[];
        ContactOnCallList: string[];
        ContactMailList: string[];
        ContactGroups: string[];
        ContactALIIWWList: string[];
        ContactSMSList: string[];
        ContactDingList: string[];
        /**
         * 报警推送结果详情。
         */
        SendDetail: {
            /**
             * 报警信息推送状态。
             * - success：推送成功。
             * - 错误码：当配置错误时，无推送列表，显示错误码。
             * @example `success`
             */
            ResultCode: string;
            /**
             * 按报警渠道推送的报警结果列表。
             */
            ChannelResultList: {
                /**
                 * 报警推送渠道。取值：
                 * - MAIL：邮件。
                 * - SMS：短信。
                 * - WEBHOOK：报警回调。
                 * - SLS：日志服务。
                 * - ONCALL：电话。
                 * - FC：函数计算
                 * - MNS：消息队列。
                 * @example `MAIL`
                 */
                Channel: string;
                /**
                 * 云监控向报警渠道发送的报警信息结果列表。
                 */
                ResultList: {
                    /**
                     * 状态码。
                     * - 当`Channel`为`WEBHOOK`时，状态码为200或500。
                     * - 当`Channel`为`MAIL`、`SMS`、`SLS`、`ONCALL`、`FC`和`MNS`时，无该参数，或该参数为空。
                     * @example `200`
                     */
                    Code: string;
                    /**
                     * 调用其他云产品返回的请求ID。
                     * @example `0BDAF8A8-04DC-5F0C-90E4-724D42C4****`
                     */
                    RequestId: string;
                    /**
                     * 调用目标的结果
                     * - true  成功
                     * - false  失败
                     * @example `true`
                     */
                    Success: boolean;
                    /**
                     * 返回结果详情。
                     * @example `{ }`
                     */
                    Detail: string;
                    notifyTargetList: string[];
                }[];
            }[];
        };
        /**
         * 触发报警的规则。
         */
        Escalation: {
            /**
             * 触发报警的规则描述。
             * > 报警规则的主体，当监控数据满足报警条件时，触发报警规则。
             * @example `$Average<90`
             */
            Expression: string;
            /**
             * 报警重试次数。
             * @example `1`
             */
            Times: number;
            /**
             * 报警级别和报警通知方式。取值：
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
        };
        /**
         * 报警的发送结果列表。
         */
        SendResultList: {
            /**
             * 发送报警渠道。取值：
             * - MAIL：邮件。
             * - ALIIM：旺旺。
             * - SMS：短信。
             * - CALL：电话。
             * - DING：钉钉机器人。
             * - Merged：报警合并。
             * @example `MAIL`
             */
            Key: string;
            /**
             * 报警渠道对应的通知对象。
             */
            Value: string[];
        }[];
        /**
         * 日志ID。
         * @example `7510****::e8a472a0-46ae-4ac0-84b1-e46be368****`
         */
        LogId: string;
    }[];
}
