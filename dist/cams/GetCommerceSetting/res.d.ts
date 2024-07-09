export interface GetCommerceSettingResponse {
    /**
     * 访问被拒绝详细信息。
     * @example `无`
     */
    AccessDeniedDetail: string;
    /**
     * 错误提示信息。
     * @example `无`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `90E63D28-E31D-1EB2-8939-A9486641****`
     */
    RequestId: string;
    /**
     * 返回数据对象。
     */
    Data: {
        /**
         * 是否启用购物车。
         * - true：启用
         * - false：不启用
         * @example `false`
         */
        CartEnable: boolean;
        /**
         * 是否显示目录。
         * - true：显示
         * - false：不显示
         * @example `false`
         */
        CatalogVisible: boolean;
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
