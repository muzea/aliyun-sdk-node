export interface CreateMetaCollectionRequest {
    /**
     * 集合名称,
     * 长度限制:1-32字符
     * @example `collection_name`
     */
    "Name": string;
    /**
     * 集合备注
     * 长度限制：1-64字符
     * @example `this is a comment`
     */
    "Comment"?: string;
    /**
     * 父集合唯一标识
     * @example `album.333508`
     */
    "ParentQualifiedName"?: string;
    /**
     * 集合类型
     * @example `ALBUM`
     */
    "CollectionType": string;
}
