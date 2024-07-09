export interface DescribeDisksResponse {
    /**
     * 返回结果。
     */
    Data: {
        /**
         * 创建时间。
         * @example `2023-12-30 12:00:00`
         */
        CreationTime: string;
        /**
         * 修改时间
         * @example `2023-12-30 12:00:00`
         */
        ModifyAt: string;
        /**
         * 云盘ID。
         * @example `d-bp10jtnecw0yc6s96p0o`
         */
        DiskId: string;
        /**
         * 云盘名称。
         * @example `disk-name`
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
         * 可用区ID。
         * @example `cn-shenzhen-e`
         */
        ZoneId: string;
        /**
         * 云盘或本地盘种类为cloud_essd，表示ESSD云盘。
         * @example `cloud_essd`
         */
        Category: string;
        /**
         * 云盘大小，单位为GiB。
         * @example `40`
         */
        Size: number;
        /**
         * 云盘对应的KMS密钥ID。
         * @example `key-hzz65*********`
         */
        KmsKeyId: string;
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
         * 是否为加密云盘。
         * @example `true`
         */
        Encrypted: boolean;
        /**
         * 云盘状态。更多信息，请参见[云盘状态](~~25689~~)。可能值：
         * -   In_use。
         * -   Available。
         * -   Attaching。
         * -   Detaching。
         * -   Creating。
         * -   ReIniting。
         * @example `Available`
         */
        Status: string;
        /**
         * 该云盘最后一次挂载的时间。按照ISO8601标准表示，使用UTC+0时间。格式为：yyyy-MM-ddThh:mmZ。
         * @example `2021-06-07T06:08:56Z`
         */
        AttachedTime: string;
        /**
         * 该云盘最后一次卸载时间。
         * @example `2021-06-07T21:01:22Z`
         */
        DetachedTime: string;
        /**
         * 挂载信息。
         */
        Attachments: {
            /**
             * 挂载的目标实例归属用户。
             * @example `i-aaaa********`
             */
            InstanceId: string;
            /**
             * 挂载时间。
             * @example `2021-06-07T06:08:56Z`
             */
            AttachedTime: string;
            /**
             * 云盘命名空间ID。
             * @example `4c47c411-b9***********`
             */
            NamespaceId: number;
        }[];
        /**
         * 安全挂载授权对象。
         */
        AccessAuthorization: {
            /**
             * 容器实例。
             */
            Pod: {
                /**
                 * 集群ID。
                 * @example `cid*******`
                 */
                ClusterId: string;
                /**
                 * 容器ID
                 * @example `pid******`
                 */
                PodId: string;
            };
            /**
             * ECS实例。
             */
            Ecs: {
                /**
                 * 实例ID。
                 * @example `i-assd***********`
                 */
                InstanceId: string;
            };
            /**
             * 访问Token。
             * @example `b34385a***************`
             */
            AccessToken: string;
        }[];
        /**
         * 云盘的标签列表。
         */
        Tags: {
            /**
             * 资源的标签键
             * @example `empty-str-0`
             */
            TagKey: string;
            /**
             * 资源的标签值
             * @example `000098dab001c600`
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
         * 单位时间内可以成功传输的数据数量，单位：MB/s。
         * @example `600`
         */
        Throughput: number;
        /**
         * IOPS。
         * @example `26800`
         */
        Iops: number;
        /**
         * ESSD AutoPL云盘预配置的读写IOPS。
         * @example `3200`
         */
        ProvisionedIops: number;
        /**
         * 每秒读操作的次数上限，单位：次/s。
         * @example `2000`
         */
        IopsRead: number;
        /**
         * 每秒写操作的次数上限，单位：次/s。
         * @example `2000`
         */
        IopsWrite: number;
        /**
         * 每秒读写（I/O）操作的次数上限，单位：次/s。
         * @example `4000`
         */
        DeviceNguid: string;
        /**
         * 云盘所在的企业资源组ID。
         * @example `rg-aekz********`
         */
        ResourceGroupId: string;
    }[];
    /**
     * 查询凭证（Token），取值为上一次API调用返回的NextToken参数值。
     * @example `NextToken`
     */
    NextToken: string;
    /**
     * 分页模式查询时的页数。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 分页模式查询时的单页记录数量。
     * @example `10`
     */
    PageSize: number;
    /**
     * 总个数
     * @example `1`
     */
    TotalCount: number;
    /**
     * 请求ID。
     * @example `C123F94F-4E38-19AE-942A-A8D6F44F****`
     */
    RequestId: string;
}
