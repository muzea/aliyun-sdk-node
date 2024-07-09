export interface CheckRecoveryConditionRequest {
    /**
     * 待恢复的源实例ID。
     * @example `dds-bp1378****`
     */
    "SourceDBInstance": string;
    /**
     * 所需恢复的数据库名，格式为JSON数组。
     * > 如果不传入本参数，默认恢复所有数据库。
     * @example `["db1","db2"]`
     */
    "DatabaseNames"?: string;
    /**
     * 实例所需恢复的时间点，格式为yyyy-MM-ddTHH:mm:ssZ（UTC时间）。
     * > - 本参数可取值为7天内的任意时间，但是须早于当前时间，且晚于实例的创建时间。
     * > - 本参数和**BackupId**参数两者中必须传入一项。
     * @example `2022-08-22T08:00:00Z`
     */
    "RestoreTime"?: string;
    /**
     * 备份ID。
     * > - 您可以通过调用[DescribeBackups](~~62172~~)接口查询备份ID。
     * > - 本参数和**RestoreTime**参数两者中必须传入一项。
     * > - 分片集群实例不支持传入本参数。
     * @example `5664****`
     */
    "BackupId"?: string;
    /**
     * 资源组ID。
     * @example `sg-bp179****`
     */
    "ResourceGroupId"?: string;
    /**
     * 源实例所在区域。
     * >- 当备份恢复类型为已删除实例重建时，需要且必填
     * >- 当备份恢复类型为异地备份克隆时，需要且必填
     * @example `cn-beijing`
     */
    "SrcRegion"?: string;
    /**
     * 异地备份恢复时，备份集所在区域。
     * > 当备份恢复类型为异地备份克隆时，需要且必填
     * @example `cn-hangzhou`
     */
    "DestRegion"?: string;
    /**
     * 备份恢复类型
     * >- 0:  本地备份恢复
     * >- 1:   本地时间点恢复
     * >- 2:  已删除实例使用备份集备份恢复
     * >- 3:  异地备份使用备份集备份恢复
     * @example `0`
     */
    "RestoreType"?: string;
    /**
     * 实例类型，取值：
     * - replicate
     * - sharding
     * >- 当备份恢复类型为已删除实例重建时，需要且必填
     * >- 当备份恢复类型为异地备份克隆时，需要且必填
     * @example `replicate`
     */
    "InstanceType"?: string;
}
