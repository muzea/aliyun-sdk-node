export interface DisableHostAvailabilityResponse {
    /**
     * 状态码。
     * > 200表示成功。
     * @example `200`
     */
    Code: string;
    /**
     * 错误信息。
     * @example `User not authorized to operate on the specified resource.`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `ACBDBB40-DFB6-4F4C-8957-51FFB233969C`
     */
    RequestId: string;
    /**
     * 操作是否成功。取值：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: boolean;
}
