export interface CreateDatabaseExportOrderResponse {
    /**
     * 请求ID，用于定位日志，排查问题。
     * @example `0C1CB646-1DE4-4AD0-B4A4-7D47DD52E931`
     */
    RequestId: string;
    /**
     * 错误码。
     * @example `UnknownError`
     */
    ErrorCode: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `UnknownError`
     */
    ErrorMessage: string;
    CreateOrderResult: {
        /**
         * 创建的工单包含的信息。
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
