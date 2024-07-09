export interface CreateUserDepartmentsRequest {
    /**
     * 用户 ID
     */
    "UserId": string[];
    /**
     * 部门 ID
     */
    "DepartmentId": string[];
    /**
     * 客户端幂等参数
     * @example `无`
     */
    "ClientToken"?: string;
}
