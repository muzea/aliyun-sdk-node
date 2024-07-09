export interface ListLogstashLogRequest {
    /**
     * 实例ID。
     * @example `ls-cn-v0h1kzca****`
     */
    "InstanceId": string;
    /**
     * 日志类型。可选值：
     * - LOGSTASH_INSTANCE_LOG：主日志。
     * - SEARCHSLOW：searching慢日志。
     * - INDEXINGSLOW：indexing慢日志。
     * - JVMLOG：GC日志。
     * - LOGSTASH_DEBUG_LOG：调试日志。
     * @example `LOGSTASH_INSTANCE_LOG`
     */
    "type": string;
    /**
     * 要查询的关键词。
     * @example `host:10.7.xx.xx AND level:info AND content:opening`
     */
    "query": string;
    /**
     * 日志开始的时间戳。单位：毫秒。
     * @example `1531910852074`
     */
    "beginTime"?: number;
    /**
     * 日志结束的时间戳。单位：毫秒。
     * @example `1531910852074`
     */
    "endTime"?: number;
    /**
     * 实例列表的页码。默认值：1，最小值：1，最大值：200。
     * @example `1`
     */
    "page"?: number;
    /**
     * 分页查询时设置的每页条数。默认值：20，最小值：1，最大值：100。
     * @example `20`
     */
    "size"?: number;
}
