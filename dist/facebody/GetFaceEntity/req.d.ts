export interface GetFaceEntityRequest {
    /**
     * 数据库名称。
     * @example `default`
     */
    "DbName": string;
    /**
     * 实体ID。可以包含数字、字母和下划线。
     * @example `66`
     */
    "EntityId": string;
}
