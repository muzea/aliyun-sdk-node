export interface DescribeDiagnosisMonitorPerformanceRequest {
    /**
     * AnalyticDB MySQL数仓版（3.0）集群ID。
     * > 您可以调用[DescribeDBClusters](~~129857~~)接口查询目标地域中所有AnalyticDB MySQL数仓版（3.0）集群的集群ID。
     * @example `am-bp108q1py5r78****`
     */
    "DBClusterId": string;
    /**
     * 开始时间。格式为Unix时间戳，单位为毫秒。
     * @example `1671684348000`
     */
    "StartTime": string;
    /**
     * 结束时间。格式为Unix时间戳，单位为毫秒。
     * @example `1671687948000`
     */
    "EndTime": string;
    /**
     * 地域ID。
     * > 您可以调用[DescribeRegions](~~143074~~)接口查看指定AnalyticDB MySQL数仓版（3.0）支持的地域ID。
     * @example `cn-beijing`
     */
    "RegionId": string;
    /**
     * 指定SQL的查询条件，格式为JSON字符串，包含`Type`、`Value`、`Min`或`Max`等字段。其中`Type` 表示查询维度（当前仅支持3个取值：`maxCost`、`status`和`cost`），`Value`、`Min`或`Max`表示该维度下的查询范围。具体支持的取值范围如下：
     * - ` {"Type":"maxCost","Value":"100"}`：表示查看执行耗时最长的前100条SQL详情，当前`Value`的取值仅支持设置为100。
     * - `{"Type":"status","Value":"finished"}`：表示查看已完成的SQL详情。您也可以将`Value`设置为`running`或`failed`来查询正在执行或执行失败的SQL详情。
     * - `{"Type":"cost","Min":"10","Max":"200"}`：表示查看执行耗时为10毫秒~200毫秒的SQL详情，您也可以自定义执行耗时的最大值与最小值，单位：毫秒。
     * @example `{\"Type\":\"maxCost\",\"Value\":\"100\"}`
     */
    "QueryCondition": string;
    /**
     * 设置下载文件的文件标题以及部分错误信息的语言，支持如下语言：
     * - **zh**：简体中文（默认语言）。
     * - **en**：英文。
     * - **ja**：日文。
     * - **zh-tw**：繁体中文。
     * @example `zh`
     */
    "Lang"?: string;
}
