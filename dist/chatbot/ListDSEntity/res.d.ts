export interface ListDSEntityResponse {
    /**
     * 请求ID
     * @example `ga4h345defgwet2sdf223`
     */
    RequestId: string;
    /**
     * 总条数
     * @example `1`
     */
    TotalCount: number;
    /**
     * 页面大小，默认10
     * @example `10`
     */
    PageSize: number;
    /**
     * 当前页，默认1
     * @example `1`
     */
    PageNumber: number;
    /**
     * 实体列表信息
     */
    Entities: {
        /**
         * 实体ID
         * @example `234564567445`
         */
        EntityId: number;
        /**
         * 实体名称
         * @example `书实体`
         */
        EntityName: string;
        /**
         * 系统实体code，如sys.date；用户实体时为空
         * @example `sys_date`
         */
        SysEntityCode: string;
        /**
         * 实体类型（synonyms | regex | system)
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
         * 创建人ID
         * @example `123231`
         */
        CreateUserId: string;
        /**
         * 创建人名称
         * @example `test`
         */
        CreateUserName: string;
        /**
         * 修改人ID
         * @example `123231`
         */
        ModifyUserId: string;
        /**
         * 修改人名称
         * @example `test`
         */
        ModifyUserName: string;
    }[];
}
