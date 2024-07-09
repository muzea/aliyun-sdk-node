export interface DescribeRegionsRequest {
    /**
     * 支持的语言。包括以下取值：
     * - **中文**：zh-CN（默认值）
     * - **英文**：en-US
     * - **日文**：ja
     * @example `zh-CN`
     */
    "AcceptLanguage"?: string;
    /**
     * 数据引擎类型。
     * - **hbase**：HBase标准版或HBase单机版。
     * - **hbaseue**：HBase增强版。
     * - **serverlesshbase**：HBaseServerless版。
     * - **bds**：表示BDS实例。
     * @example `hbase`
     */
    "Engine"?: string;
}
