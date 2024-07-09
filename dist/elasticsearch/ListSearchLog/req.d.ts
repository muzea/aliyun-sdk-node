export interface ListSearchLogRequest {
    /**
     * 实例ID。
     * @example `es-cn-n6w1o1x0w001c****`
     */
    "InstanceId": string;
    /**
     * 日志类型。可选值：
     * - INSTANCELOG：主日志。
     * - SEARCHSLOW：searching慢日志。
     * - INDEXINGSLOW：indexing慢日志。
     * - JVMLOG：GC日志。
     * - ES_SEARCH_ACCESS_LOG：ES访问日志。
     * - AUDIT：审计日志。
     * 查看日志的相关限制信息，请参见[查询日志](~~72026~~)。
     * @example `INSTANCELOG`
     */
    "type": string;
    /**
     * 要查询的关键词。
     * @example `host:172.16.**.** AND content:netty`
     */
    "query": string;
    /**
     * 日志开始时间戳，单位：毫秒。必须为最近7天内的时间，如果不填会查询\[当前时间-7天,endTime\]范围内的所有日志。
     * @example `1531910852074`
     */
    "beginTime"?: number;
    /**
     * 日志结束时间戳，单位：毫秒。必须为最近7天内的时间，建议填写，如果不填返回结果为空。
     * @example `1531910852074`
     */
    "endTime"?: number;
    /**
     * 插件列表的页码。起始值：1，默认值：1。
     * @example `1`
     */
    "page"?: number;
    /**
     * 分页查询时设置的每页条数。默认值：20，最小值：1，最大值：50。
     * @example `20`
     */
    "size"?: number;
}
