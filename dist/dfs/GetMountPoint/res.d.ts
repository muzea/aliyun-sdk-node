export interface GetMountPointResponse {
    /**
     * 请求ID。
     * @example `55C5FFD6-BF99-41BD-9C66-FFF39189****`
     */
    RequestId: string;
    /**
     * 挂载点信息集合。
     */
    MountPoint: {
        /**
         * 挂载点状态。
         * 取值：
         * - Inactive：禁用挂载点
         * - Active：激活挂载点
         * @example `Inactive`
         */
        Status: string;
        /**
         * 专有网络ID。
         * @example `vpc-iq8hhsk3ymzv9m4wn****`
         */
        VpcId: string;
        /**
         * 文件系统ID。
         * @example `37af8f42-2abc-4e74-889d-664f5163****`
         */
        FileSystemId: string;
        /**
         * 交换机ID。
         * @example `vsw-iq8fymi327krd14mt****`
         */
        VSwitchId: string;
        /**
         * 挂载点ID。
         * @example `f-37af8f42f****.cn-hangzhou.dfs.aliyuncs.com`
         */
        MountPointId: string;
        /**
         * 挂载点的描述信息。
         * @example `将线上dfs挂载到VPC日志集群的交换机下`
         */
        Description: string;
        /**
         * 挂载点关联的权限组ID。
         * @example `acg-e3755fb0-358d-4286-9942-8d461048****`
         */
        AccessGroupId: string;
        /**
         * 挂载点的创建时间。
         * @example `2022-09-19T03:22:32.550267Z`
         */
        CreateTime: string;
        /**
         * 挂载点的网络类型。
         * @example `VPC`
         */
        NetworkType: string;
        /**
         * 挂载点域名。
         * 您可以在已挂载的VPC网段内通过此域名访问文件存储 HDFS 版文件系统。
         * @example `f-37af8f42f****.cn-hangzhou.dfs.aliyuncs.com`
         */
        MountPointDomain: string;
        /**
         * 地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
    };
}
