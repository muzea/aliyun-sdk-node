export interface DescribeGlobalDistributeCacheResponse {
    /**
     * 每页可展示的记录数。
     * @example `20`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `F3F44BE3-5419-4B61-9BAC-E66E295A****`
     */
    RequestId: string;
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 总记录数。
     * @example `1`
     */
    TotalRecordCount: number;
    /**
     * 分布式实例详细信息列表。
     */
    GlobalDistributeCaches: {
        /**
         * 分布式实例状态，返回值：
         * * **Normal**：运行中。
         * * **Changing**：修改中。
         * * **Creating**：创建中。
         * @example `Normal`
         */
        Status: string;
        /**
         * 分布式实例ID。
         * @example `gr-bp14rkqrhac****`
         */
        GlobalInstanceId: string;
        /**
         * 子实例详细信息列表。
         */
        SubInstances: {
            /**
             * 子实例状态，返回值：
             * * **Normal**：正常。
             * * **Creating**：创建中。
             * * **Changing**：修改中。
             * * **Inactive**：被禁用。
             * * **Flushing**：清除中。
             * * **Released**：已释放。
             * * **Transforming**：转换中。
             * * **Unavailable**：服务停止。
             * * **Error**：创建失败。
             * * **Migrating**：迁移中。
             * * **BackupRecovering**：备份恢复中。
             * * **MinorVersionUpgrading**：小版本升级中。
             * * **NetworkModifying**：网络变更中。
             * * **SSLModifying**：SSL变更中。
             * * **MajorVersionUpgrading**：大版本升级中，可正常访问。
             * > 更多实例状态及详细信息，请参见[实例状态与影响](~~200740~~)。
             * @example `Normal`
             */
            InstanceStatus: string;
            /**
             * 子实例ID。
             * @example `r-bp1zxszhcgatnx****`
             */
            InstanceID: string;
            /**
             * 子实例规格。更多信息，请参见：
             * * [内存型标准版规格](~~145228~~)。
             * * [内存型集群版规格](~~150458~~)。
             * * [内存型读写分离版规格](~~150459~~)。
             * @example `redis.amber.logic.sharding.2g.2db.0rodb.6proxy.multithread`
             */
            InstanceClass: string;
            /**
             * 分布式实例ID。
             * @example `gr-bp14rkqrhac****`
             */
            GlobalInstanceId: string;
            /**
             * 地域ID。
             * @example `cn-hangzhou`
             */
            RegionId: string;
        }[];
    }[];
}
