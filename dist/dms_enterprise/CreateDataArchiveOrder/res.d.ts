export interface CreateDataArchiveOrderResponse {
    /**
     * 请求的ID。用于定位日志，排查问题。
     * @example `283C461F-11D8-48AA-B695-DF092DA32AF3`
     */
    RequestId: string;
    /**
     * 请求是否成功。返回值如下：
     * - **true**：请求成功。
     * - **false**：请求失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 调用失败时，返回的错误信息。
     * @example `UnknownError`
     */
    ErrorMessage: string;
    /**
     * 调用失败时，返回的错误码。
     * @example `UnknownError`
     */
    ErrorCode: string;
    /**
     * 创建的数据归档工单ID。
     */
    CreateOrderResult: number[];
}
