export interface DeletePrivateAccessTagRequest {
    /**
     * 内网访问标签ID。取值来源：
     * - [ListPrivateAccessTags](~~ListPrivateAccessTags~~)：批量查询内网访问标签。
     * - [CreatePrivateAccessTag](~~CreatePrivateAccessTag~~)：创建内网访问标签。
     * @example `tag-d3f64e8bdd4a****`
     */
    "TagId": string;
}
