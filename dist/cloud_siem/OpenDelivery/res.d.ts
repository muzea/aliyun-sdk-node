export interface OpenDeliveryResponse {
    /**
     * 开通日志投递是否成功，取值：
     * - true：开通成功
     * - false：开通失败
     * @example `true`
     */
    Data: boolean;
    /**
     * 请求消息ID。
     * @example `15FD134E-D69B-51E8-B052-73F97BD8****`
     */
    RequestId: string;
}
