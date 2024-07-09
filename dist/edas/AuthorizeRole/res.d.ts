export interface AuthorizeRoleResponse {
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
     * 请求ID
     * @example `57609587-DFA2-*******`
     */
    RequestId: string;
}
