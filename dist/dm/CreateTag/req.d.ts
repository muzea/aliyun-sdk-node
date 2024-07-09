export interface CreateTagRequest {
    /**
     * 标签名称
     * @example `test`
     */
    "TagName": string;
    /**
     * 标签描述
     * @example `test description`
     */
    "TagDescription"?: string;
}
