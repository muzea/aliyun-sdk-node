export interface DescribeDiagnosisRecordsRequest {
    /**
     * 集群ID。
     * > 您可以调用[DescribeDBClusters](~~129857~~)接口查看目标地域下所有AnalyticDB MySQL集群的详情，包括集群ID。
     * @example `am-bp1r053byu48p****`
     */
    "DBClusterId": string;
    /**
     * 查询开始时间，格式为Unix时间戳，单位：毫秒。
     * > 仅支持查看14天内的数据。
     * @example `1632931200000`
     */
    "StartTime": string;
    /**
     * 查询结束时间，格式为Unix时间戳，单位：毫秒。
     * > * 查询结束时间需晚于查询开始时间。
     * > * 开始时间与结束时间的间隔不能超过24小时。
     * @example `1633017540000`
     */
    "EndTime": string;
    /**
     * 地域ID。
     * > 您可以调用[DescribeRegions](~~143074~~)接口查看AnalyticDB MySQL版支持的地域和可用区信息，包括地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 指定SQL的查询条件，格式为JSON字符串，包含`Type`、`Value`、`Min`或`Max`等字段。其中`Type` 表示查询维度（当前仅支持3个取值：`maxCost`、`status`和`cost`），`Value`、`Min`或`Max`表示该维度下的查询范围。具体支持的取值范围如下：
     * - ` {"Type":"maxCost","Value":"100"}`：表示查看执行耗时最长的前100条SQL详情，当前`Value`的取值仅支持设置为100。
     * - `{"Type":"status","Value":"finished"}`：表示查看已完成的SQL详情。您也可以将`Value`设置为`running`或`failed`来查询正在执行或执行失败的SQL详情。
     * - `{"Type":"cost","Min":"10","Max":"200"}`：表示查看执行耗时为10毫秒~200毫秒的SQL详情，您也可以自定义执行耗时的最大值与最小值，单位：毫秒。
     * @example `{"Type":"status","Value":"finished"}`
     */
    "QueryCondition": string;
    /**
     * 查询关键字。
     * @example `select`
     */
    "Keyword"?: string;
    /**
     * SQL语句的最小峰值内存，单位：Byte。
     * @example `0`
     */
    "MinPeakMemory"?: number;
    /**
     * SQL语句的最大峰值内存，单位：Byte。
     * @example `89000000`
     */
    "MaxPeakMemory"?: number;
    /**
     * SQL语句的最小扫描量，单位：Byte。
     * @example `0`
     */
    "MinScanSize"?: number;
    /**
     * SQL语句的最大扫描量，单位：Byte。
     * @example `104428198`
     */
    "MaxScanSize"?: number;
    /**
     * SQL语句所属的资源组。
     * > 您可以调用[DescribeDiagnosisDimensions](~~308210~~)接口查看符合指定检索条件的SQL语句所属的资源组、数据库名、用户名以及访问源地址信息。
     * @example `user_default`
     */
    "ResourceGroup"?: string;
    /**
     * 执行SQL语句的用户名。
     * > 您可以调用[DescribeDiagnosisDimensions](~~308210~~)接口查看符合指定检索条件的SQL语句所属的资源组、数据库名、用户名以及访问源地址信息。
     * @example `test_user`
     */
    "UserName"?: string;
    /**
     * 执行SQL语句的数据库。
     * > 您可以调用[DescribeDiagnosisDimensions](~~308210~~)接口查看符合指定检索条件的SQL语句所属的资源组、数据库名、用户名以及访问源地址信息。
     * @example `adb_demo`
     */
    "Database"?: string;
    /**
     * 访问源地址。
     * > 您可以调用[DescribeDiagnosisDimensions](~~308210~~)接口查看符合指定检索条件的SQL语句所属的资源组、数据库名、用户名以及访问源地址信息。
     * @example `59.82.xx.xx`
     */
    "ClientIp"?: string;
    /**
     * 根据指定字段对SQL语句进行排序，格式为JSON，是一个有序JSON数组，按输入数组的顺序进行复合排序，包含`Field`和`Type`两个字段，例如`[{"Field":"StartTime", "Type": "desc" }]`。其中：
     * - `Field`表示需要排序的字段名，支持如下字段：
     *     - `StartTime`：执行开始时间。
     *     - `Status`：执行状态。
     *     - `UserName`：用户名称。
     *     - `Cost`：执行耗时。
     *     - `PeakMemory`：峰值内存。
     *     - `ScanSize`：扫描数据量。
     *     - `Database`：数据库名称。
     *     - `ClientIp`：访问源地址.
     *     - `ResourceGroup`：资源组。
     *     - `QueueTime`：排队耗时。
     *     - `OutputRows`：输出行数。
     *     - `OutputDataSize`：输出数据量。
     *     - `ResourceCostRank`：SQL内部算子的耗时排名（仅当`QueryCondition`取值为`{"Type":"status","Value":"running"}`时，支持使用该字段）。
     * - `Type`表示排序类型，支持如下取值（取值均不区分大小写）：
     *     - `Desc`：降序。
     *     - `Asc`：升序。
     * @example `[{"Field":"StartTime", "Type": "desc" }]`
     */
    "Order"?: string;
    /**
     * 页码，取值为大于0且不超过Integer数据类型的最大值。默认值为**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页记录数，取值为**30**（默认值）、**50**或**100**。
     * @example `30`
     */
    "PageSize"?: number;
    /**
     * 设置下载文件的文件标题以及部分错误信息的语言，支持如下语言：
     * - **zh**：简体中文（默认语言）。
     * - **en**：英文。
     * - **ja**：日文。
     * - **zh-tw**：繁体中文。
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * SQL Pattern的ID。
     * > 您可以调用[DescribeSQLPatterns](~~321868~~)接口查看指定时间内目标AnalyticDB MySQL集群下所有的SQL Pattern列表信息，包括SQL Pattern的ID。
     * @example `5575924945138******`
     */
    "PatternId"?: string;
}
