export interface AddCategoryResponse {
    /**
     * 请求ID。
     * @example `25818875-5F78-4AF6-D7393642CA58****`
     */
    RequestId: string;
    /**
     * 媒资分类信息。
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
         * @example `100012`
         */
        ParentId: number;
        /**
         * 分类名称。
         * @example `搞笑`
         */
        CateName: string;
        /**
         * 分类ID。后续可作为[UpdateCategory](~~UpdateCategory~~)、[DeleteCategory](~~DeleteCategory~~)、[GetCategories](~~GetCategories~~)接口的请求参数。
         * @example `10020`
         */
        CateId: number;
        /**
         * 分类层级。取值：
         * - **0**：一级分类。
         * - **1**：二级分类。
         * - **2**：三级分类。
         * @example `1`
         */
        Level: number;
    };
}
