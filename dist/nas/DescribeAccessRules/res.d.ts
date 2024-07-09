export interface DescribeAccessRulesResponse {
    /**
     * 权限规则的总个数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 请求ID。
     * @example `86D89E82-4297-4343-8E1E-A2495B35****`
     */
    RequestId: string;
    /**
     * 每个分页包含的权限规则个数。
     * @example `1`
     */
    PageSize: number;
    /**
     * 文件系统列表的分页页码。
     * @example `1`
     */
    PageNumber: number;
    AccessRules: {
        /**
         * 权限规则信息集合。
         */
        AccessRule: {
            /**
             * 权限规则ID。
             * @example `1`
             */
            AccessRuleId: string;
            /**
             * 地址或地址段。
             * @example `10.0.*.*​/**`
             */
            SourceCidrIp: string;
            /**
             * 源端IPv6 CIDR地址段。
             * @example `2001:250:6000::***`
             */
            Ipv6SourceCidrIp: string;
            /**
             * 授权对象对文件系统的读写权限。
             * 取值：
             * - RDWR（默认值）：读写
             * - RDONLY：只读
             * @example `RDWR`
             */
            RWAccess: string;
            /**
             * 授权对象的系统用户对文件系统的访问权限。
             * 取值：
             * - no_squash：允许使用root用户访问文件系统。
             * - root_squash：以root用户身份访问时，映射nobody用户。
             * - all_squash：无论以何种用户身份访问，均映射为nobody用户。
             * nobody用户是Linux系统的默认用户，只能访问服务器上的公共内容，具有低权限，高安全性的特点。
             * @example `no_squash`
             */
            UserAccess: string;
            /**
             * 优先级。
             * 当同一个授权对象匹配到多条规则时，高优先级规则生效。
             * 取值范围：1~100，1为最高优先级。
             * @example `1`
             */
            Priority: number;
            /**
             * 文件系统类型。
             * 取值：
             * - standard（默认值）：通用型NAS
             * - extreme：极速型NAS
             * @example `standard`
             */
            FileSystemType: string;
            /**
             * 权限组名称。
             * @example `test`
             */
            AccessGroupName: string;
            /**
             * 地域ID。
             * @example `cn-hangzhou`
             */
            RegionId: string;
        }[];
    };
}
