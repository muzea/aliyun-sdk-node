export interface DescribeGroupMonitoringAgentProcessResponse {
    /**
     * 请求ID。
     * @example `7985D471-3FA8-4EE9-8F4B-45C19DF3D36F`
     */
    RequestId: string;
    /**
     * 操作是否成功。true表示成功，false表示失败。
     * @example `true`
     */
    Success: boolean;
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
     * 分页码。默认值：1。
     * @example `1`
     */
    PageNumber: string;
    /**
     * 每页显示记录条数。默认值：10。
     * @example `10`
     */
    PageSize: string;
    /**
     * 总记录条数。
     * @example `28`
     */
    Total: string;
    Processes: {
        /**
         * 进程任务列表。
         */
        Process: {
            /**
             * 进程名称。
             * @example `sshd`
             */
            ProcessName: string;
            /**
             * 匹配实例的条件。取值：
             * - all：全部。
             * - and：与。
             * - or：或。
             * @example `and`
             */
            MatchExpressFilterRelation: string;
            /**
             * 应用分组的ID。
             * @example `12345`
             */
            GroupId: string;
            /**
             * 进程任务的ID。
             * @example `3F6150F9-45C7-43F9-9578-A58B2E72****`
             */
            Id: string;
            MatchExpress: {
                /**
                 * 匹配条件。
                 * >只有符合匹配条件的应用分组，实例才能被添加到对应的进程中。
                 */
                MatchExpress: {
                    /**
                     * 匹配实例名称。
                     * @example `portalHost`
                     */
                    Value: string;
                    /**
                     * 匹配条件的类型。
                     * >目前仅支持`name`，即实例名称。
                     * @example `name`
                     */
                    Name: string;
                    /**
                     * 匹配条件。取值：
                     * - all（默认值）：全部。
                     * - startWith：前缀。
                     * - endWith：后缀。
                     * - contains：包含。
                     * - notContains：不包含。
                     * - equals：相等。
                     * >对于满足条件的规则，实例会添加对应的进程监控。
                     * @example `all`
                     */
                    Function: string;
                }[];
            };
            AlertConfig: {
                /**
                 * 报警规则配置信息。
                 */
                AlertConfig: {
                    /**
                     * Critical级别阈值比较符。取值：
                     * - GreaterThanOrEqualToThreshold：大于等于。
                     * - GreaterThanThreshold：大于。
                     * - LessThanOrEqualToThreshold：小于等于。
                     * - LessThanThreshold：小于。
                     * - NotEqualToThreshold：不等。
                     * - GreaterThanYesterday：同比昨天时间上涨。
                     * - LessThanYesterday：同比昨天时间下降。
                     * - GreaterThanLastWeek：同比上周同一时间上涨。
                     * - LessThanLastWeek：同比上周同一时间下降。
                     * - GreaterThanLastPeriod：环比上周期上涨。
                     * - LessThanLastPeriod：环比上周期下降。
                     * @example `GreaterThanOrEqualToThreshold`
                     */
                    ComparisonOperator: string;
                    /**
                     * 通道沉默周期。单位：秒。最短：3600秒（1小时），默认值：86400秒（1天）。
                     * >当监控数据持续超过报警规则阈值时，每个沉默周期内只发送一次报警通知。
                     * @example `86400`
                     */
                    SilenceTime: string;
                    /**
                     * 报警发生时回调指定的URL地址，向URL发送POST请求。
                     * @example `http://www.aliyun.com`
                     */
                    Webhook: string;
                    /**
                     * 级别连续出现次数。
                     * >只有当级别连续出现设定的次数且超过阈值时，才会触发报警。
                     * @example `3`
                     */
                    Times: string;
                    /**
                     * 报警的级别。取值：
                     * - critical：故障。
                     * - warn：警告。
                     * - info：信息。
                     * @example `warn`
                     */
                    EscalationsLevel: string;
                    /**
                     * 报警规则不生效时间段。
                     * @example `00:00-23:59`
                     */
                    NoEffectiveInterval: string;
                    /**
                     * 报警规则的生效时间段。
                     * @example `00:00-23:59`
                     */
                    EffectiveInterval: string;
                    /**
                     * 报警阈值。
                     * @example `5`
                     */
                    Threshold: string;
                    /**
                     * 报警统计方法。
                     * @example `Average`
                     */
                    Statistics: string;
                    TargetList: {
                        /**
                         * 报警触发目标列表。
                         */
                        Target: {
                            /**
                             * 报警触发目标ID。
                             * @example `123`
                             */
                            Id: string;
                            /**
                             * 资源ARN。格式为acs:{云产品缩写}:{regionId}:{userId}:/{资源类型}/{资源名称}/message。例如：acs:mns:cn-hangzhou:120886317861****:/queues/test123/message。参数说明如下：
                             * - {云产品缩写}：目前仅支持消息服务MNS。
                             * - {userId}：阿里云账号ID。
                             * - {regionId}：消息队列或主题所在地域。
                             * - {资源类型}：接收报警的资源类型。取值：
                             *   - **queues**：队列。
                             *   - **topics**：主题。
                             * - {资源名称}：资源名称。
                             *   - 如果资源类型为**queues**，则资源名称为队列名称。
                             *   - 如果资源类型为**topics**，则资源名称为主题名称。
                             * @example `acs:mns:cn-hangzhou:120886317861****:/queues/test/message`
                             */
                            Arn: string;
                            /**
                             * 报警级别。取值：
                             * - INFO：信息。
                             * - WARN：警告。
                             * - CRITICAL：紧急。
                             * @example `CRITICAL`
                             */
                            Level: string;
                            /**
                             * 报警回调的JSON格式参数。
                             * @example `{"customField1":"value1","customField2":"$.name"}`
                             */
                            JsonParmas: string;
                        }[];
                    };
                }[];
            };
        }[];
    };
}
