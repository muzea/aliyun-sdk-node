export interface GetRootOrganizationalUnitResponse {
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
         * 实例ID。
         * @example `idaas_ue2jvisn35ea5lmthk267xxxxx`
         */
        InstanceId: string;
        /**
         * 组织ID。
         * @example `ou_wovwffm62xifdziem7an7xxxxx`
         */
        OrganizationalUnitId: string;
        /**
         * 组织名称。
         * @example `name001`
         */
        OrganizationalUnitName: string;
        /**
         * 组织创建时间，Unix时间戳格式，单位为毫秒。
         * @example `1652085686179`
         */
        CreateTime: number;
        /**
         * 组织最近一次更新时间，Unix时间戳格式，单位为毫秒。
         * @example `1652085686179`
         */
        UpdateTime: number;
        /**
         * 组织描述。
         * @example `测试组织`
         */
        Description: string;
    };
}
