export interface DescribeDiskReplicaGroupsResponse {
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
     * 一致性复制组的信息组成的集合。
     */
    ReplicaGroups: {
        /**
         * 一致性复制组ID。
         * @example `pg-myreplica****`
         */
        ReplicaGroupId: string;
        /**
         * 生产站点所属的地域ID。
         * @example `cn-beijing`
         */
        SourceRegionId: string;
        /**
         * 生产站点所属的可用区ID。
         * @example `cn-beijing-f`
         */
        SourceZoneId: string;
        /**
         * 灾备站点所属的地域ID。
         * @example `cn-shanghai`
         */
        DestinationRegionId: string;
        /**
         * 灾备站点所属的可用区ID。
         * @example `cn-shanghai-e`
         */
        DestinationZoneId: string;
        /**
         * 一致性复制组名称。
         * @example `myreplicagrouptest`
         */
        GroupName: string;
        /**
         * 一致性复制组的描述信息。
         * @example `This is description.`
         */
        Description: string;
        /**
         * 一致性复制组的状态。可能值：
         * - invalid：失效。该状态表示一致性复制组中复制对存在异常。
         * - creating：创建中。
         * - created：已创建。
         * - create_failed：创建失败。
         * - manual_syncing：单次同步中。如果是第一次单次同步，则同步中也显示为该状态。
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
         * 一致性复制组的RPO值。单位：秒。
         * @example `180`
         */
        RPO: number;
        /**
         * 一致性复制组的最近一次异步复制操作完成的时间。该参数以时间戳的形式提供返回值。单位：秒。
         * @example `1637835114`
         */
        LastRecoverPoint: number;
        /**
         * 复制对和一致性复制组的站点信息来源。可能值：
         * - production：生产站点。
         * - backup：灾备站点。
         * @example `production`
         */
        Site: string;
        /**
         * 一致性复制组中包含的复制对ID列表。
         */
        PairIds: string[];
        /**
         * 一致性复制组中包含的复制对个数。
         * @example `2`
         */
        PairNumber: number;
        /**
         * 复制组的初始源地域。
         * @example `cn-beijing`
         */
        PrimaryRegion: string;
        /**
         * 复制组的初始目的地域。
         * @example `cn-shanghai
        `
         */
        StandbyRegion: string;
        /**
         * 复制组的初始源可用区。
         * @example `cn-beijing-h`
         */
        PrimaryZone: string;
        /**
         * 复制组的初始目的可用区。
         * @example `cn-shanghai-e`
         */
        StandbyZone: string;
        /**
         * 带宽值，单位为Kbps。该参数暂未开放使用，返回值由系统预设。
         * @example `0`
         */
        Bandwidth: number;
        /**
         * 复制组所在的企业资源组ID。
         * @example `rg-aek2a*******`
         */
        ResourceGroupId: string;
        /**
         * 复制组的标签。
         */
        Tags: {
            /**
             * 复制组的标签键。
             * @example `testKey`
             */
            TagKey: string;
            /**
             * 复制组的标签值。
             * @example `testValue`
             */
            TagValue: string;
        }[];
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
