export interface DescribeAntiBruteForceRulesRequest {
    /**
     * 访问源的IP地址。
     * @example `121.69.XX.XX`
     */
    "SourceIp"?: string;
    /**
     * 防暴力破解规则ID。
     * >调用[DescribeAntiBruteForceRules](~~DescribeAntiBruteForceRules~~)接口可以获取该参数。
     * @example `1141****`
     */
    "Id"?: number;
    /**
     * 设置从返回结果的第几页开始显示查询结果。默认值为**1**，表示从第1页开始显示。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 分页查询时，显示的每页数据的最大条数。
     * @example `10`
     */
    "PageSize"?: string;
    /**
     * 暴力破解规则的名称。
     * @example `testName`
     */
    "Name"?: string;
}
