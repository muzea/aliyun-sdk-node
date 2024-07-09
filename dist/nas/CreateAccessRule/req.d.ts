export interface CreateAccessRuleRequest {
    /**
     * 权限组名称。
     * @example `vpc-test`
     */
    "AccessGroupName": string;
    /**
     * 授权对象的IP地址或网段。
     * 格式必须为单一的IP地址或者CIDR网段。
     * > 经典网络类型的权限组只支持IP地址。
     * @example `192.0.2.0/16`
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
     * - no_squash（默认值）：允许使用root用户访问文件系统。
     * - root_squash：以root用户身份访问时，映射nobody用户。
     * - all_squash：无论以何种用户身份访问，均映射为nobody用户。
     * nobody用户是Linux系统的默认用户，只能访问服务器上的公共内容，具有低权限、高安全性的特点。
     * @example `no_squash`
     */
    "UserAccessType"?: string;
    /**
     * 权限组规则优先级。
     * 当同一个授权对象匹配到多条规则时，高优先级规则生效。
     * 取值范围：1~100，1为最高优先级。
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
     * 支持CIDR格式和IPv6格式的IP地址范围。
     * > - 当前仅极速型NAS中国内地各地域支持IPv6功能，且该文件系统需要开启IPv6功能。
     * >- 只支持VPC网络。
     * >- IPv4和IPv6互斥。
     * @example `2001:250:6000::***`
     */
    "Ipv6SourceCidrIp"?: string;
}
