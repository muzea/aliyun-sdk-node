export interface ModifyIPv6TranslatorAclListEntryRequest {
    /**
     * 访问控制策略组的地域。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * IP条目所在的访问控制策略组ID。
     * @example `ipv6transacl-bp1b4z3tleyhq1s50****`
     */
    "AclId": string;
    /**
     * IP条目所在的访问控制策略组条目的ID。
     * @example `ipv6transaclentry-bp1jzyn7ra8pyxehd****`
     */
    "AclEntryId": string;
    /**
     * 访问控制策略组条目的备注信息。
     * 长度为2~100个字符，以大小字母或中文开头，可包含数字、下划线（_）或短划线（-）。
     * @example `client IP`
     */
    "AclEntryComment": string;
}
