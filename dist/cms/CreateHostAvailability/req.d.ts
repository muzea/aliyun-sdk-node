export interface CreateHostAvailabilityRequest {
    /**
     * 应用分组ID。
     * @example `123456`
     */
    "GroupId": number;
    /**
     * 可用性监控任务名称。取值范围：4~100个字符，支持英文字母、数字、下划线（_）和汉字。
     * @example `task1`
     */
    "TaskName": string;
    /**
     * 可用性监控任务的探测范围。取值：
     * - GROUP：表示将当前应用分组内的所有ECS实例作为探测任务的探针。
     * - GROUP_SPEC_INSTANCE：表示将当前应用分组内的指定ECS实例作为探测任务的探针。设置该参数时，需要同时设置InstanceList（发起探测的ECS实例列表）。
     * @example `GROUP`
     */
    "TaskScope"?: string;
    /**
     * 可用性监控任务的探测类型。取值：
     * - PING
     * - TELNET
     * - HTTP
     * @example `HTTP`
     */
    "TaskType": string;
    /**
     * HTTP、Telnet探测类型的探测URI地址。
     * @example `https://www.aliyun.com
    telnet://127.0.0.1:80`
     */
    "TaskOption.HttpURI"?: string;
    /**
     * 探测的域名或地址。
     * >如果探测任务类型为PING，则需要设置该参数。
     * @example `www.aliyun.com`
     */
    "TaskOption.TelnetOrPingHost"?: string;
    /**
     * HTTP探测类型的响应字符集。
     * > 仅支持UTF-8。
     * @example `UTF-8`
     */
    "TaskOption.HttpResponseCharset"?: string;
    /**
     * HTTP探测类型探测请求的Post内容。
     * @example `params1=paramsValue1`
     */
    "TaskOption.HttpPostContent"?: string;
    /**
     * 匹配响应的内容。
     * @example `ok`
     */
    "TaskOption.HttpResponseMatchContent"?: string;
    /**
     * 探测类型的方法。取值：
     * - GET
     * - POST
     * - HEAD
     * >如果任务的探测类型为HTTP，则需要设置该参数。
     * @example `GET`
     */
    "TaskOption.HttpMethod"?: string;
    /**
     * 匹配HTTP响应内容的报警规则。取值：
     * - true：如果HTTP响应内容包含设置的报警规则，则报警。
     * - false：如果HTTP响应内容不包含设置的报警规则，则报警。
     * >如果任务的探测类型为HTTP，则该参数生效。
     * @example `true`
     */
    "TaskOption.HttpNegative"?: boolean;
    /**
     * HTTP请求的Header。格式为`参数名:参数`，多个参数之间用回车符分隔，例如：
     * ```
     * params1:value1
     * params2:value2
     * ```
     * @example `token:testTokenValue`
     */
    "TaskOption.HttpHeader"?: string;
    /**
     * 探测频率。单位：秒。取值：15、30、60、120、300、900、1800和3600。
     * > 仅3.5.1及以上版本的云监控插件支持该参数。
     * @example `60`
     */
    "TaskOption.Interval"?: number;
    /**
     * 报警通知类型。取值：
     * <props="china">- 2：电话+短信+邮件+钉钉机器人。</props>
     * <props="china">- 1：短信+邮件+钉钉机器人。</props>
     * <props="china">- 0：邮件+钉钉机器人。</props>
     * <props="intl">0：邮件+钉钉机器人。</props>
     * <props="partner">0：邮件+钉钉机器人。</props>
     * @example `0`
     */
    "AlertConfig.NotifyType": number;
    /**
     * 报警生效的开始时间。取值范围：0~23。
     * 例如：`AlertConfig.StartTime`为0，`AlertConfig.EndTime`为22，表示报警生效时间为00:00:00至22:00:00。
     * >如果报警不在生效时间内，则超过阈值也不会发送报警通知。
     * @example `0`
     */
    "AlertConfig.StartTime"?: number;
    /**
     * 报警生效的结束时间。取值范围：0~23。
     * 例如：`AlertConfig.StartTime`为0，`AlertConfig.EndTime`为22，表示报警生效时间为00:00:00至22:00:00。
     * >如果报警不在生效时间内，则超过阈值也不会发送报警通知。
     * @example `22`
     */
    "AlertConfig.EndTime"?: number;
    /**
     * 通道沉默时间。单位：秒，默认值：86400（1天）。
     * @example `86400`
     */
    "AlertConfig.SilenceTime"?: number;
    /**
     * URL回调地址。
     * @example `https://www.aliyun.com/webhook.json`
     */
    "AlertConfig.WebHook"?: string;
    /**
     * 无。
     */
    "AlertConfigEscalationList": {
        /**
         * 报警的监控项。N的取值范围：1~21。取值：
         * - HttpStatus：HTTP状态码。
         * - HttpLatency：HTTP等待时间。
         * - TelnetStatus：Telnet状态码。
         * - TelnetLatency：Telnet等待时间。
         * - PingLostRate：Ping丢包率。
         * @example `HttpStatus`
         */
        MetricName: string;
        /**
         * 报警阈值。N的取值范围：1~21。
         * @example `90`
         */
        Value: string;
        /**
         * 报警重试次数。N的取值范围：1~21。
         * @example `3`
         */
        Times: number;
        /**
         * 报警规则比较符号。N的取值范围：1~21。取值：
         * - `>`
         * - `>=`
         * - `<`
         * - `<=`
         * - `=`
         * @example `>`
         */
        Operator: string;
        /**
         * 报警统计方法。N的取值范围：1~21。不同监控项的取值如下：
         * - HttpStatus：Value。
         * - HttpLatency：Average。
         * - TelnetStatus：Value。
         * - TelnetLatency：Average。
         * - PingLostRate：Average。
         * >状态码类的统计方法为原始值（Value），延时时间或丢包率的统计方法为平均值（Average）。
         * @example `Value`
         */
        Aggregate: string;
    }[];
    /**
     * 发起探测的ECS实例列表。N的取值范围：1~21。
     * > 当`TaskScope`为`GROUP_SPEC_INSTANCE`时，需要设置该参数。
     * @example `i-absdfkwl321****`
     */
    "InstanceList"?: string[];
    /**
     * 报警触发目标。
     */
    "AlertConfigTargetList"?: {
        /**
         * 报警触发目标ID。
         * @example `1`
         */
        Id: string;
        /**
         * 资源ARN。格式为`acs:{云产品缩写}:{regionId}:{userId}:/{资源类型}/{资源名称}/message`。例如：`acs:mns:cn-hangzhou:120886317861****:/queues/test123/message`。参数说明如下：
         * - {云产品缩写}：目前仅支持消息服务MNS。
         * - {userId}：阿里云账号ID。
         * - {regionId}：消息队列或主题所在地域。
         * - {资源类型}`：接收报警的资源类型。取值：
         *   - **queues**：队列。
         *   - **topics**：主题。
         * - {资源名称}：资源名称。
         *   - 如果资源类型为**queues**，则资源名称为队列名称。
         *   - 如果资源类型为**topics**，则资源名称为主题名称。
         *
         * @example `acs:mns:cn-hangzhou:120886317861****:/queues/test/message`
         */
        Arn: string;
        /**
         * 报警级别。取值：
         * - INFO：信息。
         * - WARN：警告。
         * - CRITICAL：紧急。
         * @example `["INFO", "WARN", "CRITICAL"]`
         */
        Level: string;
        /**
         * 报警回调的JSON格式参数。
         * @example `{"customField1":"value1","customField2":"$.name"}`
         */
        JsonParams: string;
    }[];
}
