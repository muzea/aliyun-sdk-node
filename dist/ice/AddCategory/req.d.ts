export interface AddCategoryRequest {
    /**
     * 分类名称。
     * - 最多支持64个字节。
     * - UTF-8编码。
     * @example `三级子分类`
     */
    "CateName": string;
    /**
     * 父分类ID。
     * @example `5`
     */
    "ParentId"?: number;
    /**
     * 分类类型。取值：
     * - default（默认值）：音视频/图片分类。
     * - material：短视频素材分类。
     * @example `default`
     */
    "Type"?: string;
}
