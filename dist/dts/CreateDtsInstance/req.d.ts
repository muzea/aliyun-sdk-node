export interface CreateDtsInstanceRequest {
    /**
     * 调用**ConfigureDtsJob**接口获得的任务ID（**DtsJobId**）。
     * >传入本参数后，则无需再传**SourceRegion**、**DestinationRegion**、**Type**、**SourceEndpointEngineName**、**DestinationEndpointEngineName**参数。即使传入也以**JobId**中的配置为准。
     * @example `bi6e22ay243****`
     */
    "JobId"?: string;
    /**
     * 迁移或同步实例的规格。
     * - 迁移实例支持的规格：**xxlarge**、**xlarge**、**large**、**medium**、**small**。
     * - 同步实例支持的规格：**large**、**medium**、**small**、**micro**。
     * > 不同规格对应的性能说明，请参见[数据迁移链路规格说明](~~26606~~)和[数据同步链路规格说明](~~26605~~)。
     * @example `xxlarge`
     */
    "InstanceClass"?: string;
    /**
     * 支付类型：
     * - **PrePaid**：预付费。
     * - **PostPaid**：后付费。
     * > 更正：本参数为必填参数。
     * @example `PrePaid`
     */
    "PayType"?: string;
    /**
     * 预付费实例的计费方式，取值：**Year**（年）**Month**（月）。
     * > 当**PayType**为**PrePaid**（预付费）时，该参数才有效且必须传入。
     * @example `Month`
     */
    "Period"?: string;
    /**
     * 同步拓扑，取值：
     * - **oneway**：单向同步，为默认值。
     * - **bidirectional**：双向同步。
     * @example `oneway`
     */
    "SyncArchitecture"?: string;
    /**
     * 购买完成后是否自动启动任务，取值：
     * - **false**：否，为默认值。
     * - **true**：是。
     * @example `false`
     */
    "AutoStart"?: boolean;
    /**
     * 预付费实例购买时长。
     * - 当**Period**为**Month**时，取值为：1、2、3、4、5、6、7、8、9。
     * - 当**Period**为**Year**时，取值为：1、2、3、5。
     * > - 当**PayType**为**PrePaid**（预付费）时，该参数才有效且必须传入。
     * - 预付费实例的计费方式，您可在参数**Period**中进行设置。
     * @example `5`
     */
    "UsedTime"?: number;
    /**
     * 购买实例数量。
     * >当前单次调用最多支持购买1个。
     * @example `1`
     */
    "Quantity"?: number;
    /**
     * 到期是否自动续费，取值：
     * - **false**：否，为默认值。
     * - **true**：是。
     * @example `false`
     */
    "AutoPay"?: boolean;
    /**
     * 实例类型，取值为：
     * - **MIGRATION**：迁移。
     * - **SYNC**：同步。
     * - **SUBSCRIBE**：订阅。
     * >本参数或**JobId**必须传入其中之一。
     * @example `SYNC`
     */
    "Type"?: string;
    /**
     * PolarDB-X下的私有定制RDS实例的数量，默认值为**1**。
     * >仅**SourceEndpointEngineName**为**drds**时需要传入该参数。
     * @example `3`
     */
    "DatabaseCount"?: number;
    /**
     * 源实例区域，详情请参见[支持的地域列表](~~141033~~)。
     * >本参数或**JobId**必须传入其中之一。
     * @example `cn-hangzhou`
     */
    "SourceRegion"?: string;
    /**
     * 目标实例区域，详情请参见[支持的地域列表](~~141033~~)。
     * >本参数或**JobId**必须传入其中之一。
     * @example `cn-hangzhou`
     */
    "DestinationRegion"?: string;
    /**
     * 源实例数据库引擎类型。
     * - **MySQL**：MySQL数据库（包括RDS MySQL和自建MySQL）。
     * - **PolarDB**：PolarDB MySQL。
     * - **polardb_o**：PolarDB O引擎。
     * - **polardb_pg**：PolarDB PostgreSQL。
     * - **Redis**：Redis数据库（包括云数据库Redis和自建Redis）。
     * - **DRDS**：云原生分布式数据库PolarDB-X 1.0和2.0。
     * - **PostgreSQL**：自建PostgreSQL。
     * - **odps**：MaxCompute。
     * - **oracle**：自建Oracle。
     * - **mongodb**：MongoDB数据库（包括云数据库MongoDB和自建MongoDB）。
     * - **tidb**：TiDB数据库。
     * - **ADS**：云原生数仓 AnalyticDB MySQL 2.0。
     * - **ADB30**：云原生数仓 AnalyticDB MySQL 3.0。
     * - **Greenplum**：云原生数仓 AnalyticDB PostgreSQL。
     * - **MSSQL**：SQL Server数据库（包括RDS SQL Server和自建SQL Server）。
     * - **kafka**：Kafka数据库（包括消息队列Kafka版和自建Kafka）。
     * - **DataHub**：阿里云流式数据服务DataHub。
     * - **DB2**：自建DB2 LUW。
     * - **as400**：AS/400。
     * - **Tablestore**：表格存储Tablestore。
     * - **OceanBase**：OceanBase（MySQL），仅迁移实例支持。
     * > - 默认取值为**MySQL**。
     * - 关于支持的源库和目标库对应情况，请参见支持的[数据库、同步初始化类型和同步拓扑](~~130744~~), [支持的数据库和迁移类型](~~26618~~)。
     * - 本参数或**JobId**必须传入其中之一。
     * @example `MySQL`
     */
    "SourceEndpointEngineName"?: string;
    /**
     * 目标数据库引擎类型。
     * - **MySQL**：MySQL数据库（包括RDS MySQL和自建MySQL）。
     * - **PolarDB**：PolarDB MySQL。
     * - **polardb_o**：PolarDB O引擎。
     * - **polardb_pg**：PolarDB PostgreSQL。
     * - **Redis**：Redis数据库（包括云数据库Redis和自建Redis）。
     * - **DRDS**：云原生分布式数据库PolarDB-X 1.0和2.0。
     * - **PostgreSQL**：自建PostgreSQL。
     * - **odps**：MaxCompute。
     * - **oracle**：自建Oracle。
     * - **mongodb**：MongoDB数据库（包括云数据库MongoDB和自建MongoDB）。
     * - **tidb**：TiDB数据库。
     * - **ADS**：云原生数仓 AnalyticDB MySQL 2.0。
     * - **ADB30**：云原生数仓 AnalyticDB MySQL 3.0。
     * - **Greenplum**：云原生数仓 AnalyticDB PostgreSQL。
     * - **MSSQL**：SQL Server数据库（包括RDS SQL Server和自建SQL Server）。
     * - **kafka**：Kafka数据库（包括消息队列Kafka版和自建Kafka）。
     * - **DataHub**：阿里云流式数据服务DataHub。
     * - **DB2**：自建DB2 LUW。
     * - **as400**：AS/400。
     * - **Tablestore**：表格存储Tablestore。
     * > - 默认取值为**MySQL**。
     * - 关于支持的源库和目标库对应情况，请参见支持的[数据库、同步初始化类型和同步拓扑](~~130744~~), [支持的数据库和迁移类型](~~26618~~)。
     * - 本参数或**JobId**必须传入其中之一。
     * @example `MySQL`
     */
    "DestinationEndpointEngineName"?: string;
    /**
     * ETL的规格。单位为计算单元ComputeUnit（CU），1CU=1vCPU​+4 GB内存。取值范围为大于等于2的整数。
     * <props="china">
     * > 传入该参数，开通[ETL功能](~~212324~~)，进行数据清洗和转换。</props>
     * @example `5`
     */
    "ComputeUnit"?: number;
    /**
     * 实例所属的地域，请参见[支持的地域列表](~~141033~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 订阅计费类型，ONLY_CONFIGURATION_FEE，仅收取配置费，免收数据流量费；CONFIGURATION_FEE_AND_DATA_FEE，将额外收取数据流量费用。
     * @example `ONLY_CONFIGURATION_FEE`
     */
    "FeeType"?: string;
    /**
     * 分配指定数量的DU资源给DTS专属集群上的DTS任务。取值范围：**1**~**100**。
     * >- 传入的值必须在DTS专属集群可用DU数范围内。
     * - 关于DTS专属集群的信息，请参见[什么是DTS专属集群](~~417481~~)。
     * @example `30`
     */
    "Du"?: number;
    /**
     * 资源组ID。
     * @example `rg-acfmzawhxxc****`
     */
    "ResourceGroupId"?: string;
    /**
     * DU下限。
     * > 仅Serverless实例支持。
     * @example `1`
     */
    "MinDu"?: number;
    /**
     * DU上限。
     * > 仅Serverless实例支持。
     * @example `16`
     */
    "MaxDu"?: number;
}
