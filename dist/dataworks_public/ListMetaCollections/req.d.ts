export interface ListMetaCollectionsRequest {
    /**
     * 父集合唯一标识
     * @example `Album.1234`
     */
    "ParentQualifiedName"?: string;
    /**
     * 分页信息，指定本次读取的起始点
     * @example `12345`
     */
    "NextToken"?: string;
    /**
     * 每页显示的条数，默认为10条，最大100条。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 关键字。
     * @example `关键词`
     */
    "Keyword"?: string;
    /**
     * 排序字段名称。
     * @example `排序字段`
     */
    "OrderBy"?: string;
    /**
     * 查询的集合类型，取值范围：
     * - **ALBUM**：专辑集合
     * - **ALBUM_CATEGORY**：专辑内的类目
     * @example `ALBUM`
     */
    "CollectionType": string;
    /**
     * 创建者用户ID。
     * @example `1200759642363000`
     */
    "Creator"?: string;
    /**
     * 集合管理员ID
     * @example `1200759642363000`
     */
    "Administrator"?: string;
    /**
     * 集合关注者ID
     * @example `1200759642363000`
     */
    "Follower"?: string;
}
