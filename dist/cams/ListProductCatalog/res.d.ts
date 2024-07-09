export interface ListProductCatalogResponse {
    /**
     * 访问被拒绝详细信息。
     * @example `无`
     */
    AccessDeniedDetail: string;
    /**
     * 错误提示信息。
     * @example `None`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `90E63D28-E31D-1EB2-8939-A9486641****`
     */
    RequestId: string;
    /**
     * 返回结果。
     */
    Model: {
        /**
         * 分页详情。
         */
        Paging: {
            /**
             * 翻页位置。
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
     * 是否调用成功。
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
}
