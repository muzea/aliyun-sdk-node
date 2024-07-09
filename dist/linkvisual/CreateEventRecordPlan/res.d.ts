export interface CreateEventRecordPlanResponse {
    /**
     * 接口返回码：
     * - **200**：表示成功。
     * - 其它：表示错误码。错误码详情，请参见[错误码](~~145071~~)。
     * @example `200`
     */
    Code: string;
    /**
     * 录像计划ID。
     * @example `fc82774fa749485bad7d719f9670****`
     */
    Data: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `product is not active.`
     */
    ErrorMessage: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `a195f615-8c64-4cc6-af57-2f42c6cca15c`
     */
    RequestId: string;
    /**
     * 是否调用成功：
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
}
