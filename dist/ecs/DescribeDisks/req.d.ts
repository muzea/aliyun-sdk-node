export interface DescribeDisksRequest {
    /**
     * 块存储所属的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 可用区ID。
     * @example `cn-hangzhou-g`
     */
    "ZoneId"?: string;
    /**
     * 云盘、本地盘或弹性临时盘ID。一个带有格式的JSON数组，最多支持100个ID，用半角逗号（,）隔开。
     * @example `["d-bp67acfmxazb4p****", "d-bp67acfmxazb4g****", … "d-bp67acfmxazb4d****"]`
     */
    "DiskIds"?: string;
    /**
     * 云盘、本地盘或弹性临时盘挂载的实例ID。
     * @example `i-bp67acfmxazb4q****`
     */
    "InstanceId"?: string;
    /**
     * 要查询的云盘、本地盘或弹性临时盘类型。取值范围：
     *
     * - all：同时查询系统盘与数据盘。
     * - system：只查询系统盘。
     * - data：只查询数据盘。
     * 默认值：all。
     * >弹性临时盘不支持作为系统盘。
     * @example `all`
     */
    "DiskType"?: string;
    /**
     * 磁盘种类。取值范围：
     *
     * - all：所有云盘以及本地盘。
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
     * 默认值：all。
     * @example `all`
     */
    "Category"?: string;
    /**
     * 磁盘状态。更多信息，请参见[云盘状态](~~25689~~)。取值范围：
     * -   In_use：使用中。
     * -   Available：待挂载。
     * -   Attaching：挂载中 。
     * -   Detaching：卸载中。
     * -   Creating：创建中。
     * -   ReIniting：初始化中。
     * -   All：所有状态。
     * 默认值：All。
     * @example `All`
     */
    "Status"?: string;
    /**
     * 创建云盘时使用的快照ID。
     * @example `s-bp67acfmxazb4p****`
     */
    "SnapshotId"?: string;
    /**
     * 磁盘是否支持卸载。取值范围：
     * -   true：支持。可以独立存在，且可以在可用区内自由挂载和卸载。
     * -   false：不支持。不可以独立存在，且不可以在可用区内自由挂载和卸载。
     * 以下类型块存储的`Portable`属性都为`false`，生命周期与实例等同：
     * -   本地盘。
     * -   本地SSD盘。
     * -   包年包月数据盘。
     * @example `false`
     */
    "Portable"?: boolean;
    /**
     * 磁盘是否设置了随实例释放。取值范围：
     * -   true：磁盘随实例一起释放。
     * -   false：磁盘保留不释放，转为按量付费数据盘而保留下来。
     * 默认值：false。
     * @example `false`
     */
    "DeleteWithInstance"?: boolean;
    /**
     * 释放云盘时，是否会同时释放自动快照。
     * - true：是。
     * - false：否。
     * 默认值：false。
     * @example `false`
     */
    "DeleteAutoSnapshot"?: boolean;
    /**
     * 磁盘状态列表的页码。
     * 起始值：1。
     * 默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页行数。
     * 最大值：100。
     * 默认值：10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 查询凭证（Token），取值为上一次API调用返回的`NextToken`参数值。
     * @example `AAAAAdDWBF2****`
     */
    "NextToken"?: string;
    /**
     * 返回的最大数。取值范围：10~500。
     * 默认值：
     * - 当不设置值或者设置的值小于10，默认值为10。
     * - 当设置的值大于500时，默认值为500。
     * @example `50`
     */
    "MaxResults"?: number;
    /**
     * 磁盘的名称。长度为2~128个字符，支持Unicode中letter分类下的字符（其中包括英文、中文和数字等）。可以包含半角冒号（:）、下划线（_）、半角句号（.）或者短划线（-）。
     * @example `testDiskName`
     */
    "DiskName"?: string;
    /**
     * 根据自动快照策略ID查询云盘。
     * @example `sp-m5e2w2jutw8bv31****`
     */
    "AutoSnapshotPolicyId"?: string;
    /**
     * 云盘是否启用自动快照策略功能。
     * - true：启用。
     * - false：未启用。
     * > 创建后的云盘默认启用自动快照策略功能，您只需要为云盘绑定自动快照策略即可正常使用。
     * @example `true`
     */
    "EnableAutoSnapshot"?: boolean;
    /**
     * 云盘是否设置了自动快照策略。
     * - true：已设置。
     * - false：未设置。
     * 默认值：false。
     * @example `false`
     */
    "EnableAutomatedSnapshotPolicy"?: boolean;
    /**
     * 磁盘的计费方式。取值范围：
     * - PrePaid：包年包月。
     * - PostPaid：按量付费。
     * @example `PostPaid`
     */
    "DiskChargeType"?: string;
    /**
     * 磁盘被锁定的原因。取值范围：
     * - financial：因欠费被锁定。
     * - security：因安全原因被锁定。
     * - recycling：抢占式实例的待释放锁定状态。
     * - dedicatedhostfinancial：因为专有宿主机欠费导致ECS实例被锁定。
     * @example `recycling`
     */
    "LockReason"?: string;
    /**
     * 查询资源时的筛选键，取值必须为`CreationStartTime`。同时设置`Filter.1.Key`和`Filter.1.Value`可以查询在指定时间点后创建的资源信息。
     * @example `CreationStartTime`
     */
    "Filter.1.Key"?: string;
    /**
     * 查询资源时的筛选键，取值必须为`CreationEndTime`。同时设置`Filter.2.Key`和`Filter.2.Value`可以查询在指定时间点前创建的资源信息。
     * @example `CreationEndTime`
     */
    "Filter.2.Key"?: string;
    /**
     * 查询资源时的筛选值。指定该参数时必须同时指定`Filter.1.Key`参数，格式为：`yyyy-MM-ddTHH:mmZ`，采用UTC +0时区。
     * @example `2017-12-05T22:40Z`
     */
    "Filter.1.Value"?: string;
    /**
     * 查询资源时的筛选值。指定该参数时必须同时指定`Filter.2.Key`参数，格式为：`yyyy-MM-ddTHH:mmZ`，采用UTC +0时区。
     * @example `2017-12-06T22:40Z`
     */
    "Filter.2.Value"?: string;
    /**
     * 磁盘所在的企业资源组ID。使用该参数过滤资源时，资源数量不能超过1000个。
     * >不支持默认资源组过滤。
     * @example `rg-bp67acfmxazb4p****`
     */
    "ResourceGroupId"?: string;
    /**
     * 是否是共享块存储。
     * @example `false`
     */
    "EnableShared"?: boolean;
    /**
     * 是否只筛选出加密云盘。
     * - true：是。
     * - false：否
     * 默认值：false。
     * @example `false`
     */
    "Encrypted"?: boolean;
    /**
     * 是否只预检此次请求。取值范围：
     * -   true：发送检查请求，不会查询资源状况。检查项包括AccessKey是否有效、RAM用户的授权情况和是否填写了必需参数。如果检查不通过，则返回对应错误。如果检查通过，会返回错误码`DryRunOperation`。
     * -   false：发送正常请求，通过检查后返回2XX HTTP状态码并直接查询资源状况。
     * 默认值：false。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 云盘使用的KMS密钥ID。
     * @example `0e478b7a-4262-4802-b8cb-00d3fb40****`
     */
    "KMSKeyId"?: string;
    /**
     * 是否开启了多重挂载特性。取值范围：
     * - Disabled：未开启。
     * - Enabled：已开启。
     * - LegacyShared：用于查询共享块存储。
     * <props="china">多重挂载功能正在邀测中，如需使用，请[提交工单](https://selfservice.console.aliyun.com/ticket/createIndex)。</props>
     * <props="intl">多重挂载功能正在邀测中，如需使用，请[提交工单](https://workorder-intl.console.aliyun.com/console.htm#/ticket/list)。</props>
     * <props="partner">多重挂载功能正在邀测中，如需使用，请提交工单。</props>
     * @example `Disabled`
     */
    "MultiAttach"?: string;
    /**
     * 磁盘标签列表。
     */
    "Tag"?: {
        /**
         * 磁盘的标签键。
         * >为提高代码兼容性，请尽量使用Tag.N.Key参数。
         * @example `null`
         */
        key: string;
        /**
         * 磁盘的标签键。N的取值范围：1~20。
         * 使用一个标签过滤资源，查询到该标签下的资源数量不能超过1000个；使用多个标签过滤资源，查询到同时绑定了多个标签的资源数量不能超过1000个。如果资源数量超过1000个，请使用[ListTagResources](~~110425~~)接口进行查询。
         * @example `TestKey`
         */
        Key: string;
        /**
         * 磁盘的标签值。N的取值范围：1~20。
         * @example `TestValue`
         */
        Value: string;
        /**
         * 磁盘的标签值。
         * >为提高代码兼容性，请尽量使用Tag.N.Value参数。
         * @example `null`
         */
        value: string;
    }[];
    /**
     * 其他属性值。目前仅支持传入值为IOPS，表示查询当前磁盘的IOPS上限。
     * @example `IOPS`
     */
    "AdditionalAttributes"?: string[];
}
