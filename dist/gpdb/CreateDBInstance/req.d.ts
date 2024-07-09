export interface CreateDBInstanceRequest {
    /**
     * 地域ID。
     * > 您可以调用[DescribeRegions](~~86912~~)接口查看可用的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 可用区ID。
     * > 您可以调用[DescribeRegions](~~86912~~)接口查看可用的可用区ID。
     * @example `cn-hangzhou-i`
     */
    "ZoneId": string;
    /**
     * 引擎版本，取值如下：
     * - **6.0**：6.0版。
     * - **7.0**：7.0版。
     * @example `6.0`
     */
    "EngineVersion": string;
    /**
     * 数据库引擎，取值为**gpdb**。
     * @example `gpdb`
     */
    "Engine": string;
    /**
     * 实例规格，详细说明请参见DBInstanceClass参数补充说明。
     * > 创建存储预留模式实例必须传入该参数。
     * @example `gpdb.group.segsdx1`
     */
    "DBInstanceClass"?: string;
    /**
     * 计算组数量。取值为：2、4、8、12、16、24、32、64、96、128。
     * > 创建存储预留模式实例必须传入该参数。
     * @example `2`
     */
    "DBInstanceGroupCount"?: string;
    /**
     * 实例描述。
     * @example `test`
     */
    "DBInstanceDescription"?: string;
    /**
     * IP白名单。
     * 127.0.0.1表示禁止任何外部IP访问，您可以在实例创建完成后调用[ModifySecurityIps](~~86928~~)接口修改IP白名单。
     * @example `127.0.0.1`
     */
    "SecurityIPList"?: string;
    /**
     * 计费类型，取值如下：
     * - **Postpaid**：按量付费
     * - **Prepaid**：包年包月
     * > - 如果不填，则会默认为按量付费。
     * > - 包年包月计费模式下，一次性购买一年及以上时长时会有一定优惠，建议您按需选择计费类型。
     * @example `Prepaid`
     */
    "PayType"?: string;
    /**
     * 购买资源的时长单位。取值如下：
     * - **Month**：月
     * - **Year**：年
     * > 创建包年包月计费类型的实例时必须传入该参数。
     * @example `Month`
     */
    "Period"?: string;
    /**
     * 购买资源的时长。取值如下：
     * - 当**Period**为**Month**时，取值为1~9。
     * - 当**Period**为**Year**时，取值为1~3。
     * > 创建包年包月计费类型的实例时必须传入该参数。
     * @example `1`
     */
    "UsedTime"?: string;
    /**
     * 幂等性校验。更多信息，请参见[如何保证幂等性](~~327176~~)。
     * @example `0c593ea1-3bea-11e9-b96b-88**********`
     */
    "ClientToken"?: string;
    /**
     * 实例网络类型，取值为**VPC**。
     * > - 公共云仅支持VPC网络。
     * > - 如果不填，则默认为VPC类型。
     * @example `VPC`
     */
    "InstanceNetworkType"?: string;
    /**
     * VPC ID。
     * > - **VPCId**必填。
     * > - **VPC**所在地域必须与**RegionId**保持一致。
     * @example `vpc-bp19ame5m1r3oejns****`
     */
    "VPCId"?: string;
    /**
     * vSwitch ID。
     * > - **vSwitchId**必填。
     * > - **vSwitch**所在可用区必须与**ZoneId**保持一致。
     * @example `vsw-bp1cpq8mr64paltkb****`
     */
    "VSwitchId"?: string;
    /**
     * 该参数已废弃，无需传入该参数。
     * @example `null`
     */
    "PrivateIpAddress"?: string;
    /**
     * 磁盘存储类型，目前仅支持ESSD云盘，取值为：**cloud_essd**。
     * > 创建存储弹性模式实例必须传入该参数。
     * @example `cloud_essd`
     */
    "SegStorageType"?: string;
    /**
     * ESSD云盘的性能级别，取值如下：
     * - **pl0**：PL0级别。
     * - **pl1**：PL1级别。
     * - **pl2**：PL2级别。
     * > - 仅磁盘存储类型为ESSD云盘时，该参数生效。
     * > - 如果不填，则默认为PL1级别。
     * @example `pl1`
     */
    "SegDiskPerformanceLevel"?: string;
    /**
     * 计算节点规格。
     * 存储弹性模式高可用版取值如下：
     * - **2C16G**
     * - **4C32G**
     * - **16C128G**
     * 存储弹性模式基础版取值如下：
     * - **2C8G**
     * - **4C16G**：
     * - **8C32G**：
     * - **16C64G**
     * Serverless模式取值如下：
     * - **4C16G**
     * - **8C32G**
     * > 创建存储弹性模式实例和Serverless模式实例必须传入该参数。
     * @example `2C16G`
     */
    "InstanceSpec"?: string;
    /**
     * 计算节点个数，取值说明：
     * - 存储弹性模式高可用版取值范围为4~512，取值需为4的倍数。
     * - 存储弹性模式基础版取值范围为2~512，取值需为2的倍数。
     * - Serverless模式取值范围为2~512，取值需为2的倍数。
     * > 创建存储弹性模式实例和Serverless模式实例必须传入该参数。
     * @example `4`
     */
    "SegNodeNum"?: string;
    /**
     * 该参数已废弃，无需传入该参数。
     * @example `null`
     */
    "MasterNodeNum"?: string;
    /**
     * 实例资源类型，取值说明：
     * - **StorageElastic**：存储弹性模式。
     * - **Serverless**：Serverless模式。
     * - **Classic**：存储预留模式。
     * > 该参数必填。
     * @example `StorageElastic`
     */
    "DBInstanceMode": string;
    /**
     * 该参数已废弃，无需传入该参数。
     * @example `null`
     */
    "StorageType"?: string;
    /**
     * 实例系列。取值说明：
     * - **HighAvailability**：高可用版。
     * - **Basic**：基础版。
     * > 创建存储弹性模式实例必须传入该参数。
     * @example `HighAvailability`
     */
    "DBInstanceCategory"?: string;
    /**
     * 实例所在的企业资源组ID。
     * @example `rg-bp67acfmxazb4p****`
     */
    "ResourceGroupId"?: string;
    /**
     * 存储空间大小，单位GB，取值范围为<props="china">50~8000</props><props="intl">50~6000</props>
     * 。
     * > 创建存储弹性模式实例必须传入该参数。
     * @example `200`
     */
    "StorageSize"?: number;
    /**
     * 是否在实例创建完成后，加载样本数据集，取值如下：
     * - **true**：加载样本数据集。
     * - **false**：不加载样本数据集。
     * > 如果不填，则默认为不加载样本数据集。
     * @example `false`
     */
    "CreateSampleData"?: boolean;
    /**
     * 第N个标签。N的取值范围：1~20。
     */
    "Tag"?: {
        /**
         * 标签键。限制如下：
         * - 不允许为空字符串。
         * - 最多支持128个字符。
         * - 不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `TestKey`
         */
        Key: string;
        /**
         * 标签值。限制如下：
         * - 可以为空字符串。
         * - 最多支持128个字符。
         * - 不能以`acs:`开头，不能包含`http://`或者`https://`。
         * @example `TestValue`
         */
        Value: string;
    }[];
    /**
     * 计算资源阈值。取值范围8~32，步长为8，单位为ACU。默认值为32。
     * > 仅Serverless自动调度模式实例需传入该参数。
     * @example `32`
     */
    "ServerlessResource"?: number;
    /**
     * 空闲释放等待时长。即当无业务流量的时长达到指定时长后，实例转为空闲状态。单位为秒，最小值为60，默认值为600。
     * > 仅Serverless自动调度模式实例需传入该参数。
     * @example `600`
     */
    "IdleTime"?: number;
    /**
     * Serverless实例的模式，取值如下：
     * - **Manual**：手动调度，为默认值。
     * - **Auto**：自动调度。
     * > 仅Serverless模式实例需传入该参数。
     * @example `Auto`
     */
    "ServerlessMode"?: string;
    /**
     * 加密类型，取值说明：
     * - **NULL**：不启用加密（默认值）。
     * - **CloudDisk**：开通云盘加密，并通过**EncryptionKey**参数指定密钥。
     * > 当前云盘加密开启后无法关闭。
     * @example `CloudDisk`
     */
    "EncryptionType"?: string;
    /**
     * 密钥ID。
     * > 如果参数**EncryptionType**的值为**CloudDisk**则需要通过该参数指定同地域内的加密密钥ID，否则为空。
     * @example `0d2470df-da7b-4786-b981-88888888****`
     */
    "EncryptionKey"?: string;
    /**
     * 是否开启向量引擎优化。取值说明：
     * - **enabled**：开启向量引擎优化。
     * - **disabled**（默认）：不开启向量引擎优化。
     * > - 对于主流分析场景、数仓场景、实时数仓等场景，建议**不开启**向量引擎优化。
     * > - 对于使用向量分析引擎用于AIGC、向量检索等场景用户，建议**开启**向量引擎优化。
     * @example `enabled`
     */
    "VectorConfigurationStatus"?: string;
    /**
     * Master资源，取值如下：
     * - 2 CU
     * - 4 CU
     * - 8 CU
     * - 16 CU
     * - 32 CU
     * > 8CU以上的master资源会产生费用。
     * @example `8 CU`
     */
    "MasterCU"?: number;
    /**
     * 克隆源实例ID。
     * > 您可以调用[DescribeDBInstances](~~86911~~)接口查看目标地域下所有的AnalyticDB PostgreSQL实例的详情，包括实例ID。
     * @example `gp-bp***************`
     */
    "SrcDbInstanceName"?: string;
    /**
     * 备份集ID。
     * > 您可以调用[DescribeDataBackups](~~210093~~)查看目标实例下所有备份集的备份集ID。
     * @example `1111111111`
     */
    "BackupId"?: string;
    "EnableSSL"?: boolean;
    "ProdType"?: string;
}
