export interface DescribeApiHistoriesRequest {
    /**
     * 指定的分组编号
     * @example `1084f9034c744137901057206b39d2b6`
     */
    "GroupId": string;
    /**
     * 环境名称，可选值：
     * - **RELEASE**：线上
     * - **TEST**：测试
     * @example `RELEASE `
     */
    "StageName"?: string;
    /**
     * 指定的API编号
     * @example `c076144d7878437b8f82fb85890ce6a0`
     */
    "ApiId"?: string;
    /**
     * API名称（模糊匹配）
     * @example `weather`
     */
    "ApiName"?: string;
    /**
     * 指定分页查询时每页行数，最大值100，默认值为10
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 指定要查询的页码，默认是1，起始是1
     * @example `1`
     */
    "PageNumber"?: number;
}
