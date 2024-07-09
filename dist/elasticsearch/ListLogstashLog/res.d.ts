export interface ListLogstashLogResponse {
    /**
     * 请求ID。
     * @example `7F40EAA1-6F1D-4DD9-8DB8-C5F00C4E****`
     */
    RequestId: string;
    /**
     * 返回结果。
     */
    Result: {
        /**
         * 日志级别。包括trace、debug、info、warn、error等内容（GC日志没有level）。
         * @example `info`
         */
        level: string;
        /**
         * 日志的详细内容。
         * @example `[logstash.outputs.fileextend] Opening file {:path=>\"/ssd/1/ls-cn-v0h1kzca****​/logstash/logs/debug/test\"}`
         */
        content: string;
        /**
         * 日志生成的时间戳。单位：毫秒。
         * @example `1531985112420`
         */
        timestamp: number;
        /**
         * 实例ID。
         * @example `ls-cn-v0h1kzca****`
         */
        instanceId: string;
        /**
         * 生成日志的节点的IP地址。
         * @example `192.168.xx.xx`
         */
        host: string;
    }[];
}
