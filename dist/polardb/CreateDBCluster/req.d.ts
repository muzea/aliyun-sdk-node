export interface CreateDBClusterRequest {
    /**
     * 地域ID。
     * > 您可以通过[DescribeRegions](~~98041~~)接口查看可用地域。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 可用区ID。
     * > 您可以通过[DescribeRegions](~~98041~~)接口查看可选的可用区。
     * @example `cn-hangzhou-j`
     */
    "ZoneId"?: string;
    /**
     * CPU 架构。取值范围如下：
     * - X86
     * - ARM
     * @example `X86`
     */
    "Architecture"?: string;
    /**
     * 数据库引擎类型，取值范围如下：
     * - **MySQL**
     * - **PostgreSQL**
     * - **Oracle**
     * @example `MySQL`
     */
    "DBType": string;
    /**
     * 数据库引擎版本号。
     * * MySQL版本号取值范围如下：
     *     * **5.6**
     *     * **5.7**
     *     * **8.0**
     * * PostgreSQL版本号取值范围如下：
     *     * **11**
     *     * **14**
     * * Oracle版本号取值范围如下：
     *     * **11**
     *     * **14**
     * @example `5.6`
     */
    "DBVersion": string;
    /**
     * 节点规格，详情请参见如下文档：
     * - PolarDB MySQL版：[计算节点规格](~~102542~~)。
     * - PolarDB PostgreSQL版（兼容Oracle）：[计算节点规格](~~207921~~)。
     * - PolarDB PostgreSQL版：[计算节点规格](~~209380~~)。
     * > 如需创建Serverless集群，请传入**polar.mysql.sl.small**。
     *
     * @example `polar.mysql.x4.medium`
     */
    "DBNodeClass": string;
    /**
     * 集群网络类型，当前仅支持专有网络，取值固定为**VPC**。
     * @example `VPC`
     */
    "ClusterNetworkType"?: string;
    /**
     * 集群名称，集群名称需满足如下要求：
     * * 不能以`http://`或`https://`开头。
     * * 长度为2~256个字符。
     * @example `test`
     */
    "DBClusterDescription"?: string;
    /**
     * 付费类型，取值范围如下：
     * - **Postpaid**：按量付费
     * - **Prepaid**：预付费（包年包月）
     * @example `Postpaid`
     */
    "PayType": string;
    /**
     * 是否自动续费，取值范围如下：
     * - **true**：自动续费。
     * - **false**：不自动续费。
     * 默认为**false**。
     * > 当参数**PayType**取值为**Prepaid**时，该参数才生效。
     * @example `true`
     */
    "AutoRenew"?: boolean;
    /**
     * 若付费类型为**Prepaid**时，该参数为必传参数。指定预付费集群为包年或包月类型。
     * - **Year**：包年。即选择包年包月时，单位为年。
     * - **Month**：包月。即选择包年包月时，单位为月。
     * @example `Month`
     */
    "Period"?: string;
    /**
     * 若付费类型为**Prepaid**时，该参数为必传参数。
     * - 当**Period**为**Month**时，**UsedTime**取值为整数类型，取值范围为`[1-9]`。
     * - 当**Period**为**Year**时，**UsedTime**取值为整数类型，取值范围为`[1-3]`。
     * @example `1`
     */
    "UsedTime"?: string;
    /**
     * 专有网络ID。
     * @example `vpc-**********`
     */
    "VPCId"?: string;
    /**
     * 虚拟交换机ID。
     * > 如果已选择VPCId，则VSwitchId必选。
     * @example `vsw-**********`
     */
    "VSwitchId"?: string;
    /**
     * 创建方式，取值范围如下：
     * * **Normal**：创建一个全新的PolarDB集群，控制台操作请参见如下文档：
     *     * [创建PolarDB MySQL版数据库集群](~~58769~~)
     *     * [创建PolarDB PostgreSQL版数据库集群](~~118063~~)
     *     * [创建PolarDB PostgreSQL版（兼容Oracle）数据库集群](~~118182~~)
     * * **CloneFromPolarDB**：从现有PolarDB集群克隆数据到新的PolarDB集群，控制台操作请参见如下文档：
     *     * [PolarDB MySQL版克隆集群](~~87966~~)
     *     * [PolarDB PostgreSQL版克隆集群](~~118108~~)
     *     * [PolarDB PostgreSQL版（兼容Oracle）克隆集群](~~118221~~)
     * * **RecoverFromRecyclebin**：从已释放的PolarDB集群恢复数据到新的PolarDB集群，控制台操作请参见如下文档：
     *     * [PolarDB MySQL版恢复已释放的集群](~~164880~~)
     *     * [PolarDB PostgreSQL版恢复已释放的集群](~~432844~~)
     *     * [PolarDB PostgreSQL版（兼容Oracle）恢复已释放的集群](~~424632~~)
     * * **CloneFromRDS**：从现有RDS实例克隆数据到新的PolarDB集群，控制台操作请参见[一键克隆RDS MySQL到PolarDB MySQL版](~~121812~~)；
     * * **MigrationFromRDS**：从现有RDS实例迁移数据到新的PolarDB集群。创建的PolarDB集群是只读模式，且默认开启Binlog。控制台操作请参见[一键升级RDS MySQL到PolarDB MySQL版](~~121582~~)。
     * * **CreateGdnStandby**：创建一个从集群，控制台操作请参见[添加从集群](~~160381~~)。
     * * **UpgradeFromPolarDB**：从PolarDB升级迁移，控制台操作请参见[大版本升级](~~459712~~)。
     * 默认为**Normal**。
     * > 当**DBType**为**MySQL**且**DBVersion**为**8.0**时，本参数取值可以为**CreateGdnStandby**。
     * @example `Normal`
     */
    "CreationOption"?: string;
    /**
     * 源RDS实例ID或源PolarDB集群ID。仅当**CreationOption**为**MigrationFromRDS**、**CloneFromRDS**、**CloneFromPolarDB**或**RecoverFromRecyclebin**时，该参数必填。
     * * 若**CreationOption**为**MigrationFromRDS**或**CloneFromRDS**，您需要为本参数传入源RDS实例ID。源RDS实例版本需为RDS MySQL 5.6 、5.7或8.0高可用版。
     * * 若**CreationOption**为**CloneFromPolarDB**，您需要为本参数传入源PolarDB集群ID。克隆集群和源集群的DBType默认保持一致。例如源集群为MySQL 8.0，则克隆集群也需设置**DBType**为**MySQL**且**DBVersion**为**8.0**。
     * * 若**CreationOption**为**RecoverFromRecyclebin**，您需要为本参数传入已释放的源PolarDB集群ID。从回收站恢复的集群和源集群的DBType需保持一致。例如源集群为MySQL 8.0，则从回收站恢复的集群也需设置**DBType**为**MySQL**且**DBVersion**为**8.0**。
     * @example `rm-*************`
     */
    "SourceResourceId"?: string;
    /**
     * 克隆数据的时间节点，取值：
     * -  **LATEST**：最新时间点的数据。
     * - **BackupID**：历史备份集ID，请传入具体的备份集ID。
     * - **Timestamp**：历史时间点，请传入具体的时间，格式：`YYYY-MM-DDThh:mm:ssZ`（UTC时间）。
     *  默认为**LATEST**。
     * > 若**CreationOption**为**CloneFromRDS**，则本参数取值只能为**LATEST**。
     * @example `LATEST`
     */
    "CloneDataPoint"?: string;
    /**
     * 用于保证请求的幂等性。由客户端生成该参数值，保证在不同请求间唯一，大小写敏感、不超过64个ASCII 字符。
     * @example `6000170000591aed949d0f5********************`
     */
    "ClientToken"?: string;
    /**
     * 资源组ID。
     * @example `rg-************`
     */
    "ResourceGroupId"?: string;
    /**
     * PolarDB集群白名单IP地址。
     * >支持配置多个白名单IP地址，多个IP地址之间使用英文逗号分隔。
     * @example `10.***.***.***`
     */
    "SecurityIPList"?: string;
    /**
     * 开启TDE加密。取值范围如下：
     * - **true**：开启。
     * - **false**：关闭（默认值）。
     * > * 仅当**DBType**为**PostgreSQL**或**Oracle**时，本参数生效。
     * > * 您可以调用[ModifyDBClusterTDE](~~167982~~)接口为PolarDB MySQL集群开启TDE加密。
     * > * TDE功能开启后不可关闭。
     * @example `true`
     */
    "TDEStatus"?: boolean;
    /**
     * 全球数据库网络ID。
     * > 当**CreationOption**为**CreateGdnStandby**时，本参数必填。
     * @example ` gdn-***********`
     */
    "GDNId"?: string;
    /**
     * 产品系列，取值范围如下：
     * * **Normal**：集群版（默认值）
     * * **Basic**：单节点
     * * **ArchiveNormal**：高压缩引擎（X-Engine）
     * * **NormalMultimaster**：多主架构集群版
     * * **SENormal**：标准版
     * > * 仅当**DBType**为**MySQL**，且**DBVersion**为**5.6**、**5.7**或**8.0**时，支持设置产品系列为**Basic**。
     * > * 仅当**DBType**为**MySQL**，且**DBVersion**为**8.0**时，支持设置产品系列为**ArchiveNormal**和**NormalMultimaster**。
     * > * 仅当**DBType**为**MySQL**，且**DBMinorVersion**为**8.0.1**时，支持设置产品系列**SENormal**。
     * 更多关产品系列的介绍，请参见于[产品系列](~~183258~~)。
     * @example `Normal`
     */
    "CreationCategory"?: string;
    /**
     * 集群时区（UTC），可选取值范围为**-12:00~+13:00**内的所有整点时间，如**00:00**。默认取值为**SYSTEM**，默认时区与Region所在时区一致。
     * >仅当**DBType**为**MySQL**时，该参数生效。
     * @example `SYSTEM`
     */
    "DefaultTimeZone"?: string;
    /**
     * 表名是否区分大小写，取值范围如下：
     * * **1**：不区分大小写
     * * **0**：区分大小写
     * 默认取值为**1**。
     * >仅当**DBType**为**MySQL**时，该参数生效。
     * @example `1`
     */
    "LowerCaseTableNames"?: string;
    /**
     * 删除集群时备份集保留策略，取值范围如下：
     * * **ALL**：长期保留全部备份。
     * * **LATEST**：长期保留最后一个备份（删除前自动备份）。
     * * **NONE**：集群删除时不保留备份集。
     * 创建集群时，默认取值为**NONE**，即集群删除时不保留备份集。
     * >* 仅当**DBType**为**MySQL**时，该参数生效。
     * >*  Serverless集群不支持该参数。
     * @example `NONE`
     */
    "BackupRetentionPolicyOnClusterDeletion"?: string;
    /**
     * 按空间计费（包年包月）的存储空间。单位：GB。
     * > PolarDB MySQL标准版存储空间的取值范围：20~32000。
     * @example `50`
     */
    "StorageSpace"?: number;
    /**
     * 数据库引擎小版本号。取值范围如下：
     * - **8.0.2**
     * - **8.0.1**
     * > 当参数**DBType**为**MySQL**且**DBVersion**为**8.0**时，该参数才生效。
     * @example `8.0.1`
     */
    "DBMinorVersion"?: string;
    /**
     * 参数模板ID。
     * > 您可以通过[DescribeParameterGroups](~~207178~~)接口查看目标地域的参数模板列表，包括参数模板ID。
     * @example `pcpg-**************`
     */
    "ParameterGroupId"?: string;
    /**
     * 标签列表。
     */
    "Tag"?: {
        /**
         * 标签键。若您需要为目标集群一次性添加多个标签，请单击**添加**增加标签键。
         * > 每次最多添加20对标签，`Tag.N.Key`对应的值为`Tag.N.Value`。
         * @example `type`
         */
        Key: string;
        /**
         * 标签值。若您需要为目标集群一次性添加多个标签，请单击**添加**增加标签值。
         * > 每次最多添加20对标签，`Tag.N.Value`对应的值为`Tag.N.Key`。
         * @example `test`
         */
        Value: string;
    }[];
    /**
     * Serverless类型。当前取值固定为**AgileServerless**（敏态）。
     * > 仅Serverless集群支持该参数。
     * @example `AgileServerless`
     */
    "ServerlessType"?: string;
    /**
     * 单节点伸缩下限。取值范围：1 PCU~31 PCU。
     * > 仅Serverless集群支持该参数。
     * @example `1`
     */
    "ScaleMin"?: string;
    /**
     * 单节点伸缩上限。取值范围：1 PCU~32 PCU。
     * > 仅Serverless集群支持该参数。
     * @example `3`
     */
    "ScaleMax"?: string;
    /**
     * 是否开启无活动暂停。取值：
     * - **true**：开启
     * - **false**：关闭（默认）
     * > 仅Serverless集群支持该参数。
     * @example `true`
     */
    "AllowShutDown"?: string;
    /**
     * 只读节点个数伸缩下限。取值范围：0~15。
     * > 仅Serverless集群支持该参数。
     * @example `2`
     */
    "ScaleRoNumMin"?: string;
    /**
     * 只读节点个数伸缩上限。取值范围：0~15。
     * > 仅Serverless集群支持该参数。
     * @example `4`
     */
    "ScaleRoNumMax"?: string;
    /**
     * 企业版存储类型取值如下：
     * - **PSL5**
     * - **PSL4**
     * 标准版存储类型取值如下：
     * - **ESSDPL0**
     * - **ESSDPL1**
     * - **ESSDPL2**
     * - **ESSDPL3**
     * - **ESSDAUTOPL**
     * > Serverless集群不支持该参数。
     * @example `PSL4`
     */
    "StorageType"?: string;
    /**
     * 标准版节点个数。取值如下：
     * - **1**（默认）：表示只有1个读写节点。
     * - **2**：表示有1个只读节点和1个读写节点。
     * > - 企业版默认有2个节点，标准版默认有1个节点。
     * > - 仅PolarDB MySQL版支持该参数。
     * @example `1`
     */
    "DBNodeNum"?: number;
    /**
     * 是否开启热备集群。取值范围如下：
     * - **ON**（默认）：开启热备集群。
     * - **OFF**：关闭热备集群。
     * - **STANDBY**：标准版开启热备集群。
     * >标准版集群的默认值为**STANDBY**。
     * @example `ON`
     */
    "HotStandbyCluster"?: string;
    /**
     * 集群是否开启了多可用区数据强一致。取值范围如下：
     * - **ON**：表示开启了多可用区数据强一致，适用于标准版3AZ场景。
     * - **OFF**：表示未开启多可用区数据强一致。
     * @example `ON`
     */
    "StrictConsistency"?: string;
    /**
     * 存储热备集群的可用区。适用于标准版3AZ场景。
     * > 开启了多可用区数据强一致，该参数才生效。
     * @example `cn-hangzhou-g`
     */
    "StandbyAZ"?: string;
    /**
     * 数据库代理类型，取值范围如下：
     * - **EXCLUSIVE**：企业独享版
     * - **GENERAL**：企业通用版
     * >代理类型需要与集群的节点规格对应的类型保持一致。即：
     * >- 节点规格为通用规格，则代理类型应为企业通用版；
     * >- 节点规格为独享规格，则代理类型应为企业独享版。
     * @example `Exclusive`
     */
    "ProxyType"?: string;
    /**
     * 标准版数据库代理规格。取值如下：
     * - **polar.maxscale.g2.medium.c**：2核。
     * - **polar.maxscale.g2.large.c**：4核。
     * - **polar.maxscale.g2.xlarge.c**：8核。
     * - **polar.maxscale.g2.2xlarge.c**：16核。
     * - **polar.maxscale.g2.3xlarge.c**：24核。
     * - **polar.maxscale.g2.4xlarge.c**：32核。
     * - **polar.maxscale.g2.8xlarge.c**：64核。
     * @example `polar.maxscale.g2.medium.c`
     */
    "ProxyClass"?: string;
    /**
     * 开启Binlog功能，取值范围如下：
     * - **ON**：集群开启Binlog功能。
     * - **OFF**：集群关闭Binlog功能。
     * > 当参数**DBType**为**MySQL**时，该参数才生效。
     * @example `ON`
     */
    "LoosePolarLogBin"?: string;
    /**
     * 开启X-Engine存储引擎功能，取值范围如下：
     * - **ON**：集群开启X-Engine引擎。
     * - **OFF**：集群关闭X-Engine引擎。
     * > 当参数**CreationOption**不等于**CreateGdnStandby**，**DBType**为**MySQL**且**DBVersion**为**8.0**时，该参数才生效。开启X-Engine引擎的节点内存规格必须大于等于8 GB。
     * @example `ON`
     */
    "LooseXEngine"?: string;
    /**
     * 设置开启X-Engine存储引擎比例，取值范围10~90的整数。
     * > 当参数**LooseXEngine**为**ON**时，该参数才生效。
     * @example `50`
     */
    "LooseXEngineUseMemoryPct"?: string;
    /**
     * 存储计费类型。取值范围如下：
     * - Postpaid：按容量计费（按量付费）。
     * - Prepaid：按空间计费（包年包月）。
     * @example `Prepaid`
     */
    "StoragePayType"?: string;
    /**
     * 标准版集群是否开启存储自动扩容。取值范围如下：
     * - Enable：开启存储自动扩容。
     * - Disable：关闭存储自动扩容。
     * @example `Enable`
     */
    "StorageAutoScale"?: string;
    /**
     * 设置标准版集群存储自动扩容上限，单位：GB。
     * > 取值最大为32000。
     * @example `800`
     */
    "StorageUpperBound"?: number;
    /**
     * <p id="p_wyg_t4a_glm" props="china" icmsditafragmentmagic=1>ESSD AutoPL云盘预配置的读写IOPS。可能值：0~min{50,000, 1000*容量-基准性能}。</p>
     * <p id="p_6de_jxy_k2g" props="china" icmsditafragmentmagic=1>基准性能=min{1,800+50*容量, 50000}。</p>
     * <note id="note_7kj_j0o_rgs" props="china" icmsditafragmentmagic=1>当StorageType为ESSDAUTOPL时才支持该参数。</note>
     * @example `1000`
     */
    "ProvisionedIops"?: number;
}
