export interface AddCategoryResponse {
    /**
     * 请求ID
     * @example `****63E8B7C7-4812-46AD-0FA56029AC86****`
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
         * 父分类ID。当ParentId参数设置为空或者小于1时，则默认返回值为-1。表示所创建的分类为根目录。
         * @example `-1`
         */
        ParentId: number;
        /**
         * 分类名称。
         * @example `分类1`
         */
        CateName: string;
        /**
         * 创建的分类ID。
         * @example `45`
         */
        CateId: number;
        /**
         * 分类层级。一级分类层级为**0**，二级分类层级为**1**，三级分类层级为**2**。
         * @example `0`
         */
        Level: number;
    };
}
