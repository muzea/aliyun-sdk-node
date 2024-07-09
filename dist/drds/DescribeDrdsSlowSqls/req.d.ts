export interface DescribeDrdsSlowSqlsRequest {
    /**
     * 实例ID。
     * @example `drds***************`
     */
    "DrdsInstanceId": string;
    /**
     * 数据库名称。
     * @example `test_db`
     */
    "DbName": string;
    /**
     * SQL执行时间，单位为毫秒（ms）。
     * @example `1000`
     */
    "ExeTime": number;
    /**
     * SQL查询结束时间，格式为Unix时间戳，单位为毫秒（UTC时间）。
     * @example `1568269711000`
     */
    "StartTime": number;
    /**
     * SQL查询开始时间，格式为Unix时间戳，单位为毫秒（UTC时间）。
     * @example `1568267711000`
     */
    "EndTime": number;
    /**
     * 页数。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页记录数。
     * @example `20`
     */
    "PageSize"?: number;
}
