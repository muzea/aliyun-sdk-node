export interface CreateAccessControlListRequest {
    /**
     * 访问控制策略组名称，长度限制为1~30个字符，只支持中文、字母、数字和半角句号（.）、短划线（-）、正斜线（/）和下划线（_）。访问控制策略组名称必须为地域内唯一。
     * @example `testAcl`
     */
    "AclName": string;
    /**
     * 访问控制策略组的IP版本。取值：
     * - **IPv4**。
     * - **IPv6**。
     * @example `ipv4`
     */
    "AddressIPVersion"?: string;
}
