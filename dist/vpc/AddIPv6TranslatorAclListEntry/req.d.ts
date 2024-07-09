export interface AddIPv6TranslatorAclListEntryRequest {
    /**
     * 访问控制策略组的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     *  IP条目的访问控制策略组ID。
     * @example `ipv6transacl-bp1dcdvfe2****`
     */
    "AclId": string;
    /**
     * 访问控制策略组条目中要添加的单个IPv6地址或IPv6地址段，例如12XX:0:0:XXXX::0102或12XX:0:0:XXXX::/60。
     * @example `12XX:0:0:XXXX::0102`
     */
    "AclEntryIp": string;
    /**
     * 访问控制策略组条目的备注信息。
     * 长度为2~100个字符，以英文大小字母或中文开头，可包含数字、下划线（_）和短划线（-）。
     * @example `clientIP1`
     */
    "AclEntryComment"?: string;
}
