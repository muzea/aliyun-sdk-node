export interface DescribeJobMonitorRuleResponse {
    /**
     * 状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 请求ID。
     * @example `0CA14388-DD89-4A7B-8CDD-884A10CE****`
     */
    RequestId: string;
    /**
     * 迁移、同步或订阅任务ID。
     * @example `ta7w132u12h****`
     */
    DtsJobId: string;
    /**
     * 调用出错时返回的错误码。
     * @example `403`
     */
    ErrCode: string;
    /**
     * 请求是否成功，返回值：
     * - **true**：请求成功。
     * - **false**：请求失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 调用错误时返回的错误信息。
     * @example `The Value of Input Parameter %s is not valid.	`
     */
    ErrMessage: string;
    /**
     * 错误码，本参数即将下线。
     * @example `200`
     */
    Code: string;
    /**
     * 动态错误信息，用于替换返回参数**ErrMessage**错误信息中的**%s**。
     * > 如果**ErrMessage**返回**The Value of Input Parameter %s is not valid**，且**DynamicMessage**返回**DtsJobId**，则代表所传入的请求参数**DtsJobId**不合法。
     * @example `DtsJobId`
     */
    DynamicMessage: string;
    /**
     * DTS任务的监控规则信息。
     */
    MonitorRules: {
        /**
         * 监控规则的类型，返回值：
         * - **delay**：延迟告警。
         * - **error**：异常告警。
         * @example `delay`
         */
        Type: string;
        /**
         * 触发延迟告警的阈值，单位为秒。
         * @example `11`
         */
        DelayRuleTime: number;
        /**
         * 是否启用监控规则，返回值：
         * - **Y**：启用。
         * - **N**：不启用。
         * @example `Y`
         */
        State: string;
        /**
         * 告警触发后需通知的联系人手机号码，多个手机号码之间以英文逗号（,）分隔。
         * @example `1361234****,1371234****`
         */
        Phone: string;
        JobType: string;
        Period: number;
        Times: number;
        NoticeValue: number;
        JobId: string;
    }[];
    /**
     * 同步到Kafka链路时的topic
     */
    Topics: string[];
}
