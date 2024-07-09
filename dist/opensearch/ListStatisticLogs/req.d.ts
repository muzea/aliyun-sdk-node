export interface ListStatisticLogsRequest {
    /**
     * 应用名称
     * @example `app_group_name`
     */
    "appGroupIdentity": string;
    /**
     * 模块名称，为枚举值
     * - hot 热词榜单
     * - error 应用日志
     * - slow-log 慢日志
     * 目前只支持 hot
     * @example `hot`
     */
    "moduleName": string;
    /**
     * 开始时间
     * 默认为当天0点0分0秒的时间戳
     * @example `1582214400`
     */
    "startTime"?: number;
    /**
     * 结束时间
     * 默认为当天24点0分0秒的时间戳
     * @example `1682222400`
     */
    "stopTime"?: number;
    /**
     * 页码，默认 pageNumber = 1
     * @example `1`
     */
    "pageNumber"?: number;
    /**
     * 每页返回数目，默认 pageSize = 10
     * @example `10`
     */
    "pageSize"?: number;
    /**
     * query查询子句内容
     * @example `"default:'OpenSearch'"`
     */
    "query"?: string;
    /**
     * sort排序子句内容
     * @example `"-id"`
     */
    "sortBy"?: string;
    /**
     * 是否使用distinct子句
     * @example `true`
     */
    "distinct"?: boolean;
    /**
     * 查询的字段
     * 格式为 columns=wordsTopPv
     * 参考：[QUERY_ANALYSIS query分析类指标](~~187665~~)
     * @example `wordsTopPv`
     */
    "columns"?: string;
}
