export interface DescribeDataSharePerformanceRequest {
    /**
     * 该参数已废弃，无需传入该参数。
     * @example `null`
     */
    "ResourceGroupId"?: string;
    /**
     * 性能参数名称，多个指标用英文半角（,）分隔，取值如下：
     * - **adbpg_datashare_topic_count**：共享Topic数量。
     * - **adbpg_datashare_data_size_mb**：数据共享数据量。
     * @example `adbpg_datashare_topic_count`
     */
    "Key": string;
    /**
     * 查询开始时间，格式为<i>yyyy-MM-dd</i>T<i>HH:mm</i>Z（UTC时间）。
     * @example `2022-08-03T15:00Z`
     */
    "StartTime"?: string;
    /**
     * 查询结束时间，需要大于查询开始时间，格式为<i>yyyy-MM-dd</i>T<i>HH:mm</i>Z（UTC时间）。
     * @example `2022-08-03T15:10Z`
     */
    "EndTime"?: string;
    /**
     * 地域ID。
     * > 您可以调用[DescribeRegions](~~86912~~)接口查看可用的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
}
