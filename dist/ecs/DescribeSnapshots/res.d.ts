export interface DescribeSnapshotsResponse {
    /**
     * 下一个查询起始标志。
     * @example `caeba0bbb2be03f84eb48b699f0a4883`
     */
    NextToken: string;
    /**
     * 输入时设置的每页行数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 快照列表的页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    /**
     * 快照总个数。
     * @example `1`
     */
    TotalCount: number;
    Snapshots: {
        /**
         * 快照详情集合。
         */
        Snapshot: {
            /**
             * 快照状态。可能值：
             * - progressing
             * - accomplished
             * - failed
             * @example `accomplished`
             */
            Status: string;
            /**
             * 创建时间。按照[ISO 8601](~~25696~~)标准表示，并使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
             * @example `2020-08-20T14:52:28Z`
             */
            CreationTime: string;
            /**
             * 快照创建进度，单位为百分比。
             * @example `100%`
             */
            Progress: string;
            /**
             * 是否开启了快照极速可用能力。可能值：
             * - true：开启。ESSD云盘默认开启该能力。
             * - false：关闭。即快照为未开启极速可用能力的普通快照。
             * @example `false`
             */
            InstantAccess: boolean;
            /**
             * 快照是否可用于创建云盘、回滚云盘。可能值：
             * - true：可用。
             * - false：不可用。
             * @example `false`
             */
            Available: boolean;
            /**
             * 正在创建的快照剩余完成时间，单位为秒。
             * @example `38`
             */
            RemainTime: number;
            /**
             * 源云盘容量，单位：GiB。
             * @example `40`
             */
            SourceDiskSize: string;
            /**
             * 自动快照保留天数。
             * @example `30`
             */
            RetentionDays: number;
            /**
             * 源云盘属性。可能值：
             * - system
             * - data
             * @example `system`
             */
            SourceDiskType: string;
            /**
             * 原云盘类型。
             * >该参数即将被弃用，为提高兼容性，建议您尽量使用其他参数。
             * @example `disk`
             */
            SourceStorageType: string;
            /**
             * 快照是否被用作创建镜像或云盘。可能值：
             * - image
             * - disk
             * - image_disk
             * - none
             * @example `image`
             */
            Usage: string;
            /**
             * 快照的最后变更时间。按照[ISO 8601](~~25696~~)标准表示，并使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
             * @example `2020-08-25T14:18:09Z`
             */
            LastModifiedTime: string;
            /**
             * 该快照是否加密。
             * @example `false`
             */
            Encrypted: boolean;
            /**
             * 快照创建类型。可能值：
             * - auto或者timer：自动创建快照。
             * - user：手动创建快照。
             * - all：所有的快照创建类型。
             * @example `all`
             */
            SnapshotType: string;
            /**
             * 源云盘ID。如果快照的源云盘已经被释放，该字段仍旧保留。
             * @example `d-bp67acfmxazb4ph****`
             */
            SourceDiskId: string;
            /**
             * 快照显示名称。如果创建时指定了快照显示名称，则返回。
             * @example `testSnapshotName`
             */
            SnapshotName: string;
            /**
             * 设置快照极速可用功能的保留时间，保留时间到期后自动关闭快照极速可用功能。
             * 默认与参数`RetentionDays`的值一致。
             * >该参数已弃用。ESSD云盘普通快照已升级为[默认极速可用](~~193667~~)，您无需额外配置，且不产生额外花销。
             * @example `30`
             */
            InstantAccessRetentionDays: number;
            /**
             * 描述信息。
             * @example `testDescription`
             */
            Description: string;
            /**
             * 快照ID。
             * @example `s-bp67acfmxazb4p****`
             */
            SnapshotId: string;
            /**
             * 快照所属的地域ID。
             * @example `cn-hangzhou`
             */
            RegionId: string;
            /**
             * 资源组ID。
             * @example `rg-bp67acfmxazb4p****`
             */
            ResourceGroupId: string;
            /**
             * 快照类型。
             * > 该参数即将被弃用，为提高兼容性，建议您尽量使用参数`InstantAccess`。
             * @example `standard`
             */
            Category: string;
            /**
             * 数据盘对应的KMS密钥ID。
             * @example `0e478b7a-4262-4802-b8cb-00d3fb40****`
             */
            KMSKeyId: string;
            /**
             * 快照序列号。
             * @example `64472-116742336-61976****`
             */
            SnapshotSN: string;
            /**
             * 从云市场镜像继承的产品编号。
             * @example `jxsc000****`
             */
            ProductCode: string;
            /**
             * 源快照。
             * @example `s-bp67acfmxazb4p****`
             */
            SourceSnapshotId: string;
            /**
             * 源快照地域。
             * @example `cn-hangzhou`
             */
            SourceRegionId: string;
            /**
             * 快照关联的快照链ID。
             * @example `sl-bp1grgphbcc9brb5****`
             */
            SnapshotLinkId: string;
            Tags: {
                /**
                 * 标签。
                 */
                Tag: {
                    /**
                     * 快照的标签值。
                     * @example `TestValue`
                     */
                    TagValue: string;
                    /**
                     * 快照的标签键。
                     * @example `TestKey`
                     */
                    TagKey: string;
                }[];
            };
        }[];
    };
}
