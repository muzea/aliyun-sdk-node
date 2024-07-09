export interface CreateAppRequest {
    /**
     * 应用名称
     * @example `测试应用`
     */
    "Name": string;
    /**
     * 包名
     * @example `com.test.app`
     */
    "PackageName"?: string;
    /**
     * 部门 ID
     * @example `4367c30a-c686-4bb2-a45d-5affb87f7aca`
     */
    "DepartmentId"?: string;
    /**
     * 用于保证请求的幂等性。由客户端生成该参数值，要保证在不同请求间唯一，最大不超过64个ASCII字符。
     * @example `4367c30a-c686-4bb2-a45d-5affb87****`
     */
    "ClientToken"?: string;
}
