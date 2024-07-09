export interface GetOrganizationalUnitResponse {
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
     * 外部ID。
     * @example `id_wovwffm62xifdziem7an7xxxxx`
     */
    organizationalUnitExternalId: string;
    /**
     * 来源类型，取值可选范围：
     * - build_in - 自建。
     * - ding\_talk - 钉钉导入。
     * - ad  -  AD导入。
     * - ldap  -  LDAP导入。
     * @example `build_in`
     */
    organizationalUnitSourceType: string;
    /**
     * 来源ID。
     * @example `id_wovwffm62xifdziem7an7xxxxx`
     */
    organizationalUnitSourceId: string;
    /**
     * 创建时间，格式为Unix时间戳，单位为毫秒。
     * @example `1652083425923`
     */
    createTime: number;
    /**
     * 最近更新时间，格式为Unix时间戳，单位为毫秒。
     * @example `1652083425923`
     */
    updateTime: number;
    /**
     * 描述。
     * @example `xxxxx`
     */
    description: string;
}
