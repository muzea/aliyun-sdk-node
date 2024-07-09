export interface CreateDiskRequest {
    /**
     * 所属的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 在指定可用区内创建一块按量付费磁盘。
     * - 如果您不设置InstanceId，则ZoneId为必填参数。
     * - 您不能同时指定ZoneId和InstanceId。
     * @example `cn-hangzhou-g`
     */
    "ZoneId"?: string;
    /**
     * 创建云盘使用的快照。2013年7月15日及以前的快照不能用来创建云盘。
     * `SnapshotId`参数和`Size`参数存在以下限制：
     * - 如果`SnapshotId`参数对应的快照容量大于设置的`Size`参数值，实际创建的云盘大小为指定快照的大小。
     * - 如果`SnapshotId`参数对应的快照容量小于设置的`Size`参数值，实际创建的云盘大小为指定的`Size`参数值。
     * - 不支持使用快照创建弹性临时盘。
     * @example `s-bp67acfmxazb4p****`
     */
    "SnapshotId"?: string;
    /**
     * 磁盘名称。长度为2~128个字符，支持Unicode中letter分类下的字符（其中包括英文、中文和数字等）。可以包含半角冒号（:）、下划线（_）、半角句号（.）或者短划线（-）。
     * 默认值：空。
     * @example `testDiskName`
     */
    "DiskName"?: string;
    /**
     * 容量大小。单位：GiB。您必须为该参数传入参数值。取值范围：
     * -   cloud：5~2,000。
     * -   cloud_efficiency：20~32,768。
     * -   cloud_ssd：20~32,768。
     * -   cloud_essd：具体取值范围与`PerformanceLevel`的取值有关。
     *     - PL0：1~32,768。
     *     - PL1：20~32,768。
     *     - PL2：461~32,768。
     *     - PL3：1,261~32,768。
     * - cloud_auto：1~32,768。
     * - cloud_essd_entry：10~32,768。
     * - elastic_ephemeral_disk_standard：64～8,192。
     * - elastic_ephemeral_disk_premium：64～8,192。
     * 如果您指定了`SnapshotId`参数，`SnapshotId`参数和`Size`参数存在以下限制：
     * - 如果`SnapshotId`参数对应的快照容量大于设置的`Size`参数值，实际创建的云盘大小为指定快照的大小。
     * - 如果`SnapshotId`参数对应的快照容量小于设置的`Size`参数值，实际创建的云盘大小为指定的`Size`参数值。
     * @example `2000`
     */
    "Size"?: number;
    /**
     * 数据盘的磁盘种类。取值范围：
     * - cloud：普通云盘。
     * - cloud_efficiency：高效云盘。
     * - cloud_ssd：SSD云盘。
     * - cloud_essd：ESSD云盘。
     * - cloud_auto：ESSD AutoPL云盘。
     * - cloud_essd_entry：ESSD Entry云盘。
     * - elastic_ephemeral_disk_standard：弹性临时盘-标准版。
     * - elastic_ephemeral_disk_premium：弹性临时盘-高级版。
     * 默认值：cloud。
     * @example `cloud_ssd`
     */
    "DiskCategory"?: string;
    /**
     * 磁盘描述。长度为2~256个英文或中文字符，不能以`http://`或`https://`开头。
     * 默认值：空。
     * @example `testDescription`
     */
    "Description"?: string;
    /**
     * 是否加密云盘。取值范围：
     * - true：是。
     * - false：否。
     * 默认值：false。
     * @example `false`
     */
    "Encrypted"?: boolean;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](~~25693~~)。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * 创建一块包年包月磁盘，并自动挂载到指定的包年包月实例（InstanceId）上。
     * - 设置实例ID后，会忽略您设置的ResourceGroupId、Tag.N.Key、Tag.N.Value、ClientToken和KMSKeyId参数。
     * - 您不能同时指定ZoneId和InstanceId。
     * 默认值：空，代表创建的是按量付费云盘，云盘所属地由RegionId和ZoneId确定。
     * @example `i-bp18pnlg1ds9rky4****`
     */
    "InstanceId"?: string;
    /**
     * 磁盘所在的企业资源组ID。
     * @example `rg-bp67acfmxazb4p****`
     */
    "ResourceGroupId"?: string;
    /**
     * 云盘使用的KMS密钥ID。
     * @example `0e478b7a-4262-4802-b8cb-00d3fb40826X`
     */
    "KMSKeyId"?: string;
    /**
     * 创建一块ESSD云盘时，设置云盘的性能等级。取值范围：
     * - PL0：单盘最高随机读写IOPS 1万。
     * - PL1：单盘最高随机读写IOPS 5万。
     * - PL2：单盘最高随机读写IOPS 10万。
     * - PL3：单盘最高随机读写IOPS 100万。
     * 默认值：PL1。
     * 有关如何选择ESSD性能等级，请参见[ESSD云盘](~~122389~~)。
     * @example `PL1`
     */
    "PerformanceLevel"?: string;
    /**
     * 该参数暂未开放使用。
     * @example `hide`
     */
    "AdvancedFeatures"?: string;
    /**
     * 存储集ID。
     * > 存储集相关参数（`StorageSetId`、`StorageSetPartitionNumber`）与专属块存储集群参数（`StorageClusterId`）只能选择其中之一设置。如果同时设置，那么调用接口将会失败。
     * @example `ss-bp67acfmxazb4p****`
     */
    "StorageSetId"?: string;
    /**
     * 该参数暂未开放使用。
     * @example `hide`
     */
    "EncryptAlgorithm"?: string;
    /**
     * 存储集分区数。取值范围：大于等于2，最高不能超过调用[DescribeAccountAttributes](~~73772~~)后显示的权益配额限制。
     * 默认值：2。
     * @example `3`
     */
    "StorageSetPartitionNumber"?: number;
    /**
     * 专属块存储集群ID。如果您需要在指定的专属块存储集群中创建云盘，请指定该参数。
     * > 存储集相关参数（`StorageSetId`、`StorageSetPartitionNumber`）与专属块存储集群参数（`StorageClusterId`）只能选择其中之一设置。如果同时设置，那么调用接口将会失败。
     * @example `dbsc-j5e1sf2vaf5he8m2****`
     */
    "StorageClusterId"?: string;
    /**
     * 是否开启多重挂载特性。取值范围：
     * - Disabled: 不开启。
     * - Enabled : 开启。目前仅ESSD云盘支持设置为`Enabled`。
     * 默认值：Disabled。
     * > 开启多重挂载特性的云盘只支持按量付费的计费方式。因此`MultiAttach=Enabled `时，不能同时设置`InstanceId`参数。您可以在创建云盘后调用[AttachDisk](~~25515~~)进行挂载，但需要注意开启多重挂载功能的云盘只能作为数据盘进行挂载。
     * @example `Disabled`
     */
    "MultiAttach"?: string;
    /**
     * 磁盘的标签信息列表。
     */
    "Tag"?: {
        /**
         * 磁盘的标签键。
         * >为提高代码兼容性，请尽量使用Tag.N.Key参数。
         * @example `Test`
         */
        key: string;
        /**
         * 磁盘的标签键。N的取值范围：1~20。一旦传入Tag.N.Key值，则不允许为空字符串。最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `TestKey`
         */
        Key: string;
        /**
         * 磁盘的标签值。N的取值范围：1~20。一旦传入Tag.N.Value值，可以为空字符串。最多支持128个字符，不能包含`http://`或者`https://`。
         * @example `TestValue`
         */
        Value: string;
        /**
         * 磁盘的标签值。
         * > 为提高代码兼容性，请尽量使用Tag.N.Value参数。
         * @example `Test`
         */
        value: string;
    }[];
    /**
     * 该参数暂未开放使用。
     */
    "Arn"?: {
        /**
         * 该参数暂未开放使用。
         * @example `hide`
         */
        RoleType: string;
        /**
         * 该参数暂未开放使用。
         * @example `hide`
         */
        Rolearn: string;
        /**
         * 该参数暂未开放使用。
         * @example `1000000000`
         */
        AssumeRoleFor: number;
    }[];
    /**
     * ESSD AutoPL云盘预配置的读写IOPS。可能值：0~min{50,000, 1000*容量-基准性能}。
     * 基准性能=min{1,800+50*容量, 50000}。
     * >当DiskCategory取值为cloud_auto时才支持设置该参数。更多信息，请参见[ESSD AutoPL云盘](~~368372~~)。
     * @example `40000`
     */
    "ProvisionedIops"?: number;
    /**
     * 是否开启Burst（性能突发）。取值范围：
     * - true：是。
     * - false：否。
     * >当DiskCategory取值为cloud_auto时才支持设置该参数。更多信息，请参见[ESSD AutoPL云盘](~~368372~~)。
     * @example `false`
     */
    "BurstingEnabled"?: boolean;
}
