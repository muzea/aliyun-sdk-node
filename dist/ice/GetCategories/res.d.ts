export interface GetCategoriesResponse {
    /**
     * 子分类总数。
     * @example `100`
     */
    SubTotal: number;
    /**
     * 请求ID
     * @example `******3B-0E1A-586A-AC29-742247******`
     */
    RequestId: string;
    /**
     * 媒资分类信息。
     */
    Category: {
        /**
         * 分类类型。取值：
         * - **default**（默认值）：音视频/图片分类。
         * - **material**：短视频素材分类。
         * @example `default`
         */
        Type: string;
        /**
         * 分类名称。
         * @example `一级分类`
         */
        CateName: string;
        /**
         * 父分类ID。
         * @example `-1`
         */
        ParentId: number;
        /**
         * 分类ID。
         * @example `46`
         */
        CateId: number;
        /**
         * 分类层级。一级分类层级为**0**，二级分类层级为**1**，三级分类层级为**2**。
         * @example `0`
         */
        Level: number;
    };
    SubCategories: {
        /**
         * 子分类列表。
         */
        Category: {
            /**
             * 分类类型。取值：
             * - **default**（默认值）：音视频/图片分类。
             * - **material**：短视频素材分类。
             * @example `default`
             */
            Type: string;
            /**
             * 分类名称。
             * - 最多支持64个字节。
             * - UTF-8编码。
             * @example `二级子分类`
             */
            CateName: string;
            /**
             * 父分类ID。
             * @example `46`
             */
            ParentId: number;
            /**
             * 分类ID。
             * @example `129`
             */
            CateId: number;
            /**
             * 子分类总数。
             * @example `100`
             */
            SubTotal: number;
            /**
             * 分类层级。一级分类层级为**0**，二级分类层级为**1**，三级分类层级为**2**。
             * @example `1`
             */
            Level: number;
        }[];
    };
}
