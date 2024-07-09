export interface ListMixCategoriesResponse {
    /**
     * 返回结果
     */
    result: {
        /**
         * 类目
         */
        categories: number[];
    }[];
    /**
     * 错误码
     * @example `200`
     */
    code: string;
    /**
     * 请求ID
     * @example `ED093A1D-1C56-57A2-B078-3C518F632F03`
     */
    requestId: string;
    /**
     * 错误详情
     * @example `Success`
     */
    message: string;
}
