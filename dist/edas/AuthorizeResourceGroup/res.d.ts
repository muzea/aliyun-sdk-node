export interface AuthorizeResourceGroupResponse {
    /**
     * 接口状态或POP错误码
     * @example `200`
     */
    Code: number;
    /**
     * 信息
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID
     * @example `57609587-DFA2-**********`
     */
    RequestId: string;
}
