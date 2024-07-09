export interface GetOrganizationalUnitResponse {
    /**
     * 请求ID。
     * @example `0441BD79-92F3-53AA-8657-F8CE4A2B912A`
     */
    RequestId: string;
    /**
     * 组织数据对象。
     */
    OrganizationalUnit: {
        /**
         * 组织ID。
         * @example `ou_wovwffm62xifdziem7an7xxxxx`
         */
        OrganizationalUnitId: string;
        /**
         * 组织名称。
         * @example `test_organizationalUnit_name`
         */
        OrganizationalUnitName: string;
        /**
         * 父组织ID。
         * @example `ou_wovwffm62xifdziem7an7xxxxx`
         */
        ParentId: string;
        /**
         * 组织外部ID，用于外部数据与IDaaS组织的数据关联映射，默认为IDaaS组织ID。
         * 说明：外部ID在同一来源类型和来源ID下唯一。
         * @example `ou_wovwffm62xifdziem7an7xxxxx`
         */
        OrganizationalUnitExternalId: string;
        /**
         * 账户来源类型，取值可选范围：
         * - build\_in：自建。
         * - ding\_talk：钉钉导入。
         * - ad：AD导入。
         * - ldap：LDAP导入。
         * - we\_com：企业微信导入。
         * @example `build_in`
         */
        OrganizationalUnitSourceType: string;
        /**
         * 组织来源ID。
         * 自建类型默认为实例ID，其他类型，分别对应不同来源的企业ID，比如钉钉来源对应钉钉企业的corpId。
         * @example `idaas_ue2jvisn35ea5lmthk267xxxxx`
         */
        OrganizationalUnitSourceId: string;
        /**
         * 组织创建时间，Unix时间戳格式，单位为毫秒。
         * @example `1652085686179`
         */
        CreateTime: number;
        /**
         * 最近一次更新时间，Unix时间戳格式，单位为毫秒。
         * @example `1652085686179`
         */
        UpdateTime: number;
        /**
         * 组织描述信息。
         * @example `测试组织`
         */
        Description: string;
        /**
         * 实例ID。
         * @example `idaas_ue2jvisn35ea5lmthk267xxxxx`
         */
        InstanceId: string;
        /**
         * 是否叶子节点，true表示该组织没有子节点，false表示该组织下存在子节点。
         * @example `false`
         */
        Leaf: boolean;
    };
}
