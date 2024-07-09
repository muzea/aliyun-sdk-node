export interface CreateScanTaskRequest {
    /**
     * 实例、库、Bucket数据资产的唯一标识ID，可以调用[DescribeDataLimits](~~DescribeDataLimits~~)获取。
     * @example `1`
     */
    "DataLimitId": number;
    /**
     * 连续两个自定义扫描资产任务的间隔天数，取值范围：1~2147483648。
     * @example `1`
     */
    "IntervalDay": number;
    /**
     * 下次扫描任务的运行时间。单位：小时。
     * @example `12`
     */
    "RunHour": number;
    /**
     * 下次扫描任务的运行时间。单位：分钟。
     * @example `30`
     */
    "RunMinute": number;
    /**
     * 扫描任务的名称。
     * @example `scan-test-sample****`
     */
    "TaskName": string;
    /**
     * 创建扫描任务的账号。
     * @example `demo`
     */
    "TaskUserName"?: string;
    /**
     * 扫描OSS资产的扫描范围，支持前缀、后缀、正则匹配。
     * @example `/test/test`
     */
    "OssScanPath"?: string;
    /**
     * 自定义扫描任务的扫描范围匹配规则，需结合**ScanRangeContent**的配置内容才能生效。取值：
     * - **0**：全部匹配。
     * - **1**：前缀匹配。
     * - **2**：后缀匹配。
     * - **3**：正则匹配。
     * @example `0`
     */
    "ScanRange": number;
    /**
     * 在结构化数据资产的扫描范围内，通过前缀、后缀或正则匹配方式进行扫描。
     * @example `datamask/`
     */
    "ScanRangeContent": string;
    /**
     * 指定待查询产品的资源类型。取值：**1**：MaxCompute，**2**：OSS，**3**：ADS，**4**：OTS，**5**：RDS等。
     * @example `2`
     */
    "ResourceType": number;
    /**
     * 该参数已废弃。
     * @example `106.11.XX.XX`
     */
    "SourceIp"?: string;
    /**
     * 此参数已废弃。
     * @example `1`
     */
    "FeatureType"?: number;
    /**
     * 请求和接收消息的语言类型。
     * - **zh**：中文。
     * - **en**：英文。
     * @example `zh`
     */
    "Lang"?: string;
}
