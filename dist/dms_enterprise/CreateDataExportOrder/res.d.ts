export interface CreateDataExportOrderResponse {
    /**
     * 请求ID，用于定位日志，排查问题。
     * @example `7FAD400F-7A5C-4193-8F9A-39D86C4F0231`
     */
    RequestId: string;
    /**
     * 错误码。
     * @example `UnknownError`
     */
    ErrorCode: string;
    /**
     * 调用失败时，返回的错误信息。
     * @example `UnknownError`
     */
    ErrorMessage: string;
    CreateOrderResult: {
        /**
         * 创建的工单内容。
         */
        CreateOrderResult: number[];
    };
    /**
     * 请求是否成功，返回值如下：
     * - true：请求成功
     * - false：请求失败
     * @example `true`
     */
    Success: boolean;
}
