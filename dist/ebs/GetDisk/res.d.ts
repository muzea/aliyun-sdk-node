export interface GetDiskResponse {
    /**
     * 云盘列表。
     */
    Disk: {
        /**
         * 创建时间
         * @example `2021-11-18T19:30:16+08:00`
         */
        CreationTime: string;
        /**
         * 修改时间。
         * @example `2021-11-18T19:30:16+08:00
        `
         */
        ModifyAt: string;
        /**
         * 云盘ID。
         * @example `d-bp19c*********`
         */
        DiskId: string;
        /**
         * 云盘名称。
         * @example `diskName`
         */
        DiskName: string;
        /**
         * 云盘描述信息。
         * @example `desc`
         */
        Description: string;
        /**
         * 地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 云盘所属的可用区ID。
         * @example `cn-hangzhou-k`
         */
        ZoneId: string;
        /**
         * 云盘种类为cloud_essd，表示ESSD云盘。
         * @example `cloud_essd`
         */
        Category: string;
        /**
         * 云盘大小，单位为GiB。
         * @example `20`
         */
        Size: number;
        /**
         * 同地域内的云盘加密的密钥ID。
         * @example `key-hz**************`
         */
        KmsKeyId: string;
        /**
         * ESSD云盘的性能等级。可能值：
         * - PL0：单盘最高随机读写IOPS 1万。
         * - PL1：单盘最高随机读写IOPS 5万。
         * - PL2：单盘最高随机读写IOPS 10万。
         * - PL3：单盘最高随机读写IOPS 100万。
         * @example `PL1`
         */
        PerformanceLevel: string;
        /**
         * 是否为加密云盘。
         * @example `true`
         */
        Encrypted: boolean;
        /**
         * 云盘状态。可能值：
         * - In_use
         * - Available
         * - Attaching
         * - Detaching
         * - Creating
         * - ReIniting
         * @example `Available`
         */
        Status: string;
        /**
         * 该云盘最后一次挂载的时间。按照[ISO 8601](~~25696~~)标准表示，使用UTC+0时间。格式为：yyyy-MM-ddThh:mmZ。
         * @example `2021-11-18T19:30:16+08:00
        `
         */
        AttachedTime: string;
        /**
         * 该云盘最后一次卸载时间。
         * @example `2021-11-18T19:30:16+08:00
        `
         */
        DetachedTime: string;
        /**
         * 云盘所涉及的挂载信息。由`Attachment`对象组成的列表，查询共享块存储时不返回该列表。
         */
        Attachments: {
            /**
             * 云盘挂载的实例ID。您需要注意：
             * - 该参数值仅在`Status`参数值为`In_use`时才有值，其他状态时为空。
             * - 对于开启多重挂载特性的云盘，该值始终为空。您可以通过返回的`Attachment`对象组成的列表，查看云盘所涉及的所有挂载信息。
             * @example `i-cad***********`
             */
            InstanceId: string;
            /**
             * 该云盘最后一次挂载的时间。按照ISO8601标准表示，使用UTC+0时间。格式为：yyyy-MM-ddThh:mmZ。
             * @example `2021-11-18T19:30:16+08:00`
             */
            AttachedTime: string;
            /**
             * 命名空间ID
             * @example `308e2*****************`
             */
            NamespaceId: number;
        }[];
        /**
         * 安全挂载授权对象。
         */
        AccessAuthorization: {
            /**
             * 容器实例参数对象。
             */
            Pod: {
                /**
                 * 集群ID。
                 * @example `ccf9**************`
                 */
                ClusterId: string;
                /**
                 * Pod ID。
                 * @example `pid****************`
                 */
                PodId: string;
            };
            /**
             * ECS实例参数对象。
             */
            Ecs: {
                /**
                 * 云盘授权挂载的实例ID。
                 * @example `i-uf6*******************`
                 */
                InstanceId: string;
            };
            /**
             * 云盘挂载Token。
             * @example `4cd9******************`
             */
            AccessToken: string;
        }[];
        /**
         * 标签信息。
         */
        Tags: {
            /**
             * 资源的标签键
             * @example `tag_key`
             */
            TagKey: string;
            /**
             * 资源的标签值
             * @example `tag_value`
             */
            TagValue: string;
        }[];
        /**
         * 是否开启Burst（性能突发）。可能值：
         * - true：是。
         * - false：否。
         * 当`DiskCategory`取值为`cloud_auto`时才支持设置该参数。更多信息，请参见[ESSD AutoPL云盘](~~368372~~)。
         * @example `true`
         */
        BurstingEnabled: boolean;
        /**
         * 目标云盘吞吐量，仅支持修改专属存储集群云盘吞吐量，单位MB/s。
         * 取值范围：60~单盘最大吞吐量。
         * 更多信息，请参见[云盘性能](~~25382~~)。
         * @example `600`
         */
        Throughput: number;
        /**
         * 云盘总IOPS。
         * @example `46800`
         */
        Iops: number;
        /**
         * ESSD AutoPL云盘预配置的读写IOPS。可能值：0~min{50000, 1000*容量-基准性能}。
         * 基准性能=min{1,800+50*容量, 50,000}。
         * 当`DiskCategory`取值为`cloud_auto`时才支持设置该参数。更多信息，请参见[ESSD AutoPL云盘](~~368372~~)。
         * @example `5000`
         */
        ProvisionedIops: number;
        /**
         * 云盘读IOPS。
         * @example `500`
         */
        IopsRead: number;
        /**
         * 云盘写IOPS。
         * @example `500`
         */
        IopsWrite: number;
        /**
         * 云盘设备ID。
         * @example `4cd************`
         */
        DeviceNguid: string;
        /**
         * 资源组ID
         * @example `rg-aek*************`
         */
        ResourceGroupId: string;
    };
    /**
     * 请求ID
     * @example `B9C4B3B3-0D72-5FB0-9319-F4D3BB9E22AC`
     */
    RequestId: string;
}
