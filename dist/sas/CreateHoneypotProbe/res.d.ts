export interface CreateHoneypotProbeResponse {
    /**
     * 接口调用是否成功。取值：
     * - **true**：成功
     * - **false**：失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 结果代码，**200**表示成功，若为别的值则表示失败，调用方可根据此字段判断失败原因。
     * @example `200`
     */
    Code: string;
    /**
     * 返回信息。
     * @example `successful`
     */
    Message: string;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `B7A839E8-70AE-591D-8D9E-C5419A2240DB`
     */
    RequestId: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 创建返回的探针信息。
     */
    HoneypotProbe: {
        /**
         * 探针唯一ID。
         * @example `b69e9aa8-2ea8-4c5a-836a-c1fbacff****`
         */
        ProbeId: string;
    };
}
