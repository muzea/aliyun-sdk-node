export interface GetMultipleTraceResponse {
    /**
     * 请求ID。
     * @example `2983BEF7-4A0D-47A2-94A2-8E9C5E63****`
     */
    RequestId: string;
    /**
     * 多个调用链路的信息。
     */
    MultiCallChainInfos: {
        /**
         * 调用链路ID。
         * @example `ac1400a115951745017447033d****`
         */
        TraceID: string;
        /**
         * 调用链路详情信息。
         */
        Spans: {
            /**
             * Span ID。
             * @example `1234`
             */
            SpanId: string;
            /**
             * 埋点的接口名称。
             * @example `/demo/queryNotExistDB/11`
             */
            OperationName: string;
            /**
             * 返回码。
             * @example `1`
             */
            ResultCode: string;
            /**
             * 时间戳。
             * @example `1595174501747`
             */
            Timestamp: number;
            /**
             * RPC类型：
             * - -2 front
             * - -3 app
             * - 0 http
             * - 25 http_client
             * - 1 hsf_client
             * - 2 hsf
             * - 40 local
             * - 41 async
             * - 52 DB2
             * - 53 Informix
             * - 54 SequoiaDB
             * - 55 Gbase
             * - 56 GaussDB
             * - 57 KingBase
             * - 58 infuxdb
             * - 59 clickhouse
             * - 60 mysql
             * - 61 mysql
             * - 62 oracle
             * - 63 postgresql
             * - 64 mongodb
             * - 65 ppas
             * - 66 sqlserver
             * - 67 mariadb
             * - 68 dmdb
             * - 69 oceanbase
             * - 70 redis
             * - 71 memcached
             * - 72 elasticsearch
             * - 73 kudu
             * - 4 tddl
             * - 5 tair
             * - 13 mq_client
             * - 252 mq
             * - 23 kafka_client
             * - 256 kafka
             * - 3 notify_client
             * - 254 notify
             * - 7 dubbo_client
             * - 8 dubbo
             * - 11 dsf_client
             * - 12 dsf
             * - 9 grpc
             * - 10 grpc_client
             * - 16 thrift
             * - 17 thrift_client
             * - 18 sofa
             * - 19 sofa_client
             * - -1 unknown
             * - 98 user_method
             * - 100 root
             * - 101 client
             * - 102 server
             * - 103 producer
             * - 104 consumer
             * - 105 db
             * - 106 xtrace_other
             * - 1301 schedulerx
             * - 1302 XXL_Job
             * - 1303 Spring_Scheduled
             * - 1304 Quartz
             * - 1305 ElasticJob
             * - 1308 Jdk_Timer
             * @example `0`
             */
            RpcType: number;
            /**
             * 应用所在机器的IP地址。
             * @example `172.20.XX.XX`
             */
            ServiceIp: string;
            /**
             * 是否有方法栈：
             * - `true`：有方法栈
             * - `false`：没有方法栈
             * @example `true`
             */
            HaveStack: boolean;
            /**
             * 父Span ID。
             * @example `18`
             */
            ParentSpanId: string;
            /**
             * 调用链路耗时（毫秒）。
             * @example `11`
             */
            Duration: number;
            /**
             * RPC ID
             * @example `0.1`
             */
            RpcId: string;
            /**
             * 应用名称。
             * @example `arms-k8s-demo-subcomponent`
             */
            ServiceName: string;
            /**
             * 调用链路ID。
             * @example `ac1400a115951745017447033d****`
             */
            TraceID: string;
            /**
             * 调用链路的Tag列表。
             */
            TagEntryList: {
                /**
                 * Tag的主键。
                 * @example `http.status.code`
                 */
                Key: string;
                /**
                 * Tag的值。
                 * @example `200`
                 */
                Value: string;
            }[];
            /**
             * 调用链路中的日志事件。
             */
            LogEventList: {
                /**
                 * 产生日志时间的时间戳。
                 * @example `1595174501747`
                 */
                Timestamp: number;
                /**
                 * 调用链路的Tag列表。
                 */
                TagEntryList: {
                    /**
                     * Tag的主键。
                     * @example `http.status.code`
                     */
                    Key: string;
                    /**
                     * Tag的值。
                     * @example `200`
                     */
                    Value: string;
                }[];
            }[];
        }[];
    }[];
}
