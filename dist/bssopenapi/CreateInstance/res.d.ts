export interface CreateInstanceResponse {
    /**
     * 状态码。
     * @example `Success`
     */
    Code: string;
    /**
     * 错误信息。
     * @example `Successful！`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `C880B065-A781-4F19-B6DD-3E0E3B715C64`
     */
    RequestId: string;
    /**
     * 是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回信息。
     */
    Data: {
        /**
         * 创建成功的订单ID。
         * @example `20240xxxx21`
         */
        OrderId: string;
        /**
         * 订单对应的实例ID。
         * @example `OSSBAG-cn-v1hxxxxx23`
         */
        InstanceId: string;
    };
}
