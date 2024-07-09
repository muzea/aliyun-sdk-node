export interface DescribeHistoryApisRequest {
    /**
     * 分组编号
     * @example `0ccb66aadb5345b78a40f57d192d8aa4`
     */
    "GroupId": string;
    /**
     * 环境名称，可选值：
     * - **RELEASE**：线上
     * - **TEST**：测试
     * @example `RELEASE`
     */
    "StageName"?: string;
    /**
     * 指定要查询的Api编号
     * @example `a12068f555964ca8a0c9c33288f1e5a7`
     */
    "ApiId"?: string;
    /**
     * API名称（模糊匹配）
     * @example `getPersonInfo`
     */
    "ApiName"?: string;
    /**
     * 分页参数：每页显示条数。
     * @example `10`
     */
    "PageSize"?: string;
    /**
     * 分页参数：当前页码。
     * @example `2`
     */
    "PageNumber"?: string;
}
