export interface DescribeZoneRecordsRequest {
    /**
     * 语言。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 主机记录的关键字。
     * @example `test`
     */
    "Keyword"?: string;
    /**
     * Zone ID。
     * @example `a96d70eb4ab8ef01503dc548691423cb`
     */
    "ZoneId": string;
    /**
     * 当前页数，起始值为**1**，默认为**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页行数，最大值100，默认为20。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 用户Ip。
     * @example `127.0.0.1`
     */
    "UserClientIp"?: string;
    /**
     * 标签。
     * - 默认不填写，查询当前Zone的解析记录。
     * - 填写“ecs”，查询当前Zone同步的ECS主机名记录。
     * @example `ecs`
     */
    "Tag"?: string;
    /**
     * 搜索模式。取值：
     * - **LIKE**：模糊搜索
     * - **EXACT**：精确搜索（默认）
     * @example `EXACT`
     */
    "SearchMode"?: string;
}
