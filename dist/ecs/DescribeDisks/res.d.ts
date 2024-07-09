export interface DescribeDisksResponse {
    /**
     * 本次调用返回的查询凭证值。
     * @example `AAAAAdDWBF2****`
     */
    NextToken: string;
    /**
     * 输入时设置的每页行数。
     * @example `1`
     */
    PageSize: number;
    /**
     * 磁盘列表的页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    /**
     * 查询结果总条数。
     * @example `15`
     */
    TotalCount: number;
    Disks: {
        /**
         * 磁盘信息组成的集合。
         */
        Disk: {
            /**
             * 磁盘的序列号。
             * @example `bp18um4r4f2fve2****`
             */
            SerialNumber: string;
            /**
             * 创建时间。
             * @example `2021-06-07T06:08:54Z`
             */
            CreationTime: string;
            /**
             * 磁盘状态。可能值：
             * -   In_use：使用中。
             * -   Available：待挂载。
             * -   Attaching：挂载中 。
             * -   Detaching：卸载中。
             * -   Creating：创建中。
             * -   ReIniting：初始化中。
             * @example `In_use`
             */
            Status: string;
            /**
             * 磁盘类型。可能值：
             * - system：系统盘。
             * - data：数据盘。
             * @example `system`
             */
            Type: string;
            /**
             * ESSD云盘的性能等级。可能值：
             * - PL0：单盘最高随机读写IOPS 1万。
             * - PL1：单盘最高随机读写IOPS 5万。
             * - PL2：单盘最高随机读写IOPS 10万。
             * - PL3：单盘最高随机读写IOPS 100万。
             * @example `PL0`
             */
            PerformanceLevel: string;
            /**
             * 该参数正在邀测中，暂未开放使用。
             * @example `null`
             */
            BdfId: string;
            /**
             * 云盘是否启用自动快照策略功能。
             * @example `false`
             */
            EnableAutoSnapshot: boolean;
            /**
             * 存储集ID。
             * @example `ss-i-bp1j4i2jdf3owlhe****`
             */
            StorageSetId: string;
            /**
             * 存储集中的最大分区数量。
             * @example `11`
             */
            StorageSetPartitionNumber: number;
            /**
             * 磁盘ID。
             * @example `d-bp18um4r4f2fve24****`
             */
            DiskId: string;
            /**
             * 是否同时删除自动快照。可能值：
             * - true：删除云盘上的快照。
             * - false：保留云盘上的快照。
             * 通过[CreateSnapshot](~~25524~~)或者在控制台创建的快照，不受这个参数的影响，会始终保留。
             * @example `false`
             */
            DeleteAutoSnapshot: boolean;
            /**
             * 云盘所属的专属块存储集群ID。如果您的云盘在公共云块存储集群中，则该返回值为空。
             * @example `dbsc-j5e1sf2vaf5he8m2****`
             */
            StorageClusterId: string;
            /**
             * 是否为加密云盘。
             * @example `false`
             */
            Encrypted: boolean;
            /**
             * 每秒读操作的次数上限，单位：次/s。
             * @example `2000`
             */
            IOPSRead: number;
            /**
             * 共享存储挂载的实例数量。
             * @example `1`
             */
            MountInstanceNum: number;
            /**
             * 磁盘描述。
             * @example `testDescription`
             */
            Description: string;
            /**
             * 磁盘挂载的实例的设备名，例如/dev/xvdb。您需要注意：
             * - 该参数仅在`Status`参数值为`In_use`或`Detaching`时才有值，其他状态时为空。
             * - 对于开启多重挂载特性的云盘，该值始终为空。您可以通过返回的`Attachment`对象组成的列表，查看云盘所涉及的所有挂载信息。
             * > 该参数即将停止使用，为提高代码兼容性，建议您尽量不要使用该参数。
             * @example `/dev/xvdb`
             */
            Device: string;
            /**
             * 磁盘名称。
             * @example `testDiskName`
             */
            DiskName: string;
            /**
             * 磁盘是否可卸载。
             * @example `false`
             */
            Portable: boolean;
            /**
             * 创建ECS实例时使用的镜像ID，只有通过镜像创建的云盘才有值，否则为空。这个值在云盘的生命周期内始终不变。
             * @example `m-bp13aqm171qynt3u***`
             */
            ImageId: string;
            /**
             * 云盘使用的KMS密钥ID。
             * @example `0e478b7a-4262-4802-b8cb-00d3fb408***`
             */
            KMSKeyId: string;
            /**
             * 是否随实例释放。可能值：
             * - true：释放实例时，这块磁盘随实例一起释放。
             * - false：释放实例时，这块磁盘保留不释放。
             * @example `true`
             */
            DeleteWithInstance: boolean;
            /**
             * 该磁盘最后一次卸载时间。
             * @example `2021-06-07T21:01:22Z`
             */
            DetachedTime: string;
            /**
             * 创建云盘使用的快照ID。
             * 如果创建云盘时，没有指定快照，则该参数值为空。该参数值在云盘的生命周期内始终不变。
             * @example `s-bp67acfmxazb4p****`
             */
            SourceSnapshotId: string;
            /**
             * 云盘采用的自动快照策略ID。
             * @example `sp-bp67acfmxazb4p****`
             */
            AutoSnapshotPolicyId: string;
            /**
             * 云盘是否设置了自动快照策略。
             * @example `false`
             */
            EnableAutomatedSnapshotPolicy: boolean;
            /**
             * 每秒写操作的次数上限，单位：次/s。
             * @example `2000`
             */
            IOPSWrite: number;
            /**
             * 磁盘挂载的实例ID。您需要注意：
             * - 该参数值仅在`Status`参数值为`In_use`或`Detaching`时才有值，其他状态时为空。
             * - 对于开启多重挂载特性的云盘，该值始终为空。您可以通过返回的`Attachment`对象组成的列表，查看云盘所涉及的所有挂载信息。
             * @example `i-bp67acfmxazb4q****`
             */
            InstanceId: string;
            /**
             * 每秒读写（I/O）操作的次数上限，单位：次/s。
             * @example `4000`
             */
            IOPS: number;
            /**
             * 磁盘所属的地域ID。
             * @example `cn-hangzhou`
             */
            RegionId: string;
            /**
             * 包年包月磁盘的过期时间。
             * @example `2021-07-07T16:00Z`
             */
            ExpiredTime: string;
            /**
             * 磁盘大小，单位GiB。
             * @example `60`
             */
            Size: number;
            /**
             * 磁盘所在的企业资源组ID。
             * @example `rg-bp67acfmxazb4p****`
             */
            ResourceGroupId: string;
            /**
             * 磁盘的计费方式。可能值：
             * - PrePaid：包年包月。
             * - PostPaid：按量付费。
             * @example `PrePaid`
             */
            DiskChargeType: string;
            /**
             * 磁盘所属的可用区ID。
             * @example `cn-hangzhou-i`
             */
            ZoneId: string;
            /**
             * 该磁盘最后一次挂载的时间。按照ISO8601标准表示，使用UTC+0时间。格式为：yyyy-MM-ddThh:mmZ。
             * @example `2021-06-07T06:08:56Z`
             */
            AttachedTime: string;
            /**
             * 磁盘种类。可能值：
             * - cloud：普通云盘。
             * - cloud_efficiency：高效云盘。
             * - cloud_ssd：SSD盘。
             * - cloud_essd：ESSD云盘。
             * - cloud_auto：ESSD AutoPL云盘。
             * - local_ssd_pro：I/O密集型本地盘。
             * - local_hdd_pro：吞吐密集型本地盘。
             * - cloud_essd_entry：ESSD Entry云盘。
             * - elastic_ephemeral_disk_standard：弹性临时盘-标准版。
             * - elastic_ephemeral_disk_premium：弹性临时盘-高级版。
             * - ephemeral：（已停售）本地盘。
             * - ephemeral_ssd：（已停售）本地SSD盘。
             * @example `cloud_ssd`
             */
            Category: string;
            /**
             * 云市场的商品标识。
             * @example `jxsc000204`
             */
            ProductCode: string;
            /**
             * 云盘是否开启了多重挂载特性。
             * @example `Disabled`
             */
            MultiAttach: string;
            OperationLocks: {
                /**
                 * 磁盘锁定原因类型。
                 */
                OperationLock: {
                    /**
                     * 磁盘被安全锁定的原因。
                     * @example `security`
                     */
                    LockReason: string;
                }[];
            };
            MountInstances: {
                /**
                 * 共享存储挂载到实例上的信息集合。
                 */
                MountInstance: {
                    /**
                     * 挂载时间。按照[ISO 8601](~~25696~~)标准表示，使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
                     * @example `2017-12-05T2340:00Z`
                     */
                    AttachedTime: string;
                    /**
                     * 磁盘挂载的实例ID。
                     * @example `i-bp1j4i2jdf3owlhe****`
                     */
                    InstanceId: string;
                    /**
                     * 磁盘的挂载点。
                     * @example `/dev/xvda`
                     */
                    Device: string;
                }[];
            };
            Tags: {
                /**
                 * 磁盘的标签集合。
                 */
                Tag: {
                    /**
                     * 标签值。
                     * @example `TestValue`
                     */
                    TagValue: string;
                    /**
                     * 标签键。
                     * @example `TestKey`
                     */
                    TagKey: string;
                }[];
            };
            Attachments: {
                /**
                 * 磁盘所涉及的挂载信息。由`Attachment`对象组成的列表，查询共享块存储时不返回该列表。
                 */
                Attachment: {
                    /**
                     * 所挂载的实例ID。
                     * @example `i-bp67acfmxazb4q****`
                     */
                    InstanceId: string;
                    /**
                     * 设备名称。
                     * @example `/dev/xvda`
                     */
                    Device: string;
                    /**
                     * 挂载的时间，以UTC +0时间为准。
                     * @example `2021-06-07T06:08:56Z`
                     */
                    AttachedTime: string;
                }[];
            };
            /**
             * ESSD AutoPL云盘预配置的读写IOPS。可能值：0~min{50000, 1000*容量-基准性能}。
             * 基准性能=min{1,800+50*容量, 50,000}。
             * 当`DiskCategory`取值为`cloud_auto`时才支持设置该参数。更多信息，请参见[ESSD AutoPL云盘](~~368372~~)。
             * @example `40000`
             */
            ProvisionedIops: number;
            /**
             * 是否开启Burst（性能突发）。可能值：
             * - true：是。
             * - false：否。
             * 当`DiskCategory`取值为`cloud_auto`时才支持设置该参数。更多信息，请参见[ESSD AutoPL云盘](~~368372~~)。
             * @example `false`
             */
            BurstingEnabled: boolean;
            /**
             * 单位时间内可以成功传输的数据数量，单位：MB/s。
             * @example `100`
             */
            Throughput: number;
            /**
             * 单位时间内系统可以成功读取的数据数量，单位：MB/s。
             * @example `100`
             */
            ThroughputRead: number;
            /**
             * 单位时间内系统可以成功写入的数据数量，单位：MB/s。
             * @example `100`
             */
            ThroughputWrite: number;
            Placement: {
                ZoneIds: string;
            };
        }[];
    };
}
