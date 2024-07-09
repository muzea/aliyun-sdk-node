export interface ListUsersRequest {
    /**
     * 实例ID。
     * @example `idaas_ue2jvisn35ea5lmthk267xxxxx`
     */
    "InstanceId": string;
    /**
     * 列表页码，默认1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 列表大小，默认20，最大不超过100。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 账户ID列表。
     */
    "UserIds"?: string[];
    /**
     * 账户名前缀，采用左匹配查询。
     * @example `name_001`
     */
    "UsernameStartsWith"?: string;
    /**
     * 账户展示名前缀，采用左匹配查询。
     * @example `name`
     */
    "DisplayNameStartsWith"?: string;
    /**
     * 手机地区编号,示例：中国大陆手区号为86，不带 00 或 +。
     * @example `86`
     */
    "PhoneRegion"?: string;
    /**
     * 账户手机号。
     * @example `156xxxxxxx`
     */
    "PhoneNumber"?: string;
    /**
     * 账户邮箱。
     * @example `user@example.com`
     */
    "Email"?: string;
    /**
     * 外部ID，用于外部数据与IDaaS账户的数据关联映射。
     * 说明：外部ID在同一来源类型和来源ID下唯一。
     * @example `id_wovwffm62xifdziem7an7xxxxx`
     */
    "UserExternalId"?: string;
    /**
     * 账户来源ID。
     * 自建类型默认为实例ID，其他类型，分别对应不同来源的企业ID，比如钉钉来源对应钉钉企业的corpId。
     * @example `idaas_ue2jvisn35ea5lmthk267xxxxx`
     */
    "UserSourceId"?: string;
    /**
     * 账户来源类型，取值可选范围：
     * - build\_in：自建。
     * - ding\_talk：钉钉导入。
     * - ad：AD导入。
     * - ldap：LDAP导入
     * - we\_com：企业微信导入。
     * @example `build_in`
     */
    "UserSourceType"?: string;
    /**
     * 账户状态，取值可选范围：
     * - enabled： 启用中。
     * - disabled： 禁用中。
     * @example `enable`
     */
    "Status"?: string;
    /**
     * 组织ID。
     * @example `ou_wovwffm62xifdziem7an7xxxxx`
     */
    "OrganizationalUnitId"?: string;
}
