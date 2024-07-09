export interface ChangeResourceGroupResponse {
    /**
     * 请求ID。
     * @example `A3488F1D-xxxx-xxxx-xxxx-5374BA0F3562`
     */
    RequestId: string;
    /**
     * 该字段不返回具体业务数据
     * @example `无`
     */
    Data: string;
    /**
     * 当变更失败时，返回错误信息。
     * @example `无`
     */
    Message: string;
    /**
     * 执行结果码，200代表成功，其它代表失败。
     * @example `200`
     */
    Code: number;
}
