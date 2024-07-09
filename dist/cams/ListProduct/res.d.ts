export interface ListProductResponse {
    /**
     * 访问被拒绝详细信息。
     * @example `无`
     */
    AccessDeniedDetail: string;
    /**
     * 提示信息，当返回异常时有值。
     * @example `None`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `90E63D28-E31D-1EB2-8939-A94866411B2O`
     */
    RequestId: string;
    /**
     * 请求结果数据。
     */
    Model: {
        /**
         * 分页详情。
         */
        Paging: {
            /**
             * 分页位置。
             */
            Cursors: {
                /**
                 * 前一条记录位置。
                 * @example `sjjsjdjjdjd83883`
                 */
                Before: string;
                /**
                 * 后一条记录位置。
                 * @example `sjsuueu83838`
                 */
                After: string;
            };
        };
        /**
         * 返回数据对像。
         */
        Data: any[];
    };
    /**
     * 请求状态码。
     * - 返回OK代表请求成功。
     * - 其他错误码，请参见[错误码列表](~~196974~~)。
     * @example `OK`
     */
    Code: string;
    /**
     * 是否调用成功：
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
}
