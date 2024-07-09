export interface DescribeClusterVulStatisticsRequest {
    /**
     * 容器集群的ID。
     * @example `c471f0f61b9c04f8380556e922cf1****`
     */
    "ClusterId"?: string;
    /**
     * 指定要查询的漏洞类型。取值：
     * - **cve**：linux软件漏洞
     * - **app**：应用漏洞
     * - **sca**：软件成分分析漏洞
     * @example `cve,app,sca`
     */
    "Types"?: string;
}
