export interface UpdateDbfsRequest {
    /**
     * DBFS实例所属的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 数据库文件系统ID。
     * @example `dbfs-GOrr********Yd0VLOyBpg`
     */
    "FsId": string;
    /**
     * 修改后的使用场景。取值范围：
     * - MySQL 5.7
     * - PostgreSQL
     * - MongoDB
     * - Oracle RAC
     * @example `MySQL 5.7`
     */
    "UsedScene"?: string;
    /**
     * 修改后的实例规格。取值范围：
     * - dbfs.small
     * - dbfs.medium
     * - dbfs.large（默认值）
     * @example `dbfs.medium`
     */
    "InstanceType"?: string;
    /**
     * 可定制数据库文件存储实例使用的CPU核数、内存上限值等。
     * @example `{"cpuCoreCount":0.5,"memorySize":512,"pageCacheSize":128}`
     */
    "AdvancedFeatures"?: string;
}
