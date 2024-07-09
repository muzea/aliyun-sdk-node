export interface CreateDbfsRequest {
    /**
     * DBFS实例所属的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 数据库文件系统名称。
     * 取值范围：2~128个字符，以英文大小写字母或中文开头，可包含数字、下划线和连字符（-）。
     * @example `testdbfs-001`
     */
    "FsName": string;
    /**
     * 数据库文件系统类型。取值范围：
     * - standard：标准版
     * - enterprise：企业版
     * @example `standard`
     */
    "Category": string;
    /**
     * 容量大小，以GiB为单位。指定该参数后，其取值必须≥指定快照ID的容量大小。
     * 取值范围：不使能RAID0条带化时为20-32768之间的整数；使能RAID0条带化时为160-262144之间的整数。
     * @example `200`
     */
    "SizeG": number;
    /**
     * DBFS实例所属的可用区ID。
     * @example `cn-hangzhou-i`
     */
    "ZoneId": string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符，且不能超过64个字符。更多详情，请参见[如何保证幂等性](https://help.aliyun.com/document_detail/25693.html)。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * 创建DBFS实例使用的快照ID。
     * @example `s-y2vZ3********vvMilZ2hQ`
     */
    "SnapshotId"?: string;
    /**
     * 使用快照创建DBFS后是否删除原始快照。
     * @example `false`
     */
    "DeleteSnapshot"?: boolean;
    /**
     * 创建DBFS实例时，设置DBFS的性能等级。取值范围：
     * - PL0：单盘最高随机读写IOPS 1万
     * - PL1：单盘最高随机读写IOPS 5万（默认值）
     * - PL2：单盘最高随机读写IOPS 10万
     * - PL3：单盘最高随机读写IOPS 100万
     * @example `PL1`
     */
    "PerformanceLevel"?: string;
    /**
     * 是否以RAID方式来创建DBFS。
     * 取值范围：true或false，默认值为false。
     * @example `false`
     */
    "EnableRaid"?: boolean;
    /**
     * 条带数量。当EnableRaid参数为true时必传。
     * 取值范围：2-8之间的整数。
     * @example `8`
     */
    "RaidStripeUnitNumber"?: number;
    /**
     * DBFS使用的KMS密钥ID。
     * @example `0e478b7a-4262-4802-b8cb-00d3fb40826X`
     */
    "KMSKeyId"?: string;
    /**
     * 是否加密DBFS。
     * 取值范围：true或false，默认值为false。
     * @example `false`
     */
    "Encryption"?: boolean;
    /**
     * DBFS的使用场景。取值范围：
     * - MySQL 5.7
     * - PostgreSQL
     * - MongoDB
     * - Oracle RAC
     * @example `PostgreSQL`
     */
    "UsedScene"?: string;
    /**
     * 实例规格。取值范围：
     * - dbfs.small
     * - dbfs.medium
     * - dbfs.large（默认值）
     * @example `dbfs.small`
     */
    "InstanceType"?: string;
    /**
     * 可定制数据库文件存储实例使用的CPU核数、内存上限值等。
     * - cpuCoreCount：CPU核数。
     * -  memorySize：内存大小，单位MB。
     * - pageCacheSize：PageCache缓存大小，单位MB。
     * @example `{"cpuCoreCount":0.5,"memorySize":512,"pageCacheSize":128}`
     */
    "AdvancedFeatures"?: string;
}
