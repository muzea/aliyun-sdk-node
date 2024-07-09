export interface ModifyClusterAttributesRequest {
    /**
     * 指定修改的集群ID。
     * @example `ehpc-hz-FYUr32****`
     */
    "ClusterId": string;
    /**
     * 修改后的集群名称。
     * @example `cluster1`
     */
    "Name"?: string;
    /**
     * 修改后的集群描述信息。
     * @example `test-description`
     */
    "Description"?: string;
    /**
     * 集群修改后的镜像类型。取值范围：
     * - system：公共镜像
     * - self：自定义镜像
     * - others：共享镜像
     * - marketplace：镜像市场镜像
     * @example `self`
     */
    "ImageOwnerAlias"?: string;
    /**
     * 镜像ID。
     * @example `centos_7_06_64_20G_alibase_2019071****`
     */
    "ImageId"?: string;
    /**
     * 授权实例配置时，实例RAM角色的名称。
     * @example `testRamRoleName`
     */
    "RamRoleName"?: string;
    /**
     * 授权实例配置时，要绑定RAM角色的节点类型。
     */
    "RamNodeTypes"?: string[];
    /**
     * 连接Windows AD参数。
     */
    "WinAdPar"?: {
        /**
         * Windows AD服务器管理员。
         * @example `administrator`
         */
        AdUser: string;
        /**
         * Windows AD服务器管理员密码。
         * @example `xxxxxxx`
         */
        AdUserPasswd: string;
        /**
         * Windows AD服务器域名。
         * @example `ehpcad.com`
         */
        AdDc: string;
        /**
         * Windows AD服务器IP。
         * @example `192.168.1.2`
         */
        AdIp: string;
        /**
         * Linux服务器home目录。
         * @example `/home`
         */
        FallbackHomeDir: string;
    };
}
