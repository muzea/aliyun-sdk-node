export interface DescribeSnapshotsRequest {
    /**
     * 指定的实例ID。
     * @example `i-bp67acfmxazb4p****`
     */
    "InstanceId"?: string;
    /**
     * 指定的云盘设备ID。
     * @example `d-bp67acfmxazb4p****`
     */
    "DiskId"?: string;
    /**
     * 快照链ID。
     * @example `sl-bp1grgphbcc9brb5****`
     */
    "SnapshotLinkId"?: string;
    /**
     * 云盘所属于的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 快照标识编码。取值可以由多个快照ID组成一个JSON数组，最多支持100个ID，ID之间用半角逗号（,）隔开。
     * @example `["s-bp67acfmxazb4p****", "s-bp67acfmxazb5p****", … "s-bp67acfmxazb6p****"]`
     */
    "SnapshotIds"?: string;
    /**
     * 快照列表的页码。起始值：1。
     * 默认值：1 。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页行数。最大值：100。
     * 默认值：10 。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 查询起始标志。由上一次的请求结果中获取。
     * @example `caeba0bbb2be03f84eb48b699f0a4883`
     */
    "NextToken"?: string;
    /**
     * 分页查询时每页行数。最大值：100。
     * 默认值：10。
     * @example `10`
     */
    "MaxResults"?: number;
    /**
     * 快照名称。
     * @example `testSnapshotName`
     */
    "SnapshotName"?: string;
    /**
     * 快照状态。取值范围：
     *
     * - progressing：正在创建的快照。
     * - accomplished：创建成功的快照。
     * - failed：创建失败的快照。
     * - all（默认）：所有快照状态。
     * @example `all`
     */
    "Status"?: string;
    /**
     * 快照创建类型。取值范围：
     *
     * - auto：自动创建快照。
     * - user：手动创建快照。
     * - all（默认）：所有的快照创建类型。
     * @example `all`
     */
    "SnapshotType"?: string;
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
     * @example `2019-12-13T17:00Z`
     */
    "Filter.1.Value"?: string;
    /**
     * 查询资源时的筛选值。指定该参数时必须同时指定`Filter.2.Key`参数，格式为：`yyyy-MM-ddTHH:mmZ`，采用UTC +0时区。
     * @example `2019-12-13T22:00Z`
     */
    "Filter.2.Value"?: string;
    /**
     * 快照是否被用作创建镜像或云盘。取值范围：
     * - image：使用快照创建了自定义镜像。
     * - disk：使用快照创建了云盘。
     * - image_disk：使用快照创建了数据盘和自定义镜像。
     * - none：暂未使用。
     * @example `none`
     */
    "Usage"?: string;
    /**
     * 快照源云盘的云盘类型。取值范围：
     *
     * - System：系统盘。
     * - Data：数据盘。
     * > 取值不区分大小写。
     * @example `Data`
     */
    "SourceDiskType"?: string;
    /**
     * 是否过滤加密快照。默认值：false 。
     * @example `false`
     */
    "Encrypted"?: boolean;
    /**
     * 资源组ID。使用该参数过滤资源时，资源数量不能超过1000个。
     * >不支持默认资源组过滤。
     * @example `rg-bp67acfmxazb4p****`
     */
    "ResourceGroupId"?: string;
    /**
     * 是否只预检此次请求。
     * - true：发送检查请求，不会查询资源状况。检查项包括AccessKey是否有效、RAM用户的授权情况和是否填写了必需参数。如果检查不通过，则返回对应错误。如果检查通过，会返回错误码DryRunOperation。
     * - false（默认）：发送正常请求，通过检查后返回2XX HTTP状态码并直接查询资源状况。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 数据盘对应的KMS密钥ID。
     * @example `0e478b7a-4262-4802-b8cb-00d3fb40****`
     */
    "KMSKeyId"?: string;
    /**
     * 快照类型。取值范围：
     * - Standard：普通快照。
     * - Flash：本地快照。
     * 原本地快照更替为快照极速可用功能。该参数说明如下：
     * - 如果您在2020年12月14日之前使用过本地快照。您可以正常使用该参数。
     * - 如果您在2020年12月14日之前未使用过本地快照。您不能使用该参数。
     * <props="china">更多信息，请参见[12月14日阿里云快照服务升级与新增计费项通知](https://help.aliyun.com/noticelist/articleid/1060755542.html)。</props>
     * > 该参数即将被弃用，为提高兼容性，建议您尽量使用其他参数。
     * @example `Standard`
     */
    "Category"?: string;
    /**
     * 标签列表。
     */
    "Tag"?: {
        /**
         * 资源的标签键。
         * >为提高兼容性，建议您尽量使用Tag.N.Key参数。
         * @example `SnapshotTest`
         */
        key: string;
        /**
         * 快照的标签键。N的取值范围：1~20。
         * 使用一个标签过滤资源，查询到该标签下的资源数量不能超过1000个；使用多个标签过滤资源，查询到同时绑定了多个标签的资源数量不能超过1000个。如果资源数量超过1000个，请使用[ListTagResources](~~110425~~)接口进行查询。
         * @example `TestKey`
         */
        Key: string;
        /**
         * 快照的标签值。N的取值范围：1~20。
         * @example `TestValue`
         */
        Value: string;
        /**
         * 资源的标签值。
         * >为提高兼容性，建议您尽量使用Tag.N.Value参数。
         * @example `SnapshotTest`
         */
        value: string;
    }[];
}
