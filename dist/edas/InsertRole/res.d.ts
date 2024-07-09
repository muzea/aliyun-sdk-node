export interface InsertRoleResponse {
    /**
     * 状态码
     * @example `200`
     */
    Code: number;
    /**
     * 附加信息
     * @example `success`
     */
    Message: string;
    /**
     * 唯一请求ID
     * @example `57609587-DFA2-41EC-****-*********`
     */
    RequestId: string;
    /**
     * 角色ID
     * @example `33`
     */
    RoleId: number;
}
