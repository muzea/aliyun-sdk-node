export interface ListOrganizationalUnitsResponse {
    /**
     * 数据总记录数。
     * @example `1000`
     */
    totalCount: number;
    /**
     * 返回数据对象列表。
     */
    data: {
        /**
         * 实例ID。
         * @example `idaas_ue2jvisn35ea5lmthk267xxxxx`
         */
        instanceId: string;
        /**
         * 组织ID。
         * @example `ou_wovwffm62xifdziem7an7xxxxx`
         */
        organizationalUnitId: string;
        /**
         * 组织名称。
         * @example `name001`
         */
        organizationalUnitName: string;
        /**
         * 父组织ID。
         * @example `ou_wovwffm62xifdziem7an7xxxxx`
         */
        parentId: string;
        /**
         * 组织外部ID，用于外部数据与IDaaS组织的数据关联映射，默认为IDaaS组织ID。
         * 说明：外部ID在同一来源类型和来源ID下唯一。
         * @example `ou_wovwffm62xifdziem7an7xxxxx`
         */
        organizationalUnitExternalId: string;
        /**
         * 组织来源类型，取值可选范围：
         * - build\_in：自建。
         * - ding\_talk：钉钉导入。
         * - ad：AD导入。
         * - ldap：LDAP导入。
         * @example `build_in`
         */
        organizationalUnitSourceType: string;
        /**
         * 组织来源ID。
         * 自建类型默认为实例ID，其他类型，分别对应不同来源的企业ID，比如钉钉来源对应钉钉企业的corpId。
         * @example `idaas_ue2jvisn35ea5lmthk267xxxxx`
         */
        organizationalUnitSourceId: string;
        /**
         * 组织创建时间，Unix时间戳格式，单位为毫秒。
         * @example `1652083425923`
         */
        createTime: number;
        /**
         * 组织最近更新时间，Unix时间戳格式，单位为毫秒。
         * @example `1652083425923`
         */
        updateTime: number;
        /**
         * 组织描述。
         * @example `测试组织`
         */
        description: string;
    }[];
}
