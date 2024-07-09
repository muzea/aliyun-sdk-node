export interface UpdateMetaCollectionRequest {
    /**
     * 集合的唯一标识
     * @example `album.396397`
     */
    "QualifiedName": string;
    /**
     * 名称
     * @example `myCollectionName`
     */
    "Name"?: string;
    /**
     * 集合备注
     * 长度限制：1-64字符
     * @example `this is a comment`
     */
    "Comment"?: string;
}
