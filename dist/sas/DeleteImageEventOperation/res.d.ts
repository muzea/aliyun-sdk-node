export interface DeleteImageEventOperationResponse {
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 告警处置规则主键。
         * @example `443496`
         */
        Id: number;
    };
    /**
     * 接口调用是否成功。取值：
     * - **true**：成功
     * - **false**：失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 接口状态码。
     * @example `200`
     */
    Code: string;
    /**
     * 请求结果返回信息。
     * @example `successful`
     */
    Message: string;
    /**
     * 请求唯一标识ID。
     * @example `A3D7C47D-3F11-57BB-90E8-E5C20C61****`
     */
    RequestId: string;
}
