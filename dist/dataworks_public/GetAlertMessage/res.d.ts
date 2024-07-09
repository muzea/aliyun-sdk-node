export interface GetAlertMessageResponse {
    /**
     * 请求的ID。用于定位日志，排查问题。
     * @example `0000-ABCD-EFG****`
     */
    RequestId: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 错误信息。
     * @example `The specified parameters are invalid.`
     */
    ErrorMessage: string;
    /**
     * 错误码。
     * @example `Invalid.Tenant.ConnectionNotExists`
     */
    ErrorCode: string;
    /**
     * 调用是否成功。取值如下：
     * - true：调用成功。
     * - false：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回数据详情。
     */
    Data: {
        /**
         * 当Source（报警来源）为REMIND_ALERT（自定义报警）时，返回触发的自定义监控规则ID。
         * @example `1234`
         */
        RemindId: number;
        /**
         * 报警信息的发送状态。取值如下：
         * - READY_TO_SEND（准备发送）
         * - SEND_FAIL（发送失败）
         * - SEND_SUCCESS（发送成功）
         * - SEND_OVERLIMIT（报警超限）
         * @example `READY_TO_SEND`
         */
        AlertMessageStatus: string;
        /**
         * 报警信息接收人的阿里云UID。
         * @example `9527952795****`
         */
        AlertUser: string;
        /**
         * 报警时间。
         * @example `1553524393000`
         */
        AlertTime: number;
        /**
         * 报警方式。取值如下：
         * - MAIL（邮件）
         * - SMS（短信）
         * - PHONE（电话，仅DataWorks专业版及以上版本支持）
         * @example `SMS`
         */
        AlertMethod: string;
        /**
         * 报警来源。取值如下：
         * - REMIND_ALERT（自定义报警）
         * - TOPIC_ALERT（事件报警）
         * - SLA_ALERT（基线预警）
         * - NODE_CYCLE_ALERT（节点成环报警）
         * - NODE_LONELY_ALERT（节点孤立报警）
         * @example `REMIND_ALERT`
         */
        Source: string;
        /**
         * 报警内容。
         * @example `节点出错`
         */
        Content: string;
        /**
         * 当Source（报警来源）为REMIND_ALERT（自定义提醒）时，返回触发的自定义监控规则名称。
         * @example `自定义监控规则名称`
         */
        RemindName: string;
        /**
         * 报警ID。
         * @example `123`
         */
        AlertId: number;
        /**
         * 当Source（报警来源）为REMIND_ALERT（自定义提醒）时，返回触发自定义监控规则的实例列表。其它类型的报警来源返回为空。
         */
        Instances: {
            /**
             * 实例状态。取值如下：
             * - NOT_RUN（未运行）
             * - WAIT_TIME（等待时间）
             * - WAIT_RESOURCE（等待资源）
             * - RUNNING（运行中）
             * - CHECKING（校检中）
             * - CHECKING_CONDITION（条件检测中）
             * - FAILURE（运行失败）
             * - SUCCESS（运行成功）
             * @example `NOT_RUN`
             */
            Status: string;
            /**
             * 实例的ID。
             * @example `12312312`
             */
            InstanceId: number;
            /**
             * 节点的名称。
             * @example `节点名`
             */
            NodeName: string;
            /**
             * 节点的ID。
             * @example `1234`
             */
            NodeId: number;
            /**
             * 节点所在工作空间的ID。
             * @example `1234`
             */
            ProjectId: number;
        }[];
        /**
         * 当Source（报警来源）为TOPIC_ALERT（全局事件告警）时，返回触发报警的事件列表。当报警来源为其它类型时，返回结果为空。
         */
        Topics: {
            /**
             * 事件的名称。
             * @example `9527出错`
             */
            TopicName: string;
            /**
             * 事件关联的实例ID。
             * @example `12345`
             */
            InstanceId: number;
            /**
             * 事件的ID。
             * @example `412431`
             */
            TopicId: number;
            /**
             * 事件责任人的阿里云UID。
             * @example `9527952795****`
             */
            TopicOwner: string;
            /**
             * 事件关联的任务节点ID。
             * @example `1234`
             */
            NodeId: number;
            /**
             * 事件的状态。取值如下：
             * - IGNORE（已忽略）
             * - NEW（新发现）
             * - FIXING（处理中）
             * - RECOVER（已恢复）
             * @example `FIXING`
             */
            TopicStatus: string;
        }[];
        /**
         * 不同的报警来源返回不同的节点列表：
         * 当Source（报警来源）为NODE_ CYCLE_ALERT（节点成环报警）时，返回成环的节点类型。
         * 当Source（报警来源）为NODELONELYALERT（节点孤立报警）时，返回孤立的节点类型。
         */
        Nodes: {
            /**
             * 节点责任人的阿里云UID。
             * @example `95279527952****`
             */
            Owner: string;
            /**
             * 节点的名称。
             * @example `节点名`
             */
            NodeName: string;
            /**
             * 节点的ID。
             * @example `1234`
             */
            NodeId: number;
            /**
             * 节点所在工作空间的ID。
             * @example `1234`
             */
            ProjectId: number;
        }[];
        /**
         * 当Source（报警来源）为SLA_ALERT（基线报警）时，返回触发基线预警的基本实例信息。当报警来源为其它类型时，返回为空。
         */
        SlaAlert: {
            /**
             * 基线状态。取值如下：
             * - ERROR（异常）
             * - SAFE（安全）
             * - DANGEROUS（预警）
             * - OVER（破线）
             * @example `SAFE`
             */
            Status: string;
            /**
             * 基线责任人的阿里云UID，多个UID之间使用英文逗号（,）分隔。
             * @example `952795279****`
             */
            BaselineOwner: string;
            /**
             * 基线的ID。
             * @example `15142123`
             */
            BaselineId: number;
            /**
             * 基线的名称。
             * @example `基线名`
             */
            BaselineName: string;
            /**
             * 基线实例的业务日期时间戳。
             * @example `1553443200000`
             */
            Bizdate: number;
            /**
             * 基线所在工作空间的ID。
             * @example `1234`
             */
            ProjectId: number;
            /**
             * 基线实例的周期号：天基线为1，小时基线范围为\[1,24]。
             * @example `1`
             */
            InGroupId: number;
        };
    };
}
