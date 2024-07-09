export interface RestOpenTaskOrderResponse {
    /**
     * 接口返回描述
     * @example `请求成功`
     */
    Message: string;
    /**
     * 接口交互id
     * @example `123`
     */
    RequestId: string;
    /**
     * 无返回值
     * @example `null`
     */
    Data: string;
    /**
     * 状态码
     * @example `200`
     */
    Code: string;
    /**
     * 接口交互是否成功
     * @example `true`
     */
    Success: boolean;
}
