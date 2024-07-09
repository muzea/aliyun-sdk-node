export interface ListCustomViewsResponse {
    /**
     * 请求ID，具有唯一性。
     * @example `580e8ce3-3b80-44c5-9f3f-36ac3cc5bdd5`
     */
    RequestId: string;
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 每页数量。
     * @example `10`
     */
    PageSize: number;
    /**
     * 总数量。
     * @example `1`
     */
    TotalCount: number;
    CustomViews: {
        /**
         * 自定义库图片。
         */
        CustomView: {
            /**
             * 自定义库view图片ID。
             * @example `1`
             */
            CustomViewId: string;
            /**
             * 图片URL。
             * @example `http://127.66.**.**​/photo.jpeg`
             */
            ImageUrl: string;
        }[];
    };
}
