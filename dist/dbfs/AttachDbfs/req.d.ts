export interface AttachDbfsRequest {
    /**
     * 目标ECS实例的ID。
     * @example `i-bp1ecr********5go2go`
     */
    "ECSInstanceId": string;
    /**
     * DBFS软件包地址，已废弃不再使用。
     * @example `dbfs-pkg-cn-hangzhou.oss-cn-hangzhou.aliyuncs.com`
     */
    "ServerUrl"?: string;
    /**
     * 待挂载的数据库文件系统ID。
     * 数据库文件系统（FsId）和ECS实例（ECSInstanceId）必须在同一个可用区内。
     * @example `dbfs-v0WvA********tVEVcgJLg`
     */
    "FsId": string;
    /**
     * 所属的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 挂载模式。取值范围：
     * ```
     * create_new_mount_point - 创建新挂载点（默认值）
     * use_exist_mount_point - 使用已有挂载点
     * ```
     * @example `create_new_mount_point`
     */
    "AttachMode"?: string;
    /**
     * 挂载点路径，不填写则随机生成。
     * @example `/mnt/dbfs/dbfs-001`
     */
    "AttachPoint"?: string;
}
