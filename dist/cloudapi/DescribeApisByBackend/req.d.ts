export interface DescribeApisByBackendRequest {
    /**
     * 后端服务ID
     * @example `4ac69b7a17524781b275ed4c5eb25c54`
     */
    "BackendId": string;
    /**
     * 指定要查询API的环境
     * - **RELEASE**: 线上
     * - **PRE**: 预发
     * - **TEST**: 测试
     * 不填写查询的是草稿态API
     * @example `PRE`
     */
    "StageName"?: string;
    /**
     * 分页参数：每页显示条数。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 分页参数：当前页码。
     * @example `1`
     */
    "PageNumber"?: number;
}
