export interface ListDoctorComputeSummaryRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 集群ID。
     * @example `c-b933c5aac8fe****`
     */
    "ClusterId": string;
    /**
     * 标记当前开始读取的位置。
     * @example `DD6B1B2A-5837-5237-ABE4-FF0C89568980`
     */
    "NextToken"?: string;
    /**
     * 一次获取的最大记录数。
     * @example `20`
     */
    "MaxResults"?: number;
    /**
     * 其日期和时间信息以 ISO 8601 格式表示， 例如：2023年1月1日为2023-01-01。
     * @example `2023-01-01`
     */
    "DateTime": string;
    /**
     * 过滤资源的类型。取值：
     * - engine：通过引擎类型来过滤结果。
     * - queue：通过队列来过滤结果。
     * - cluster：展示整个集群结果。
     * 如果不填写，默认展示整个集群信息。目前只支持单资源类型，填写多个资源类型会默认取第一个资源类型。
     * @example `null`
     */
    "ComponentTypes"?: string[];
    /**
     * 排序方向。取值：
     * - ASC：升序排列。
     * - DESC：降序排列。
     * @example `ASC`
     */
    "OrderType"?: string;
    /**
     * 排序顺序。取值：
     * 1. vcoreSeconds：资源CPU使用总量。
     * 2. memSeconds：资源内存使用总量。
     * 3. vcoreUtilization：资源平均CPU使用率。同Linux Top的%CPU含义。
     * 4. memUtilization：资源平均内存利用率。
     * 5. vcoreSecondsDayGrowthRatio：资源CPU使用总量日环比。
     * 6. memSecondsDayGrowthRatio：资源内存使用总量日环比。
     * 7. readSize：资源读取文件系统总量。
     * 8. writeSize：资源写入文件系统总量。
     * 9. healthyJobCount：健康任务总数。
     * 10. subHealthyJobCount：亚健康任务总数。
     * 11. unhealthyJobCount：不健康任务总数。
     * 12. needAttentionJobCount：需要关注的任务总数。
     * 13. score：资源任务评分。
     * 14. scoreDayGrowthRatio：资源任务评分日环比。
     * @example `score`
     */
    "OrderBy"?: string;
}
