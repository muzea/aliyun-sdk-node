export interface DescribeWebCCRulesV2Request {
    /**
     * 要接入DDoS高防进行防护的网站域名。
     * @example `example.com`
     */
    "Domain"?: string;
    /**
     * 分页大小，即每页显示多少个结果。最大值**20**，默认值**20**。
     * @example `20`
     */
    "PageSize"?: string;
    /**
     * 开始索引位置，即从第几条结果开始显示。默认从**0**开始。
     * @example `0`
     */
    "Offset"?: string;
    /**
     * 筛选规则来源。取值：
     * - **manual**（默认）：手动添加
     * - **clover**：自动生成
     * @example `manual`
     */
    "Owner"?: string;
}
