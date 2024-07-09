export interface CreateLindormInstanceRequest {
    /**
     * 实例的地域ID，可调用[DescribeRegions](~~426062~~)查询，使用此参数指定要创建实例的地域。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 实例的可用区ID。
     * @example `cn-shanghai-f`
     */
    "ZoneId": string;
    /**
     * 实例的名称。
     * @example `lindorm_test`
     */
    "InstanceAlias"?: string;
    /**
     * 实例的存储容量，单位为GB。
     * @example `480`
     */
    "InstanceStorage"?: string;
    /**
     * 实例的付费类型，取值：
     * - **PREPAY**：包年包月（预付费）。
     * - **POSTPAY**：按量付费（后付费）。
     * @example `POSTPAY`
     */
    "PayType": string;
    /**
     * 实例的专有网络ID。
     * @example `vpc-bp1nme44gek34slfc****`
     */
    "VPCId": string;
    /**
     * 虚拟交换机的ID。
     * @example `vsw-bp1e7clcw529l773d****`
     */
    "VSwitchId": string;
    /**
     * 实例购买的付费周期，取值：
     * - **Month**：单位为月。
     * - **Year**：单位为年。
     * > PayType取值为**PREPAY**时，本参数可用且必须传入。
     * @example `Month`
     */
    "PricingCycle"?: string;
    /**
     * 实例包年包月的时间，取值：
     * - PricingCycle为**Month**，表示按月付费，取值范围为**1**~**9**。
     * - PricingCycle为**Year**，表示按年付费，取值范围为**1**~**3**。
     * > PayType取值为**PREPAY**时，本参数可用且必须传入。
     * @example `1`
     */
    "Duration"?: string;
    /**
     * 实例的存储类型，取值：
     * - **cloud_efficiency**：标准型云存储。
     * - **cloud_ssd**：性能型云存储。
     * - **cloud_essd**：性能增强型云存储。
     * - **cloud\_essd\_pl0**：性能型云存储 pl0。
     * - **capacity\_cloud\_storage**：容量型云存储（多可用区实例不支持）。
     * - **local\_ssd\_pro**：本地SSD盘（多可用区实例不支持）。
     * - **local\_hdd\_pro**：本地HDD盘（多可用区实例不支持）。
     * @example `cloud_efficiency`
     */
    "DiskCategory": string;
    /**
     * 实例的本地盘类型节点规格。
     * 本地存储类型为local_ssd_pro时，本参数取值为：
     * - **lindorm.i2.xlarge**：表示4核32GB（独享规格）。
     * - **lindorm.i2.2xlarge**：表示8核64GB（独享规格）。
     * - **lindorm.i2.4xlarge**：表示16核128GB（独享规格）。
     * - **lindorm.i2.8xlarge**：表示32核256GB（独享规格）。
     * 本地存储类型为local_hdd_pro时，本参数取值为：
     * - **lindorm.d2c.6xlarge**：表示24核88GB（独享规格）。
     * - **lindorm.d2c.12xlarge**：表示48核176GB（独享规格）。
     * - **lindorm.d2c.24xlarge**：表示96核352GB（独享规格）。
     * - **lindorm.d2s.5xlarge**：表示20核88GB（独享规格）。
     * - **lindorm.d2s.10xlarge**：表示40核176GB（独享规格）。
     * - **lindorm.d1.2xlarge**：表示8核32GB（独享规格）。
     * - **lindorm.d1.4xlarge**：表示16核64GB（独享规格）。
     * - **lindorm.d1.6xlarge**：表示24核96GB（独享规格）。
     * @example `lindorm.i2.xlarge`
     */
    "CoreSpec"?: string;
    /**
     * 实例的宽表引擎节点数量。
     * 如果需要创建单可用区实例，取值范围为：**0**\~**90**。
     * **如果需要创建多可用区实例，该参数必填**。非本地盘存储类型的实例，取值范围为：**4**\~**400**。本地盘存储类型的实例，取值范围为：**6**\~**400**。
     * @example `2`
     */
    "LindormNum"?: number;
    /**
     * 实例的搜索引擎节点规格，取值：
     * - **lindorm.g.xlarge**：表示4核16GB（独享规格）。
     * - **lindorm.g.2xlarge**：表示8核32GB（独享规格）。
     * - **lindorm.g.4xlarge**：表示16核64GB（独享规格）。
     * - **lindorm.g.8xlarge**：表示32核128GB（独享规格）。
     * @example `lindorm.g.xlarge`
     */
    "SolrSpec"?: string;
    /**
     * 实例的搜索引擎节点数量，取值：**0**~**60**。
     * @example `2`
     */
    "SolrNum"?: number;
    /**
     * 实例的容量型云存储容量，单位为GB，不填默认不开通容量型云存储。取值范围：**800**~**1000000**。
     * @example `800`
     */
    "ColdStorage"?: number;
    /**
     * 实例的时序引擎节点规格，取值：
     * - **lindorm.g.xlarge**：表示4核16GB（独享规格）。
     * - **lindorm.g.2xlarge**：表示8核32GB（独享规格）。
     * - **lindorm.g.4xlarge**：表示16核64GB（独享规格）。
     * - **lindorm.g.8xlarge**：表示32核128GB（独享规格）。
     * - **lindorm.r.8xlarge**：表示32核256GB（独享规格）。
     * @example `lindorm.g.xlarge`
     */
    "TsdbSpec"?: string;
    /**
     * 实例的时序引擎节点数量，取值如下：
     * - 如果实例的付费类型为**PREPAY**，取值范围为：**0**~**24**。
     * - 如果实例的付费类型为**POSTPAY**，取值范围为：**0**~**32**。
     * @example `2`
     */
    "TsdbNum"?: number;
    /**
     * 实例的宽表引擎节点规格，取值：
     * - **lindorm.g.xlarge**：表示4核16GB（独享规格）。
     * - **lindorm.c.2xlarge**：表示8核16GB（独享规格）。
     * - **lindorm.g.2xlarge**：表示8核32GB（独享规格）。
     * - **lindorm.c.4xlarge**：表示16核32GB（独享规格）。
     * - **lindorm.g.4xlarge**：表示16核64GB（独享规格）。
     * - **lindorm.c.8xlarge**：表示32核64GB（独享规格）。
     * - **lindorm.g.8xlarge**：表示32核128GB（独享规格）。
     * @example `lindorm.c.xlarge`
     */
    "LindormSpec"?: string;
    /**
     * 实例的文件引擎节点数量，取值如下：
     * - 如果实例的付费类型为**PREPAY**，取值范围为：**0**~**60**。
     * - 如果实例的付费类型为**POSTPAY**，取值范围为：**0**~**8**。
     * @example `2`
     */
    "FilestoreNum"?: number;
    /**
     * 实例的文件引擎节点规格，取值：
     * - **lindorm.c.xlarge**：表示4核8GB（标准规格）。
     * @example `lindorm.c.xlarge`
     */
    "FilestoreSpec"?: string;
    /**
     * 实例的流引擎节点数量，取值：**0**~**60**。
     * @example `2`
     */
    "StreamNum"?: number;
    /**
     * 实例的流引擎节点规格，取值：
     * - **lindorm.g.xlarge**：表示4核16GB（独享规格）。
     * - **lindorm.c.2xlarge**：表示8核16GB（独享规格）。
     * - **lindorm.g.2xlarge**：表示8核32GB（独享规格）。
     * - **lindorm.c.4xlarge**：表示16核32GB（独享规格）。
     * - **lindorm.g.4xlarge**：表示16核64GB（独享规格）。
     * - **lindorm.c.8xlarge**：表示32核64GB（独享规格）。
     * - **lindorm.g.8xlarge**：表示32核128GB（独享规格）。
     * @example `lindorm.g.xlarge`
     */
    "StreamSpec"?: string;
    /**
     * 部署架构，取值：
     * - **1.0**：单可用区。
     * - **2.0**：多可用区。
     * 不填写此参数时，默认为1.0。创建多可用区实例，请填写2.0。**如果需要创建多可用区实例，该参数必填。**
     * @example `2.0`
     */
    "ArchVersion"?: string;
    /**
     * 多可用区实例，主可用区的可用区ID。**如果需要创建多可用区实例，该参数必填。**
     * @example `cn-shanghai-e`
     */
    "PrimaryZoneId"?: string;
    /**
     * 多可用区实例，备可用区的可用区ID。**如果需要创建多可用区实例，该参数必填。**
     * @example `cn-shanghai-f`
     */
    "StandbyZoneId"?: string;
    /**
     * 多可用区实例，协调可用区的可用区ID。**如果需要创建多可用区实例，该参数必填。**
     * @example `cn-shanghai-g`
     */
    "ArbiterZoneId"?: string;
    /**
     * 多可用区组合。可用区组合支持情况可前往售卖页查看。
     * - **ap-southeast-5abc-aliyun**：印度尼西亚(雅加达)A+B+C。
     * - **cn-hangzhou-ehi-aliyun**：华东1(杭州)E+H+I。
     * - **cn-beijing-acd-aliyun**：华北2(北京)A+C+D。
     * - **ap-southeast-1-abc-aliyun**：新加坡A+B+C。
     * - **cn-zhangjiakou-abc-aliyun**：华北3(张家口)A+B+C。
     * - **cn-shanghai-efg-aliyun**：华东2(上海)E+F+G。
     * - **cn-shanghai-abd-aliyun**：华东2(上海)A+B+D。
     * - **cn-hangzhou-bef-aliyun**：华东1(杭州)B+E+F。
     * - **cn-hangzhou-bce-aliyun**：华东1(杭州)B+C+E。
     * - **cn-beijing-fgh-aliyun**：华北2(北京)F+G+H。
     * - **cn-shenzhen-abc-aliyun**：华南1(深圳)A+B+C。
     * **如果需要创建多可用区实例，该参数必填。**
     * @example `cn-shanghai-efg-aliyun`
     */
    "MultiZoneCombination"?: string;
    /**
     * 多可用区实例，主可用区的虚拟交换机ID，必须在PrimaryZoneId对应的可用区下。**如果需要创建多可用区实例，该参数必填。**
     * @example `vsw-uf6fdqa7c0pipnqzq****`
     */
    "PrimaryVSwitchId"?: string;
    /**
     * 多可用区实例，备可用区的虚拟交换机ID，必须在StandbyZoneId对应的可用区下。**如果需要创建多可用区实例，该参数必填。**
     * @example `vsw-2zec0kcn08cgdtr6****`
     */
    "StandbyVSwitchId"?: string;
    /**
     * 多可用区实例，协调可用区虚拟交换机ID，交换机需位于ArbiterZoneId对应的可用区下。**如果需要创建多可用区实例，该参数必填。**
     * @example `vsw-uf6664pqjawb87k36****`
     */
    "ArbiterVSwitchId"?: string;
    /**
     * 多可用区实例，core单节点容量。取值范围400~64000，单位GB。**如果需要创建多可用区实例，该参数必填。**
     * @example `400`
     */
    "CoreSingleStorage"?: number;
    /**
     * 多可用区实例，log节点磁盘类型，返回：
     * - **cloud_efficiency**：标准云存储。
     * - **cloud_ssd**：性能云存储。
     * **如果需要创建多可用区实例，该参数必填。**
     * @example `cloud_ssd`
     */
    "LogDiskCategory"?: string;
    /**
     * 多可用区实例，log节点规格。取值如下：
     * - **lindorm.sn1.large**：表示4核8GB（独享规格）。
     * - **lindorm.sn1.2xlarge**：表示8核16GB（独享规格）。
     * **如果需要创建多可用区实例，该参数必填。**
     * @example `lindorm.sn1.large`
     */
    "LogSpec"?: string;
    /**
     * 多可用区实例，log节点数量。取值范围4~400。**如果需要创建多可用区实例，该参数必填。**
     * @example `4`
     */
    "LogNum"?: number;
    /**
     * 多可用区实例，log单节点磁盘容量。取值范围400~64000，单位GB。**如果需要创建多可用区实例，该参数必填。**
     * @example `400`
     */
    "LogSingleStorage"?: number;
    /**
     * 资源组ID。
     * @example `rg-aek2i6weeb4nfii`
     */
    "ResourceGroupId"?: string;
    /**
     * 实例是否自动续费，枚举值：
     * - **true**：自动续费。
     * - **false**：不自动续费。
     * 默认值为false
     * > 仅当**PayType**取值为**PREPAY**（包年包月）时，此参数有效。
     * @example `false`
     */
    "AutoRenewal"?: boolean;
    /**
     * 自动续费时长。单位：月。
     * 取值范围：**1**~**12**。
     * > 仅**AutoRenewal**为**true**时，该项才生效。
     * @example `1`
     */
    "AutoRenewDuration"?: string;
    "LtsSpec"?: string;
    "LtsNum"?: string;
}
