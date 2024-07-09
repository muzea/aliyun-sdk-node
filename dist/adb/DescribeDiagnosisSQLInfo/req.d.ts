export interface DescribeDiagnosisSQLInfoRequest {
    /**
     * 集群ID。
     * > 您可以调用[DescribeDBClusters](~~129857~~)接口查看目标地域下AnalyticDB MySQL数仓版集群的集群ID。
     * @example `am-bp1r053byu48p****`
     */
    "DBClusterId": string;
    /**
     * 地域ID。
     * > 您可以调用[DescribeRegions](~~143074~~)接口查看AnalyticDB MySQL支持的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 查询ID。
     * > 您可以调用[DescribeDiagnosisRecords](~~308207~~)接口查看指定的AnalyticDB MySQL集群中SQL摘要信息，包括查询ID。
     * @example `2021070216432217201616806503453******`
     */
    "ProcessId": string;
    /**
     * SQL语句的执行开始时间，格式为Unix时间戳，单位为毫秒（ms）。
     * > 您可以调用[DescribeDiagnosisRecords](~~308207~~)接口查看指定的AnalyticDB MySQL集群中SQL摘要信息，包括SQL语句的执行开始时间。
     * @example `1625215402000`
     */
    "ProcessStartTime"?: number;
    /**
     * SQL语句的状态，取值如下：
     * - **running**：执行中。
     * - **finished**：已完成。
     * - **failed**：执行失败。
     * > 您可以调用[DescribeDiagnosisRecords](~~308207~~)接口查看指定的AnalyticDB MySQL集群中SQL摘要信息，包括SQL语句的状态信息。
     * @example `running`
     */
    "ProcessState"?: string;
    /**
     * 设置下载文件的文件标题以及部分错误信息的语言，支持如下语言：
     * - **zh**：简体中文。
     * - **en**：英文。
     * - **ja**：日语。
     * - **zh-tw**：繁体中文。
     * @example `zh`
     */
    "Lang": string;
    /**
     * 执行SQL语句的AnalyticDB MySQL前端节点IP和端口信息。
     * > 您可以调用[DescribeDiagnosisRecords](~~308207~~)接口查看指定的AnalyticDB MySQL集群中SQL摘要信息，包括前端节点IP和端口信息。
     * @example `192.45.***.***:3145`
     */
    "ProcessRcHost"?: string;
}
