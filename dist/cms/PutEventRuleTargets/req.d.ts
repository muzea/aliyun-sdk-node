export interface PutEventRuleTargetsRequest {
    /**
     * 报警规则的名称。
     * @example `testEventRule`
     */
    "RuleName": string;
    /**
     * 函数计算通知方式。
     */
    "FcParameters"?: {
        /**
         * 函数名称。N的取值范围：1~5。
         * @example `fc-test`
         */
        FunctionName: string;
        /**
         * 函数服务对应的地域。N的取值范围：1~5。
         * @example `cn-hangzhou`
         */
        Region: string;
        /**
         * 函数服务的服务名称。N的取值范围为1~5。
         * @example `fc-test`
         */
        ServiceName: string;
        /**
         * 规则发送目标的唯一标识。N的取值范围：1~5。
         * @example `1`
         */
        Id: string;
    }[];
    /**
     * 报警联系组通知方式。
     */
    "ContactParameters"?: {
        /**
         * 报警联系人组的名称。N的取值范围：1~5。
         * @example `默认报警联系组`
         */
        ContactGroupName: string;
        /**
         * 规则发送目标的唯一标识。N的取值范围：1~5。
         * @example `2`
         */
        Id: string;
        /**
         * 报警通知级别。N的取值范围：1~5。取值：
         * <props="china">- 2：电话、短信、钉钉、邮箱</props>
         * <props="china">- 3：短信、钉钉、邮箱</props>
         * <props="china">- 4：钉钉、邮箱</props>
         * <props="intl">4：钉钉、邮箱</props>
         * <props="partner">4：钉钉、邮箱</props>
         * @example `4`
         */
        Level: string;
    }[];
    /**
     * 消息服务通知。
     */
    "MnsParameters"?: {
        /**
         * 消息服务对应的地域。N的取值范围：1~5。
         * @example `cn-hangzhou`
         */
        Region: string;
        /**
         * 队列名称。N的取值范围：1~5。
         * @example `queue1`
         */
        Queue: string;
        /**
         * 规则发送目标的唯一标识。N的取值范围：1~5。
         * @example `3`
         */
        Id: string;
        /**
         * 消息服务的主题。
         * @example `topic_sample`
         */
        Topic: string;
    }[];
    /**
     * URL回调通知方式。
     */
    "WebhookParameters"?: {
        /**
         * 协议名称。N的取值范围：1~5。取值：
         * - http
         * - telnet
         * - ping
         * @example `http`
         */
        Protocol: string;
        /**
         * 回调的URL。N的取值范围：1~5。
         * @example `http://www.aliyun.com`
         */
        Url: string;
        /**
         * HTTP回调的请求方法。N的取值范围：1~5。
         * 目前仅支持GET和POST。
         * @example `GET`
         */
        Method: string;
        /**
         * 规则发送目标的唯一标识。N的取值范围：1~5。
         * @example `4`
         */
        Id: string;
    }[];
    /**
     * 日志服务（SLS）通知方式。
     */
    "SlsParameters"?: {
        /**
         * 日志服务对应的日志库。N的取值范围：1~5。
         * @example `testlogstore`
         */
        LogStore: string;
        /**
         * 日志服务对应的地域。N的取值范围：1~5。
         * @example `cn-hangzhou`
         */
        Region: string;
        /**
         * 日志服务对应的项目。N的取值范围：1~5。
         * @example `testproject`
         */
        Project: string;
        /**
         * 规则发送目标的唯一标识。N的取值范围：1~5。
         * @example `5`
         */
        Id: string;
    }[];
    /**
     * API回调通知参数列表。
     */
    "OpenApiParameters"?: {
        /**
         * API名称。
         * @example `PutLogs`
         */
        Action: string;
        /**
         * 资源的ARN。N的取值范围：1~5。
         * 格式：`arn:acs:${Service}:${Region}:${Account}:${ResourceType}/${ResourceId}`。各字段含义如下：
         *   - Service：云产品。
         *   - Region：地域ID。
         *   - Account：阿里云账号ID。
         *   - ResourceType：资源类型。
         *   - ResourceId：资源ID。
         * @example `acs:log:cn-hangzhou::project/cms-log-mon***​/logstore/cxxxx***`
         */
        Arn: string;
        /**
         * API回调通知方式的唯一标识。
         * @example `3`
         */
        Id: string;
        /**
         * API对应的云产品ID。
         * @example `log`
         */
        Product: string;
        /**
         * 资源对应的地域。
         * @example `cn-hangzhou`
         */
        Region: string;
        /**
         * 角色名称。
         * @example `MyRole`
         */
        Role: string;
        /**
         * API的版本。
         * @example `2019-01-01`
         */
        Version: string;
        /**
         * 报警回调的JSON格式参数。
         * @example `{"customField1":"value1","customField2":"$.name"}`
         */
        JsonParams: string;
    }[];
}
