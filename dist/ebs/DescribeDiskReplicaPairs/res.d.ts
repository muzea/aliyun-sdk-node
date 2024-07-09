export interface DescribeDiskReplicaPairsResponse {
    /**
     * 请求ID。
     * @example `AAA478A0-BEE6-1D42-BEB6-A9CFEAD6****`
     */
    RequestId: string;
    /**
     * 本次调用返回的查询凭证（Token）。
     * @example `AAAAAdDWBF2****`
     */
    NextToken: string;
    /**
     * 异步复制关系的信息组成的集合。
     */
    ReplicaPairs: {
        /**
         * 异步复制关系的ID。
         * @example `pair-cn-dsa****`
         */
        ReplicaPairId: string;
        /**
         * 源云盘（主盘）所属的地域信息。
         * @example `cn-beijing`
         */
        SourceRegion: string;
        /**
         * 主盘所属的可用区。
         * @example `cn-beijing-a`
         */
        SourceZoneId: string;
        /**
         * 源云盘（主盘）的云盘ID。
         * @example `d-bp131n0q38u3a4zi****`
         */
        SourceDiskId: string;
        /**
         * 目标云盘（从盘）所属的地域信息。
         * @example `cn-shanghai`
         */
        DestinationRegion: string;
        /**
         * 从盘所属的可用区。
         * @example `cn-shanghai-b`
         */
        DestinationZoneId: string;
        /**
         * 目标云盘（从盘）的云盘ID。
         * @example `d-asdfjl2342kj2l3k4****`
         */
        DestinationDiskId: string;
        /**
         * 异步复制关系的名称。
         * @example `TestReplicaPair`
         */
        PairName: string;
        /**
         * 异步复制关系的描述信息。
         * @example `This is description.`
         */
        Description: string;
        /**
         * 异步复制关系的状态。可能值：
         * - invalid：失效。该状态表示异步复制关系存在异常。
         * - creating：创建中。
         * - created：已创建。
         * - create_failed：创建失败。
         * - initial_syncing：初始同步中。异步复制在创建并启动后，主盘数据初次异步复制到从盘的过程中，将处于该状态。
         * - manual\_syncing：手动同步中。手动同步，同步完成后恢复到stopped状态。如果是第一次单次同步，则同步中也显示为状态manual_syncing。
         * - syncing：同步中。主盘和从盘之间非第一次进行异步复制数据时，将处于该状态。
         * - normal：正常。当异步复制的当前周期内数据复制完成时，将处于该状态。
         * - stopping：停止中。
         * - stopped：已停止。
         * - stop_failed：停止失败。
         * - failovering：故障切换中。
         * - failovered：故障切换完成。
         * - failover_failed：故障切换失败。
         * - reprotecting：反向复制操作中。
         * - reprotect_failed：反向复制失败。
         * - deleting：删除中。
         * - delete_failed：删除失败。
         * - deleted：已删除。
         * @example `created`
         */
        Status: string;
        /**
         * 复制对的RPO值。单位：秒。
         * @example `900`
         */
        RPO: number;
        /**
         * 异步复制时使用的带宽。单位：Kbps。
         * @example `10240`
         */
        Bandwidth: number;
        /**
         * 异步复制关系的状态提示信息。当`Status=invalid`或`Status=create_failed`时，该参数有返回值。可能值：
         * - PrePayOrderExpired：包年包月的异步复制关系已过期。
         * - PostPayOrderCeaseService：按量付费的异步复制关系停止服务，一般是由于用户欠费引起。
         * - DeviceRemoved：主盘或者从盘被删除。
         * - DeviceKeyChanged：主盘或从盘的`DeviceKey`映射发生变化。
         * - DeviceSizeChanged：主盘或从盘的`DeviceSize`发生变化。
         * - OperationDenied.QuotaExceed：创建复制对数量超过规格。
         * @example `PrePayOrderExpired`
         */
        StatusMessage: string;
        /**
         * 异步复制关系最近一次异步复制操作完成的时间。该参数以时间戳的形式提供返回值。单位：秒。
         * @example `1649751977`
         */
        LastRecoverPoint: number;
        /**
         * 所属的一致性复制组ID。
         * @example `pg-xxxx****`
         */
        ReplicaGroupId: string;
        /**
         * 创建时间。该参数以时间戳的形式提供返回值。单位：秒。
         * @example `1649750977`
         */
        CreateTime: number;
        /**
         * 所属的一致性复制组名称。
         * @example `pg-name****`
         */
        ReplicaGroupName: string;
        /**
         * 复制对和一致性复制组的站点信息来源。可能值：
         * - production：生产站点。
         * - backup：灾备站点。
         * @example `production`
         */
        Site: string;
        /**
         * 异步复制关系的初始源地域。
         * @example `cn-beijing`
         */
        PrimaryRegion: string;
        /**
         * 异步复制关系的初始目的地域。
         * @example `cn-shanghai`
         */
        StandbyRegion: string;
        /**
         * 异步复制关系的初始源可用区。
         * @example `cn-beijing-a`
         */
        PrimaryZone: string;
        /**
         * 异步复制关系的初始目的可用区。
         * @example `cn-shanghai-b`
         */
        StandbyZone: string;
        /**
         * 异步复制关系的付费方式。
         * 可能值：
         * - PREPAY：包年包月。
         * - POSTPAY：按量付费。
         * @example `PREPAY`
         */
        ChargeType: string;
        /**
         * 异步复制关系的过期时间。该参数以时间戳的形式提供返回值。单位：秒。
         * @example `1649750977`
         */
        ExpiredTime: number;
        /**
         * 异步复制对的标签。
         */
        Tags: {
            /**
             * 异步复制对的标签键。
             * @example `testKey`
             */
            TagKey: string;
            /**
             * 异步复制对的标签值。
             * @example `testValue`
             */
            TagValue: string;
        }[];
        /**
         * 异步复制对所在的企业资源组ID。
         * @example `rg-acfmvs*****`
         */
        ResourceGroupId: string;
    }[];
    /**
     * 分页查询时的页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 分页查询时设置的每页行数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 分页查询时的结果总条数。
     * @example `60`
     */
    TotalCount: number;
}
