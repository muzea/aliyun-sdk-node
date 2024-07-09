export interface ListUsersForGroupResponse {
    /**
     * 请求ID。
     * @example `0441BD79-92F3-53AA-8657-F8CE4A2B912A`
     */
    RequestId: string;
    /**
     * 总数总条数目，为匹配到的总数量，单次返回最大数量以pageSize为准。
     * @example `1000`
     */
    TotalCount: number;
    /**
     * 账户对象信息列表。
     */
    Users: {
        /**
         * 账户ID。
         * @example `user_d6sbsuumeta4h66ec3il7yxxxx`
         */
        UserId: string;
        /**
         * 组成员关系来源ID。
         * 自建类型默认为实例ID，其他类型，分别对应不同来源的企业ID，比如钉钉来源对应钉钉企业的corpId。
         * @example `idaas_ue2jvisn35ea5lmthk267xxxxx`
         */
        GroupMemberRelationSourceId: string;
        /**
         * 组成员关系来源类型，取值可选范围：
         * build_in：自建。
         * ding_talk：钉钉导入。
         * ad：AD导入。
         * ldap：LDAP导入。
         * we_com：企业微信导入。
         * @example `build_in`
         */
        GroupMemberRelationSourceType: string;
    }[];
}
