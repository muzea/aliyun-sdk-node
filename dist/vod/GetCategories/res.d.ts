export interface GetCategoriesResponse {
    /**
     * 子分类总数。
     * @example `2`
     */
    SubTotal: number;
    /**
     * 请求ID。
     * @example `25818875-5F78-4AF6-D7393642CA58****`
     */
    RequestId: string;
    /**
     * 分类的详细信息。
     */
    Category: {
        /**
         * 分类类型。取值：
         * - **default**：音视频/图片分类。
         * - **material**：短视频素材分类。
         * @example `default`
         */
        Type: string;
        /**
         * 父分类ID。
         * @example `100012****`
         */
        ParentId: number;
        /**
         * 分类名称。
         * @example `电影`
         */
        CateName: string;
        /**
         * 分类ID。
         * @example `100`
         */
        CateId: number;
        /**
         * 分类层级。取值：
         * - **0**：一级分类。
         * - **1**：二级分类。
         * - **2**：三级分类。
         * @example `0`
         */
        Level: number;
    };
    SubCategories: {
        /**
         * 子分类的详细信息。
         */
        Category: {
            /**
             * 子分类的类型。取值：
             * - **default**：音视频/图片分类。
             * - **material**：短视频素材分类。
             * @example `default`
             */
            Type: string;
            /**
             * 分类名称。
             * @example `电影`
             */
            CateName: string;
            /**
             * 父分类ID。
             * @example `10020****`
             */
            ParentId: number;
            /**
             * 分类ID。
             * @example `100`
             */
            CateId: number;
            /**
             * 子分类总数。
             * @example `1`
             */
            SubTotal: number;
            /**
             * 分类层级。取值：
             * - **0**：一级分类。
             * - **1**：二级分类。
             * - **2**：三级分类。
             * @example `1`
             */
            Level: number;
        }[];
    };
}
