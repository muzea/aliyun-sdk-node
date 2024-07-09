export interface CreateDBClusterRequest {
    /**
     * 地域ID。
     * >您可以调用[DescribeRegions](~~143074~~)接口查看地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 可用区ID。
     * >您可以调用[DescribeRegions](~~143074~~)接口查看可用区ID。
     * @example `cn-hangzhou-h`
     */
    "ZoneId"?: string;
    /**
     * AnalyticDB MySQL数仓版集群版本。取值：**3.0**。
     * @example `3.0`
     */
    "DBClusterVersion": string;
    /**
     * 系列。取值说明：
     * - **Cluster**：预留模式集群版。
     * <props="china">
     * > 仅中国内地地域和新加坡地域支持购买预留模式集群版。其中，新加坡地域仅支持在按量付费模式下购买预留模式集群版。</props>
     * - **MixedStorage**：弹性模式集群版（新版）。
     * > 当DBClusterCategory为Cluster时，Mode参数必须填写Reserver；当DBClusterCategory为MixedStorage时，Mode参数必须填写Flexible，否则会导致创建集群失败。
     * @example `Cluster`
     */
    "DBClusterCategory": string;
    /**
     * 集群规格，取值：
     * - **C8**
     * - **C32**
     * >Mode取值为Reserver（即预留模式）时，本参数必填。
     * @example `C8`
     */
    "DBClusterClass"?: string;
    /**
     * 节点组数量，取值范围为：1~200（整数）。
     * >Mode取值为Reserver（即预留模式）时，本参数必填。
     * @example `2`
     */
    "DBNodeGroupCount"?: string;
    /**
     * 节点存储空间，单位：GB。取值说明：
     * - 规格为C8时，取值范围为：100~1000。
     * - 规格为C32时，取值范围为：100~8000。
     * > - Mode取值为Reserver（即预留模式）时，本参数必填。
     * > - 1000 GB以下步长为100 GB，1000 GB以上步长为1000 GB。
     * @example `200`
     */
    "DBNodeStorage"?: string;
    /**
     * 网络类型：**VPC**。
     * @example `VPC`
     */
    "DBClusterNetworkType": string;
    /**
     * 集群描述。
     * - 不能以`http://`或者`https`开头。
     * - 长度为2~256个字符。
     * @example `test`
     */
    "DBClusterDescription"?: string;
    /**
     * 付费类型。取值说明：
     * - **Postpaid**：按量付费。
     * - **Prepaid**：预付费（包年包月）。
     * @example `Postpaid`
     */
    "PayType": string;
    /**
     * 指定预付费集群为包年或包月类型。取值说明：
     * - **Year**：包年类型。
     * - **Month**：包月类型。
     * >PayType为Prepaid（即预付费（包年包月））时，本参数为必填参数。
     * @example `Year`
     */
    "Period"?: string;
    /**
     * 预付费集群的购买时长。取值说明：
     * - 当Period为Year时，UsedTime取值范围为：1、2、3、5（整数）。
     * - 当Period为Month时，UsedTime取值范围为：1~11（整数）。
     * > - PayType为Prepaid（即预付费（包年包月））时，本参数为必填参数。
     * > - 购买的时间越长价格越优惠，购买1年的实际价格会比购买10个月或11个月更划算。
     * @example `1`
     */
    "UsedTime"?: string;
    /**
     * 专有网络ID。
     * @example `vpc-bp1at5ze0t5u3xtqn****`
     */
    "VPCId"?: string;
    /**
     * 虚拟交换机ID。
     * @example `vsw-bp1aadw9k19x6cis9****`
     */
    "VSwitchId"?: string;
    /**
     * 用于保证请求的幂等性。由客户端生成该参数值，保证在不同请求间唯一。大小写敏感、不超过64个ASCII 字符。
     * @example `123e4567-e89b-12d3-a456-t7241****`
     */
    "ClientToken"?: string;
    /**
     * 预留参数，不涉及。
     * @example `无`
     */
    "ExecutorCount"?: string;
    /**
     * 资源组ID。
     * @example `rg-4690g37929****`
     */
    "ResourceGroupId"?: string;
    /**
     * 标签信息列表。
     */
    "Tag"?: {
        /**
         * 标签键，可以根据标签过滤集群列表。最多20对标签，各个标签对的数字n必须不同，且必须是从1开始的连续整数。`Tag.N.Key`对应的值为`Tag.N.Value`。
         * > 最多支持64个字符，不能以`aliyun`、`acs:`、`http://`或者`https://`开头。
         * @example `tag1`
         */
        Key: string;
        /**
         * 标签值，可以根据标签过滤集群列表。最多20对标签，各个标签对的数字n必须不同，且必须是从1开始的连续整数。`Tag.N.Key`对应的值为`Tag.N.Value`。
         * > 最多支持64个字符，不能以`aliyun`、`acs:`、`http://`或者`https://`开头。
         * @example `test1`
         */
        Value: string;
    }[];
    /**
     * 模式。取值说明：
     * - **Reserver**：预留模式。
     * - **Flexible**：弹性模式。
     * @example `Reserver`
     */
    "Mode"?: string;
    /**
     * 预留参数，不涉及。
     * @example `无`
     */
    "StorageResource"?: string;
    /**
     * 预留参数，不涉及。
     * @example `无`
     */
    "StorageType"?: string;
    /**
     * 计算资源用于数据计算，增加计算资源可以提高数据查询速度。计算资源分为集群版和单机版，其中：
     * - 集群版为16核64 GB（集群版）、24核96 GB（集群版）和32核及以上规格。集群版支持资源池隔离，分时弹性功能和数据冷热分层。
     * - 单机版为8核32 GB和16核64 GB（单机版）。单机版不提供SLA承诺，故障恢复耗时长（大约为4~8小时），不建议用于生产环境。
     * > - 您可以调用[DescribeAvailableResource](~~190632~~)接口查询指定地域中可用的计算资源。
     * > - Mode取值为**Flexible**（即弹性模式）时，本参数必填。
     * @example `32Core128GBNEW`
     */
    "ComputeResource"?: string;
    /**
     * 预留参数，不涉及。
     * @example `无`
     */
    "RestoreType"?: string;
    /**
     * 预留参数，不涉及。
     * @example `无`
     */
    "SourceDBInstanceName"?: string;
    /**
     * 预留参数，不涉及。
     * @example `无`
     */
    "BackupSetID"?: string;
    /**
     * 预留参数，不涉及。
     * @example `无`
     */
    "RestoreTime"?: string;
    /**
     * 弹性IO资源（Elastic IO Unit，简称EIU），更多详情，请参见[EIU详解](~~189505~~)。
     * @example `0`
     */
    "ElasticIOResource"?: string;
    /**
     * 是否开启云盘加密。取值：
     * - true：是。
     * - false：否。
     * @example `true`
     */
    "DiskEncryption"?: boolean;
    /**
     * 用于云盘加密的kmsId，仅当DiskEncryption为true时有效。
     * @example `xxxxxxxx-xxxx-xxxx-xxxx-xxxx`
     */
    "KmsId"?: string;
}
