export interface UpdateInstanceResponse {
    /**
     * 公共参数，每个请求的ID都是唯一的，可用于排查和定位问题。
     * @example `628705FD-03EE-4ABE-BB21-E1672960***`
     */
    RequestId: string;
    /**
     * 返回码。返回200代表成功。
     * @example `200`
     */
    Code: number;
    /**
     * 返回信息。
     * @example `InstanceNotExist`
     */
    Message: string;
    /**
     * 返回数据，涵盖 orderId 和 instanceId。例如
     * ``` json
     * "Data": {
     *     "instanceId": "amqp-cn-xxxxx",
     *     "orderId": 22222
     *   }
     * ```
     */
    Data: any;
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: string;
    /**
     * 状态码。
     * @example `200`
     */
    StatusCode: string;
}
