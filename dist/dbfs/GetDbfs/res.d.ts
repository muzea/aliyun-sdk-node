export interface GetDbfsResponse {
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    /**
     * 数据库文件系统实例。
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
         * 数据库文件系统描述信息。
         * @example `desc`
         */
        Description: string;
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
         * KMS密钥ID。
         * @example `c39EcDBf-2Ecb-C3C6-6526-018d4D******`
         */
        KMSKeyId: string;
        /**
         * 是否已加密。
         * @example `false`
         */
        Encryption: boolean;
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
         * DBFS实例规格。取值范围：
         * - dbfs.small
         * - dbfs.medium
         * - dbfs.large
         * @example `dbfs.small`
         */
        InstanceType: string;
        /**
         * 条数个数。
         * @example `2`
         */
        RaidStrip: number;
        /**
         * DBFS使用的云盘列表。
         */
        EbsList: {
            /**
             * 云盘ID。
             * @example `d-bp1hq4******qi7gy1th`
             */
            EbsId: string;
            /**
             * 云盘容量。单位GiB。
             * @example `20`
             */
            SizeG: number;
        }[];
        /**
         * 最近一次操作失败原因。
         * @example `TargetIsBusy.DBFS`
         */
        LastFailed: string;
        /**
         * 快照相关信息。
         */
        SnapshotInfo: {
            /**
             * 快照数量。
             * @example `1`
             */
            SnapshotCount: number;
            /**
             * 快照链id，若没有快照链则为“-”。
             * @example `sl-9zskwvgoqqqvzxa*******`
             */
            LinkId: string;
            /**
             * 快照容量。
             * @example `50331648`
             */
            TotalSize: number;
            /**
             * 自动快照策略id，若没有设置自动快照策略则为“-”。
             * @example `sp-ehuhzlfetb2jiwz*******`
             */
            PolicyId: string;
        };
        /**
         * 数据库文件存储实例使用的CPU核数、内存上限值等。
         * - cpuCoreCount：CPU核数。
         * -  memorySize：内存大小，单位MB。
         * - pageCacheSize：PageCache缓存大小，单位MB。
         * @example `{"cpuCoreCount":0.5,"memorySize":512,"pageCacheSize":128}`
         */
        AdvancedFeatures: string;
        /**
         * 创建DBFS实例使用的快照ID。
         * @example `s-uvwtoxcjj6xtlua*******`
         */
        SnapshotId: string;
    };
}
