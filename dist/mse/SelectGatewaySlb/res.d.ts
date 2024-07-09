export interface SelectGatewaySlbResponse {
    /**
     * 请求ID。
     * @example `E00C6D90-A28A-5813-8981-0459AA436F46`
     */
    RequestId: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 返回信息。
     * @example `请求处理成功`
     */
    Message: string;
    /**
     * 返回码。
     * @example `200`
     */
    Code: number;
    /**
     * 请求结果，取值如下：
     * - `true`：请求成功。
     * - `false`：请求失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 数据结构。
     */
    Data: {
        /**
         * SLB ID。
         * @example `lb-bp14lqiw5n96hq2****`
         */
        SlbId: string;
        /**
         * SLB名称。
         * @example `MseGatewaySlb-gw`
         */
        SlbName: string;
    }[];
}
