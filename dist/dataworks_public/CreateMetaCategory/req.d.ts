export interface CreateMetaCategoryRequest {
    /**
     * 类目的名称。
     * @example `category_name`
     */
    "Name": string;
    /**
     * 类目的备注信息。
     * @example `category 1`
     */
    "Comment"?: string;
    /**
     * 父类目的ID。
     * @example `0`
     */
    "ParentId"?: number;
}
