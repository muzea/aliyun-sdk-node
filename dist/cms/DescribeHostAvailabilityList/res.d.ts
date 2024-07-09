export interface DescribeHostAvailabilityListResponse {
    /**
     * 状态码。
     * >200表示成功。
     * @example `200`
     */
    Code: string;
    /**
     * 错误信息。
     * @example `The specified resource is not found.`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `4A288E86-45C3-4858-9DB0-6D85B10BD92A`
     */
    RequestId: string;
    /**
     * 总记录条数。
     * @example `1`
     */
    Total: number;
    /**
     * 操作是否成功。取值：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: boolean;
    TaskList: {
        /**
         * 可用性监控任务列表。
         */
        NodeTaskConfig: {
            /**
             * 任务类型。取值：
             * - PING
             * - TELNET
             * - HTTP
             * @example `HTTP`
             */
            TaskType: string;
            /**
             * 应用分组名称。
             * @example `Group_ECS`
             */
            GroupName: string;
            /**
             * 应用分组ID。
             * @example `12345`
             */
            GroupId: number;
            /**
             * 可用性监控任务名称。
             * @example `ecs_instance`
             */
            TaskName: string;
            /**
             * 可用性监控任务是否禁用。取值：
             * - true：禁用。
             * - false：启用。
             * @example `false`
             */
            Disabled: boolean;
            /**
             * 可用性监控任务的探测范围。取值：
             * - GROUP：表示将当前应用分组内的所有ECS实例作为探测任务的探针。
             * - GROUP_SPEC_INSTANCE：表示将当前应用分组内的指定ECS实例作为探测任务的探针。
             * @example `GROUP`
             */
            TaskScope: string;
            /**
             * 可用性监控任务ID。
             * @example `123456`
             */
            Id: number;
            Instances: {
                /**
                 * 发起探测的ECS实例列表。
                 */
                Instance: string[];
            };
            /**
             * 可用性监控任务的参数选项。
             */
            TaskOption: {
                /**
                 * 探测类型的方法。取值：
                 * - GET
                 * - POST
                 * - HEAD
                 * @example `GET`
                 */
                HttpMethod: string;
                /**
                 * 探测频率。单位：秒。
                 * @example `60`
                 */
                Interval: number;
                /**
                 * HTTP探测类型的探测URI地址。
                 * @example `https://www.aliyun.com`
                 */
                HttpURI: string;
                /**
                 * 探测的域名或地址。
                 * @example `ssh.aliyun.com`
                 */
                TelnetOrPingHost: string;
                /**
                 * HTTP探测类型的响应字符集。
                 * @example `UTF-8`
                 */
                HttpResponseCharset: string;
                /**
                 * HTTP探测类型探测请求的Post内容。
                 * @example `params1=paramsValue1`
                 */
                HttpPostContent: string;
                /**
                 * 匹配HTTP响应内容的报警规则。取值：
                 * - true：如果HTTP响应内容包含设置的报警规则，则报警。
                 * - false：如果HTTP响应内容不包含设置的报警规则，则报警。
                 * @example `true`
                 */
                HttpNegative: boolean;
                /**
                 * HTTP探测类型匹配响应内容。
                 * @example `OK`
                 */
                HttpKeyword: string;
            };
            /**
             * 报警规则配置。
             */
            AlertConfig: {
                /**
                 * 通道沉默时间。单位：秒。默认值：86400。
                 * @example `86400`
                 */
                SilenceTime: number;
                /**
                 * 报警生效的结束时间。取值范围：0~23。
                 * 例如：`AlertConfig.StartTime`为0，`AlertConfig.EndTime`为22，表示报警生效时间为00:00:00至22:00:00。
                 * >如果报警不在生效时间内，则超过阈值也不会发送报警通知。
                 * @example `22`
                 */
                EndTime: number;
                /**
                 * 报警生效的开始时间。取值范围：0~23。
                 * 例如：`AlertConfig.StartTime`为0，`AlertConfig.EndTime`为22，表示报警生效时间为00:00:00至22:00:00。
                 * >如果报警不在生效时间内，则超过阈值也不会发送报警通知。
                 * @example `0`
                 */
                StartTime: number;
                /**
                 * 报警发生回调时的URL地址。
                 * 云监控会将报警信息通过POST请求推送到该地址，目前仅支持HTTP协议。
                 * @example `https://www.aliyun.com`
                 */
                WebHook: string;
                /**
                 * 报警通知类型。取值：
                 * <props="china">- 2：电话+短信+邮件+钉钉机器人。</props>
                 * <props="china">- 1：短信+邮件+钉钉机器人。</props>
                 * <props="china">- 0：邮件+钉钉机器人。</props>
                 * <props="intl">- 2：邮件+钉钉机器人。</props>
                 * <props="intl">- 1：邮件+钉钉机器人。</props>
                 * <props="intl">- 0：邮件+钉钉机器人。</props>
                 * @example `1`
                 */
                NotifyType: number;
                EscalationList: {
                    /**
                     * 报警触发条件。
                     */
                    escalationList: {
                        /**
                         * 报警阈值。
                         * @example `400`
                         */
                        Value: string;
                        /**
                         * 报警监控项。取值：
                         * - HttpStatus：HTTP状态码。
                         * - HttpLatency：HTTP等待时间。
                         * - TelnetStatus：TELNET状态码。
                         * - TelnetLatency：TELNET等待时间。
                         * - PingLostRate：PING丢包率。
                         * @example `HttpStatus`
                         */
                        MetricName: string;
                        /**
                         * 报警规则比较符号。取值：
                         * - `>`
                         * - `>=`
                         * - `<`
                         * - `<=`
                         * - `=`
                         * @example `=`
                         */
                        Operator: string;
                        /**
                         * 报警周期。即连续几个周期超过阈值。
                         * @example `3`
                         */
                        Times: string;
                        /**
                         * 报警统计方法。不同监控项的取值如下：
                         * - Value：HTTP状态码的值。
                         * - Average：HTTP等待时间的平均值。
                         * - Value：TELNET状态码的值。
                         * - TelnetLatency：TELNET等待时间的平均值。
                         * - Average：PING丢包率的平均值。
                         * @example `Value`
                         */
                        Aggregate: string;
                    }[];
                };
                TargetList: {
                    /**
                     * 报警目标列表。
                     */
                    Target: {
                        /**
                         * 报警触发目标ID。
                         * @example `1`
                         */
                        Id: string;
                        /**
                         * ARN资源描述。
                         * 格式：`arn:acs:${Service}:${Region}:${Account}:${ResourceType}/${ResourceId}`。各字段含义如下：
                         * - Service：云服务Code。
                         * - Region：地域ID。
                         * - Account：阿里云账号ID。
                         * - ResourceType：资源类型。
                         * - ResourceId：资源ID。
                         * @example `acs:mns:cn-hangzhou:17754132319*****:/queues/test/messages`
                         */
                        Arn: string;
                        /**
                         * 报警级别。取值：
                         * - INFO：信息。
                         * - WARN：警告。
                         * - CRITICAL：紧急。
                         * @example `INFO`
                         */
                        Level: string;
                        /**
                         * 报警回调的JSON格式参数。
                         * @example `{"key1":"value1"}`
                         */
                        JsonParams: string;
                    }[];
                };
            };
        }[];
    };
}
