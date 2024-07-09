export interface AbortChangeOrderResponse {
    /**
     * 接口状态或POP错误码
     * @example `200`
     */
    Code: number;
    /**
     * 附加信息
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID
     * @example `57F146F6-3C94-****-****-A66EF4B9*****`
     */
    RequestId: string;
    /**
     * 调用链ID
     * @example `0b59000b15947****55688656d****`
     */
    TraceId: string;
    /**
     * 错误码
     * @example `success`
     */
    ErrorCode: string;
    /**
     * 变更流程
     */
    Data: {
        /**
         * 变更流程ID
         * @example `4f038ddf-b27b-****-****-88e44375****`
         */
        ChangeOrderId: string;
    };
}
