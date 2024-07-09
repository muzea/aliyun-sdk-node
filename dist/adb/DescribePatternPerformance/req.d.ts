export interface DescribePatternPerformanceRequest {
    /**
     * 集群ID。
     * > 您可以调用[DescribeDBClusters](~~129857~~)接口查看目标地域下所有AnalyticDB MySQL集群的详情，包括集群ID。
     * @example `am-****************`
     */
    "DBClusterId": string;
    /**
     * 查询开始时间。格式：<i>yyyy-MM-ddTHH:mm:ssZ</i>（UTC时间）。
     * > - 仅支持查看最近14天内的数据。例如：当前日期为北京时间11月22日，最早可以查询到北京时间11月9日（UTC时间：2021-11-08T16:00:00Z)的数据，若查询时间早于11月9日（UTC时间：2021-11-08T16:00:00Z)，返回值为空。
     * > - 查询开始时间和查询结束时间的间隔不能大于24小时。
     * @example `2021-11-18T00:00:00Z`
     */
    "StartTime": string;
    /**
     * 查询结束时间。格式：<i>yyyy-MM-ddTHH:mm:ssZ</i>（UTC时间）。
     * > 查询结束时间需晚于查询开始时间。
     * @example `2021-11-18T18:05:00Z`
     */
    "EndTime": string;
    /**
     * 地域ID。
     * > 您可以调用[DescribeRegions](~~143074~~)接口查看AnalyticDB MySQL版支持的地域和可用区信息，包括地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * SQL Pattern的ID。
     * > 您可以调用[DescribeSQLPatterns](~~321868~~)接口查看指定时间内目标AnalyticDB MySQL集群下所有的SQL Pattern列表信息，包括SQL Pattern的ID。
     * @example `3847585356974******`
     */
    "PatternId": string;
}
