export interface QuerySavingsPlansInstanceRequest {
    /**
     * 每页个数
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 多语言信息
     * - ZH 中文
     * - EN 英文
     * @example `ZH`
     */
    "Locale"?: string;
    /**
     * 查询页数
     * @example `1`
     */
    "PageNum"?: number;
    /**
     * 节省计划实例ID
     * @example `spn-xxxxxxx`
     */
    "InstanceId"?: string;
    /**
     * 开始时间，格式 yyyy-MM-dd HH:mm:ss
     * @example `2020-01-01 00:00:00`
     */
    "StartTime"?: string;
    /**
     * 结束时间，格式 yyyy-MM-dd HH:mm:ss
     * @example `2021-01-01 00:00:00`
     */
    "EndTime"?: string;
    /**
     * 标签元素列表
     */
    "Tag"?: {
        /**
         * 标签查询键
         * @example `测试标签`
         */
        Key: string;
        /**
         * 标签查询值
         * @example `测试标签`
         */
        Value: string;
    }[];
    /**
     * 实例状态：
     * NORMAL:有效
     * RELEASE 失效
     * @example `NORMAL`
     */
    "Status"?: string;
}
