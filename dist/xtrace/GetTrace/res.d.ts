export interface GetTraceResponse {
    /**
     * 请求ID。
     * @example `1E2B6A4C-6B83-4062-8B6F-AEEC1F******`
     */
    RequestId: string;
    Spans: {
        /**
         * Span列表。
         */
        Span: {
            /**
             * Span ID。
             * @example `fec891bb8f8XXX`
             */
            SpanId: string;
            /**
             * 是否有子Span。取值：
             * - `true`：有子Span。
             * - `false`：无子Span。
             * @example `false`
             */
            HaveStack: boolean;
            /**
             * 服务IP地址，即Span所在的机器IP地址。
             * @example `192.168.XXX.XXX`
             */
            ServiceIp: string;
            /**
             * Span名称。
             * @example `/api`
             */
            OperationName: string;
            /**
             * 父Span ID。
             * @example `fec891bb8f8XXX`
             */
            ParentSpanId: string;
            /**
             * 返回码。
             * @example `200`
             */
            ResultCode: string;
            /**
             * 耗时，单位为毫秒（ms）。
             * @example `1000`
             */
            Duration: number;
            /**
             * 表示Span之间的父子兄弟关系。 例如1.1是1.1.1的父亲Span， 而1.1.2和1.1.1是兄弟Span。
             * @example `1.1`
             */
            RpcId: string;
            /**
             * Span的产生时间戳。单位为微秒（μm）。
             * @example `1689845513298000`
             */
            Timestamp: number;
            /**
             * 服务名称，又称为应用名称。
             * @example `server1`
             */
            ServiceName: string;
            /**
             * 调用链ID，链路请求的唯一标识。
             * @example `1c6881aab84191a4`
             */
            TraceID: string;
            TagEntryList: {
                /**
                 * 标签列表。
                 */
                TagEntry: {
                    /**
                     * Span的标签键。
                     * @example `logLevel`
                     */
                    Key: string;
                    /**
                     * Span的标签值。
                     * @example `Warning`
                     */
                    Value: string;
                }[];
            };
            LogEventList: {
                /**
                 * 日志事件列表。
                 */
                LogEvent: {
                    /**
                     * 日志事件的产生时间戳。单位为微秒（μm）。
                     * @example `1689845513298000`
                     */
                    Timestamp: number;
                    TagEntryList: {
                        /**
                         * 标签列表。
                         */
                        TagEntry: {
                            /**
                             * 日志事件的标签键。
                             * @example `logLevel`
                             */
                            Key: string;
                            /**
                             * 日志事件的标签值。
                             * @example `Warning`
                             */
                            Value: string;
                        }[];
                    };
                }[];
            };
        }[];
    };
}
