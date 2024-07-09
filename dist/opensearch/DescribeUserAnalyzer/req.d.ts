export interface DescribeUserAnalyzerRequest {
    /**
     * 分析器名称
     * @example `kevin_test`
     */
    "name": string;
    /**
     * 关联信息，根据层级输出属性
     * - all 输出关联app信息
     * @example `all`
     */
    "with"?: string;
}
