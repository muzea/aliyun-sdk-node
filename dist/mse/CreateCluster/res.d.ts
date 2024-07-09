export interface CreateClusterResponse {
    /**
     * 请求ID。
     * @example `dc63-465d-8ef5-20dc18af****`
     */
    RequestId: string;
    /**
     * 返回信息。
     * @example `请求处理成功`
     */
    Message: string;
    /**
     * 实例ID。
     * @example `mse-cn-st21ri2****`
     */
    InstanceId: string;
    /**
     * 错误码。
     * @example `mse-100-000`
     */
    ErrorCode: string;
    /**
     * 订单ID。
     * @example `20574710974****`
     */
    OrderId: string;
    /**
     * 请求结果，取值如下：
     * - `true`：请求成功。
     * - `false`：请求失败。
     * @example `true`
     */
    Success: boolean;
}
