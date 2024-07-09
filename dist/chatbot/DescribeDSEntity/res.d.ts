export interface DescribeDSEntityResponse {
    /**
     * 请求ID
     * @example `ad23234dsf234fga`
     */
    RequestId: string;
    /**
     * 实体ID
     * @example `123`
     */
    EntityId: number;
    /**
     * 实体名称，仅支持中文、大小写字母、数字、下划线
     * @example `书类型`
     */
    EntityName: string;
    /**
     * 系统实体code，如sys.date；用户实体时为空
     * @example `sys.date`
     */
    SysEntityCode: string;
    /**
     * 实体类型：[synonyms（同义词），regex（正则）]
     * @example `synonyms`
     */
    EntityType: string;
    /**
     * 创建时间（UTC时间）
     * @example `2021-08-12T16:00:01Z`
     */
    CreateTime: string;
    /**
     * 修改时间（UTC时间）
     * @example `2021-08-12T16:00:01Z`
     */
    ModifyTime: string;
    /**
     * 创建者ID
     * @example `123231`
     */
    CreateUserId: string;
    /**
     * 创建人名称
     * @example `test`
     */
    CreateUserName: string;
    /**
     * 修改人唯一标识
     * @example `123231`
     */
    ModifyUserId: string;
    /**
     * 修改人名称
     * @example `test`
     */
    ModifyUserName: string;
}
