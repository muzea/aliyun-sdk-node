export interface DescribeSnapshotLinksResponse {
    /**
     * 输入时设置的每页行数。
     * @example `50`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    /**
     * 快照链列表的页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 快照链总个数。
     * @example `9`
     */
    TotalCount: number;
    SnapshotLinks: {
        /**
         * 快照链信息组成的集合。
         */
        SnapshotLink: {
            /**
             * 是否开启了快照极速可用功能。可能值：
             * - true：开启。仅ESSD云盘支持开启该功能。
             * - false：关闭。即快照为未开启快照极速可用功能的普通快照。
             * >该参数已弃用。ESSD云盘普通快照已升级为[默认极速可用](~~193667~~)，您无需额外配置，且不产生额外花销。
             * @example `false`
             */
            InstantAccess: boolean;
            /**
             * 快照链中所有快照的大小，单位：Byte。
             * @example `2097152`
             */
            TotalSize: number;
            /**
             * 源云盘的名称。
             * @example `testSourceDiskName`
             */
            SourceDiskName: string;
            /**
             * 源云盘容量，单位：GiB。
             * @example `40`
             */
            SourceDiskSize: number;
            /**
             * 源云盘的云盘类型。可能值：
             * - system：系统盘。
             * - data：数据盘。
             * @example `data`
             */
            SourceDiskType: string;
            /**
             * 实例ID。
             * @example `i-bp1h6jmbefj2cyqs****`
             */
            InstanceId: string;
            /**
             * 快照链ID。
             * @example `sl-2ze0y1jwzpb1geqx****`
             */
            SnapshotLinkId: string;
            /**
             * 快照总个数。
             * @example `1`
             */
            TotalCount: number;
            /**
             * 快照链源云盘所属地域ID。
             * @example `cn-hangzhou`
             */
            RegionId: string;
            /**
             * 源云盘ID，如果快照的源云盘已经被删除，该字段仍旧保留。
             * @example `d-bp1d6tsvznfghy7y****`
             */
            SourceDiskId: string;
            /**
             * 实例名称。
             * @example `testInstanceName`
             */
            InstanceName: string;
            /**
             * 快照类型。
             * @example `standard`
             */
            Category: string;
        }[];
    };
}
