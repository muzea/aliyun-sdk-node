export interface CreateCustomerResponse {
    /**
     * 错误描述
     * @example `创建成功`
     */
    Message: string;
    /**
     * 请求ID，用于跟踪错误原因
     * @example `EE338D98-9BD3-4413-B165`
     */
    RequestId: string;
    /**
     * 客户数据
     * @example `{"CustomerId":"24027"}`
     */
    Data: number;
    /**
     * 错误编码
     * @example `Success`
     */
    Code: string;
    /**
     * 接口调用是否成功
     * @example `true`
     */
    Success: boolean;
}
