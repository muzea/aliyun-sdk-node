export interface ListDbfsResponse {
    /**
     * 查询结果总条数。
     * @example `32`
     */
    TotalCount: number;
    /**
     * 输入时设置的每页条数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    /**
     * 当前页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 数据库文件系统集合。
     */
    DBFSInfo: {
        /**
         * 数据库文件系统的状态。
         * 取值范围：
         * - unattached  待挂载
         * - attached 已挂载
         * - creating 创建中
         * - attaching 挂载中
         * - detaching 卸载中
         * - deleting 删除中
         * - deleted 已删除
         * - resizing 扩容中
         * - snapshotting 快照中
         * - upgrading 升级中
         * @example `attached`
         */
        Status: string;
        /**
         * 是否为加密的数据库文件系统。
         * @example `false`
         */
        Encryption: boolean;
        /**
         * 数据库文件系统的付费类型，目前仅支持按量付费（postpaid）。
         * @example `postpaid`
         */
        PayType: string;
        /**
         * 数据库文件系统ID。
         * @example `dbfs-GOrr********Yd0VLOyBpg`
         */
        FsId: string;
        /**
         * 标签集合。
         */
        Tags: {
            /**
             * 标签值。
             * @example `TestTagValue1`
             */
            TagValue: string;
            /**
             * 标签ID。
             * @example `1`
             */
            Id: number;
            /**
             * 标签键。
             * @example `TestTagKey1`
             */
            TagKey: string;
        }[];
        /**
         * 数据库文件系统大小，单位GiB。
         * @example `20`
         */
        SizeG: number;
        /**
         * 挂载到的ECS实例集合。
         */
        EcsList: {
            /**
             * 已挂载的ECS实例ID。
             * @example `i-y2vZ3********vvMilZ2hQ`
             */
            EcsId: string;
        }[];
        /**
         * 云盘列表。
         */
        EbsList: {
            /**
             * DBFS使用的云盘ID。
             * @example `d-bp1383******3uir001r`
             */
            EbsId: string;
            /**
             * 云盘容量。单位GiB。
             * @example `20`
             */
            SizeG: number;
        }[];
        /**
         * 数据库文件系统所属的地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 数据库文件系统集群ID。
         * @example `c39EcDBf-2Ecb-C3C6-6526-018d4Dcf63eD`
         */
        DBFSClusterId: string;
        /**
         * 数据库文件系统所属的可用区ID。
         * @example `cn-hangzhou-i`
         */
        ZoneId: string;
        /**
         * 数据库文件系统名称。
         * @example `dbfs-test-01`
         */
        FsName: string;
        /**
         * 数据库文件系统类型。取值范围：
         * - standard：标准版
         * - enterprise：企业版（公测中）
         * @example `standard`
         */
        Category: string;
        /**
         * 创建时间。
         * @example `1609330367000`
         */
        CreatedTime: string;
        /**
         * 数据库文件系统挂载的节点数。
         * @example `1`
         */
        AttachNodeNumber: number;
        /**
         * 数据库文件系统使用的KMS密钥ID。
         * @example `0e478b7a-4262-4802-b8cb-00d3fb408***`
         */
        KMSKeyId: string;
        /**
         * 云盘性能等级。取值范围：
         * - PL0
         * - PL1
         * - PL2
         * - PL3
         * @example `PL1`
         */
        PerformanceLevel: string;
        /**
         * 使用场景。
         * @example `MySQL 5.7`
         */
        UsedScene: string;
        /**
         * 最后挂载时间。
         * @example `1644915400000`
         */
        LastMountTime: string;
        /**
         * 最后卸载时间。
         * @example `1644915319000`
         */
        LastUmountTime: string;
        /**
         * 是否使能RAID。
         * @example `false`
         */
        EnableRaid: boolean;
        /**
         * 条带数量。
         * @example `2`
         */
        RaidStrip: number;
        /**
         * DBFS实例规格。取值范围：
         * - dbfs.small
         * - dbfs.medium
         * - dbfs.large
         * @example `dbfs.small`
         */
        InstanceType: string;
        /**
         * 最近一次操作失败的原因。
         * @example `TargetIsBusy.DBFS`
         */
        LastFailed: string;
        /**
         * 相关快照信息。
         */
        SnapshotInfo: {
            /**
             * 快照总个数。
             * @example `1`
             */
            SnapshotCount: number;
            /**
             * 快照链中所有快照的大小，单位为Byte。
             * @example `50331648`
             */
            TotalSize: number;
            /**
             * 快照链id，若没有快照链则为“-”。
             * @example `sl-b3zlgraysgcs9jy*******`
             */
            LinkId: string;
            /**
             * 自动快照策略id，若没有设置自动快照策略则为“-”。
             * @example `sp-ehuhzlfetb2jiwz*******`
             */
            PolicyId: string;
        };
    }[];
}
