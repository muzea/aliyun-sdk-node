export interface UpdateFaceEntityRequest {
    /**
     * 数据库名称。
     * @example `default`
     */
    "DbName": string;
    /**
     * 实体ID，如用户ID、员工ID等。
     * @example `mm2`
     */
    "EntityId": string;
    /**
     * 标签名称，最多可以添加10个标签。
     * @example `鹿班`
     */
    "Labels"?: string;
}
