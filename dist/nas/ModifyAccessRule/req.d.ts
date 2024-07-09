export interface ModifyAccessRuleRequest {
    /**
     * 权限组名称。
     * @example `vpc-test`
     */
    "AccessGroupName": string;
    /**
     * 权限组规则ID。
     * @example `1`
     */
    "AccessRuleId": string;
    /**
     * IP地址或网段。
     * 格式必须为单一的IP地址或者CIDR网段。
     * @example `192.0.**.**`
     */
    "SourceCidrIp"?: string;
    /**
     * 授权对象对文件系统的读写权限。
     * 取值：
     * - RDWR（默认值）：读写
     * - RDONLY：只读
     * @example `RDWR`
     */
    "RWAccessType"?: string;
    /**
     * 授权对象的系统用户对文件系统的访问权限。
     * 取值：
     * - no_squash：允许使用root用户访问文件系统。
     * - root_squash：以root用户身份访问时，映射nobody用户。
     * - all_squash：无论以何种用户身份访问，均映射为nobody用户。
     * nobody用户是Linux系统的默认用户，只能访问服务器上的公共内容，具有低权限，高安全性的特点。
     * @example `all_squash`
     */
    "UserAccessType"?: string;
    /**
     * 权限组规则优先级。
     * 取值范围：1~100
     * 默认值：1（最高优先级）
     * @example `1`
     */
    "Priority"?: number;
    /**
     * 文件系统类型。
     * 取值：
     * - standard（默认值）：通用型NAS
     * - extreme：极速型NAS
     * @example `standard`
     */
    "FileSystemType"?: string;
    /**
     * 源端IPv6 CIDR地址段。
     * 支持CIDR格式和IPv6格式的IP地址。
     * > - 仅华北5（呼和浩特）地域的极速型NAS支持CIDR地址段。
     * > - 仅支持VPC专有网络。
     * > - IPv4和IPv6互斥，类型不能转换。
     * @example `fe80::3d4a:80fd:f05d:****`
     */
    "Ipv6SourceCidrIp"?: string;
}
