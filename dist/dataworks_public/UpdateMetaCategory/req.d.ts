export interface UpdateMetaCategoryRequest {
    /**
     * 类目的名称。
     * @example `category name `
     */
    "Name"?: string;
    /**
     * 类目的备注信息。
     * @example `category name`
     */
    "Comment"?: string;
    /**
     * 类目的ID。
     * @example `2`
     */
    "CategoryId": number;
}
