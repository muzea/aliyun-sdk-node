export interface UpdateImageEventOperationResponse {
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 告警处置规则ID。
         * @example `67429`
         */
        Id: number;
    };
    /**
     * 请求响应结果状态。取值：
     * - **true**：处理成功。
     * - **false**：处理失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 接口请求返回的状态码。
     * @example `200`
     */
    Code: string;
    /**
     * 请求结果返回信息。
     * @example `successful`
     */
    Message: string;
    /**
     * 唯一请求ID。
     * @example `7532B7EE-7CE7-5F4D-BF04-B12447DD****`
     */
    RequestId: string;
}
