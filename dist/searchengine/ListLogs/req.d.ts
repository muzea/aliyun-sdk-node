export interface ListLogsRequest {
    /**
     * 实例ID
     * @example `ha-cn-i7m2roiy504`
     */
    "instanceId": string;
    /**
     * select: 查询日志, push: 写入日志
     * @example `push`
     */
    "type"?: string;
    /**
     * 页码，默认值 1。
     * @example `1`
     */
    "pageNum"?: string;
    /**
     * 指定每页展示条数，默认为10。
     * @example `10`
     */
    "pageSize"?: string;
    /**
     * 查询开始时间戳。单位：秒。
     * @example `1706340600`
     */
    "startTime"?: string;
    /**
     * 查询结束时间戳。单位：秒。
     * @example `1710432000`
     */
    "endTime"?: string;
    /**
     * 查询语句。
     * @example `status: 200 AND totalTime > 0.01`
     */
    "query"?: string;
}
