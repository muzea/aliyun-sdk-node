export interface ListSearchLogResponse {
    /**
     * 请求ID。
     * @example `7F40EAA1-6F1D-4DD9-8DB8-C5F00C4E****`
     */
    RequestId: string;
    /**
     * 返回头信息。
     */
    Headers: {
        /**
         * 实例总记录数。
         * @example `1000`
         */
        X-Total-Count: number;
    };
    /**
     * 请求返回的日志列表。
     */
    Result: {
        /**
         * 日志等级。取值包括：
         * - warn：警告日志
         * - info：信息日志
         * - error：错误日志
         * - trace：跟踪日志
         * - debug：调试日志
         * level信息已迁移至contentCollection字段中。
         * @example `info`
         */
        level: string;
        /**
         * 生成日志的节点的IP地址。
         * @example `192.168.**.**`
         */
        host: string;
        /**
         * 日志详细内容。已迁移至contentCollection字段中。
         * @example `[GC (Allocation Failure) 2018-07-19T17:24:20.682+0800: 7516.513: [ParNew: 6604768K->81121K(7341504K), 0.0760606 secs] 7226662K->703015K(31813056K), 0.0762507 secs] [Times: user=0.52 sys=0.00, real=0.07 secs] `
         */
        content: string;
        /**
         * 日志生成的时间戳，单位为ms。
         * @example `1531985112420`
         */
        timestamp: number;
        /**
         * 日志详细信息。不同的日志类型，返回不同的内容字段。
         * @example `{"level": "info", "host": "192.168.**.**", "time": "2019-03-18T08:16:12.741Z","content": "[o.e.c.r.a.AllocationService] [MnNASM_] Cluster health status changed from [YELLOW] to [GREEN] (reason: [shards started [[my_index][3]] ...])."}`
         */
        contentCollection: any;
        /**
         * 实例ID。
         * @example `es-cn-n6w1o1x0w001c****`
         */
        instanceId: string;
    }[];
}
