export interface CreateDataTrackOrderResponse {
    /**
     * 请求ID。
     * @example `283C461F-11D8-48AA-B695-DF092DA32AF3`
     */
    RequestId: string;
    /**
     * 请求是否成功，返回值如下：
     * - **true**：请求成功
     * - **false**：请求失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误信息。
     * @example `UnknownError`
     */
    ErrorMessage: string;
    /**
     * 错误码。
     * @example `UnknownError`
     */
    ErrorCode: string;
    /**
     * 数据追踪工单ID。
     */
    CreateOrderResult: number[];
}
