export interface DeleteFaceEntityRequest {
    /**
     * 数据库名称。
     * @example `default`
     */
    "DbName": string;
    /**
     * 实体ID，如员工编号。可以包含数字、字母和下划线。
     * @example `wood`
     */
    "EntityId": string;
}
