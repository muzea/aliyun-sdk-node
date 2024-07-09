export interface UpdatePluginConfigResponse {
    /**
     * 请求ID。
     * @example `03A3E2F4-6804-5663-9D5D-2EC47A1*****`
     */
    RequestId: string;
    /**
     * 是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * Code。
     * @example `200`
     */
    Code: number;
    /**
     * 错误码。
     * @example `500`
     */
    ErrorCode: string;
    /**
     * HTTP STATUS编码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 接口信息。
     * @example `success`
     */
    Message: string;
    /**
     * 动态错误信息中的占位符。
     * @example `code`
     */
    DynamicMessage: string;
    /**
     * id值。
     * @example `1`
     */
    Data: number;
}
