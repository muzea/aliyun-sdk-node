export interface DeleteImageRequest {
    /**
     * 数据库名称。
     * @example `default`
     */
    "DbName": string;
    /**
     * 待删除数据的实体ID。
     * @example `1`
     */
    "EntityId": string;
}
