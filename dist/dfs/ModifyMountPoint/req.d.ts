export interface ModifyMountPointRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "InputRegionId": string;
    /**
     * 挂载点ID。
     * @example `f-37af8f42f****.cn-hangzhou.dfs.aliyuncs.com`
     */
    "MountPointId": string;
    /**
     * 权限组ID。
     * @example `acg-e3755fb0-358d-4286-9942-8d461048****`
     */
    "AccessGroupId"?: string;
    /**
     * 挂载点的描述信息。
     * @example `将线上dfs挂载到VPC日志集群的交换机下`
     */
    "Description"?: string;
    /**
     * 挂载点状态。
     * 取值：
     * - Inactive：禁用挂载点
     * - Active：激活挂载点
     * @example `Inactive`
     */
    "Status"?: string;
    /**
     * 文件系统ID。
     * @example `37af8f42-2abc-4e74-889d-664f5163****`
     */
    "FileSystemId": string;
}
