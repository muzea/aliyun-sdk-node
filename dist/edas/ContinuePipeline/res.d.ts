export interface ContinuePipelineResponse {
    /**
     * 接口状态或POP错误码。
     * @example `200`
     */
    Code: number;
    /**
     * 附加信息。
     * @example `success`
     */
    Message: string;
    /**
     * 唯一请求ID。
     * @example `D16979DC-4D42-****************`
     */
    RequestId: string;
}
