export interface CreateDBInstanceRequest {
    /**
     * 地域ID。可调用DescribeRegions获取。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 数据库类型，取值：
     * * **MySQL**
     * * **SQLServer**
     * * **PostgreSQL**
     * * **MariaDB**
     * @example `MySQL`
     */
    "Engine": string;
    /**
     * 数据库版本，取值：
     * * 常规实例
     *     * MySQL：**5.5**、**5.6**、**5.7**、**8.0**
     *     * SQL Server：**08r2_ent_ha**（云盘版，已停售）、**2008r2**（本地盘，已停售）、**2012**（企业版单机）、**2012_ent_ha**、**2012_std_ha**、**2012_web**、**2014_ent_ha**、**2014_std_ha**、**2016_ent_ha**、**2016_std_ha**、**2016_web**、**2017_ent**、**2017_std_ha**、**2017_web**、**2019_ent**、**2019_std_ha**、**2019_web**、**2022_ent**、**2022_std_ha**、**2022_web**
     *     * PostgreSQL：**10.0**、**11.0**、**12.0**、**13.0**、**14.0**、**15.0**、**16.0**
     *     * MariaDB：**10.3**
     * * Serverless实例
     *     * MySQL：**5.7**、**8.0**
     *     * SQL Server：**2016\_std\_sl**、**2017\_std\_sl**、**2019\_std\_sl**
     *     * PostgreSQL：**14.0**、**15.0**、**16.0**
     * > - MariaDB不支持创建Serverless实例。
     * > - SQL Server实例中`_ent`表示企业集群版、`_ent_ha`表示企业版、`_std_ha`表示标准版、`_web`表示Web版。
     * > - SQL Server 2014版本实例国际站不支持售卖。
     * > - Babelfish for RDS PostgreSQL实例只支持大版本15.0。
     * @example `8.0`
     */
    "EngineVersion": string;
    /**
     * 实例规格。可以指定标准版或倚天版规格，详情请参见[主实例规格表](~~26312~~)。
     * 如需创建Serverless实例，请传入如下取值：
     * - MySQL基础系列：**mysql.n2.serverless.1c**
     * - MySQL高可用系列：**mysql.n2.serverless.2c**
     * - SQL Server：**mssql.mem2.serverless.s2**
     * - PostgreSQL基础系列：**pg.n2.serverless.1c**
     * - PostgreSQL高可用系列：**pg.n2.serverless.2c**
     * @example `mysql.n2.medium.2c`
     */
    "DBInstanceClass": string;
    /**
     * 实例存储空间。单位：GB。每5GB进行递增，取值范围请参见[实例规格表](~~26312~~)。
     * @example `100`
     */
    "DBInstanceStorage": number;
    /**
     * 弃用参数，无需配置。
     * @example `gbk`
     */
    "SystemDBCharset"?: string;
    /**
     * 实例的网络连接类型。固定配置**Intranet**，表示内网连接。
     * @example `Intranet`
     */
    "DBInstanceNetType": string;
    /**
     * 实例名称。长度为2~255个字符。以中文、英文字母开头，可以包含数字、中文、英文、下划线（_）、短横线（-）。
     * >不能以 http:// 和 https:// 开头。
     * @example `testInstance`
     */
    "DBInstanceDescription"?: string;
    /**
     * 该实例的[IP白名单](~~43185~~)。多条记录请以半角逗号（,）隔开，不可重复，最多1000条记录。支持如下两种格式：
     * * IP地址形式，例如：10.10.XX.XX。
     * * CIDR形式，例如：10.10.XX.XX/24（无类域间路由，24表示了地址中前缀的长度，范围为1~32）。
     * @example `10.10.XX.XX/24`
     */
    "SecurityIPList": string;
    /**
     * 用于保证请求的幂等性，防止重复提交请求。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符，且该参数值中不能包含非ASCII字符。
     * @example `ETnLKlblzczshOTUbOCz****`
     */
    "ClientToken"?: string;
    /**
     * 实例的付费类型，取值：
     * - **Postpaid**：后付费（按量付费）。
     * - **Prepaid**：预付费（包年包月）。
     * - **Serverless**：Serverless付费类型，不支持MariaDB实例。更多信息，请参见[MySQL Serverless实例简介](~~411291~~)、[SQL Server Serverless实例简介](~~604344~~)、[PostgreSQL Serverless实例简介](~~607742~~)。
     * >系统会自动生成订单并自动完成支付，无需手动确认支付。
     * @example `Postpaid`
     */
    "PayType": string;
    /**
     * 主节点可用区ID。
     * - 指定了VPC和交换机时，此处必须传入目标交换机所在的可用区ID，否则无法创建成功。
     * - 对于高可用系列实例，还需传入**ZoneIdSlave1**，以此决定实例是单可用区部署还是多可用区部署。
     * - 对于三节点企业系列实例，还需传入**ZoneIdSlave1**和**ZoneIdSlave2**，以此决定实例是单可用区部署还是多可用区部署。
     * - 对于RDS集群系列实例，两节点还需要传入**ZoneIdSlave1**，三节点还需要传入**ZoneIdSlave1**和**ZoneIdSlave2**。
     * @example `cn-hangzhou-b`
     */
    "ZoneId"?: string;
    /**
     * 备节点可用区ID。
     * - 如果填写**Auto**，则表示多可用区部署并且会自动为备节点选择可用区。
     * - 如果和**ZoneId**相同，则为单可用区部署。
     * - 如果和**ZoneId**不同，则为多可用区部署。
     * @example `cn-hangzhou-c`
     */
    "ZoneIdSlave1"?: string;
    /**
     * 该参数已废弃。
     * @example `cn-hangzhou-d`
     */
    "ZoneIdSlave2"?: string;
    /**
     * 实例的网络类型，取值：
     * * **VPC**：专有网络。
     * * **Classic**：经典网络。
     * > * MySQL云盘实例只支持专有网络，此参数必须配置为**VPC**。
     * > * PostgreSQL和MariaDB实例只支持专有网络，此参数必须配置为**VPC**。
     * > * SQL Server单机版和Web版实例支持经典网络和专有网络。其余实例只支持专有网络，此参数必须配置为**VPC**。
     * @example `VPC`
     */
    "InstanceNetworkType"?: string;
    /**
     * 实例的访问模式，取值：
     * * **Standard**：标准访问模式。
     * * **Safe**：数据库代理模式。
     * 默认为RDS系统分配。
     * > SQL Server 2012、2016、2017只支持标准访问模式。
     * @example `Standard`
     */
    "ConnectionMode"?: string;
    /**
     * 专有网络（VPC） ID。
     * >网络类型**InstanceNetworkType**取值为**VPC**时生效。
     * @example `vpc-****`
     */
    "VPCId"?: string;
    /**
     * 虚拟交换机ID。虚拟交换机所在的可用区必须和**ZoneId**中传入的可用区ID相对应。
     * - 网络类型**InstanceNetworkType**需为**VPC**。
     * - 若您填写了ZoneSlaveId1（备可用区ID），此处需填写两个交换机ID，并使用半角逗号（,）隔开。
     * @example `vsw-****`
     */
    "VSwitchId"?: string;
    /**
     * 设置实例的内网IP。需要在指定交换机的IP地址范围内。系统默认通过**VPCId**和**vSwitchId**自动分配。
     * @example `172.16.XX.XX`
     */
    "PrivateIpAddress"?: string;
    /**
     * 指定购买时长，取值：
     * * 当参数**Period**=**Year**时，**UsedTime**取值为**1~5**。
     * * 当参数**Period**=**Month**时，**UsedTime**取值为**1~11**。
     * > 若付费类型为**Prepaid**则该参数必须传入。
     * @example `2`
     */
    "UsedTime"?: string;
    /**
     * 指定预付费实例为包年或者包月类型，取值：
     * * **Year**：包年。
     * * **Month**：包月。
     * > 若付费类型为**Prepaid**则该参数必须传入。
     * @example `Year`
     */
    "Period"?: string;
    /**
     * 资源组ID。
     * @example `rg-acfmy****`
     */
    "ResourceGroupId"?: string;
    /**
     * 实例存储类型，取值：
     * * **local_ssd**：本地SSD盘（推荐）。
     * * **cloud_ssd**：SSD云盘（不推荐，部分地域已经停止售卖）。
     * * **cloud_essd**：ESSD PL1云盘。
     * * **cloud_essd2**：ESSD PL2云盘。
     * * **cloud_essd3**：ESSD PL3云盘。
     * <props="china">* **general_essd**：通用云盘。</props>
     * 本参数的默认值根据**DBInstanceClass**参数中传的规格代码自动判断：
     * * 规格代码为本地盘规格：默认值为**local_ssd**。
     * * 规格代码为云盘规格：默认值为**cloud_essd**。
     * > Serverless实例仅支持ESSD PL1云盘，必须传入**cloud_essd**。
     * @example `cloud_essd`
     */
    "DBInstanceStorageType"?: string;
    /**
     * 业务扩展参数。
     * @example `121436975448952`
     */
    "BusinessInfo"?: string;
    /**
     * 同地域内的云盘加密的密钥ID。传入此参数表示开启云盘加密（开启后无法关闭），并且需要传入**RoleARN**。
     * 您可以在密钥管理服务控制台查看密钥ID，也可以创建新的密钥。详情请参见[创建密钥](~~181610~~)。
     * > - 对于RDS MySQL、RDS PostgreSQL和RDS SQL Server可不传此参数，仅需要传入**RoleARN**即可使用服务密钥创建云盘加密实例。
     * > - 支持RAM授权允许子账号创建实例时必须开启云盘加密，若不开启云盘加密，则不允许创建实例，RAM子账号授权配置如下：
     * `{"Version":"1","Statement":[{"Effect":"Deny","Action":"rds:CreateDBInstance","Resource":"*","Condition":{"StringEquals":{"rds:DiskEncryptionRequired":"false"}}}]}`
     * ><warning>此配置也会同步影响控制台创建实例CreateOrder接口。></warning>
     * @example `0d24*****-da7b-4786-b981-9a164dxxxxxx`
     */
    "EncryptionKey"?: string;
    /**
     * 主账号授权RDS云服务账号访问KMS权限的全局资源描述符（ARN）。您可以通过CheckCloudResourceAuthorized接口查看ARN信息。
     * @example `acs:ram::1406****:role/aliyunrdsinstanceencryptiondefaultrole`
     */
    "RoleARN"?: string;
    /**
     * 实例是否自动续费，仅在创建包年包月实例时传入，取值：
     * - **true**
     * - **false**
     * > - 按月购买时，自动续费周期为1个月。
     * > - 按年购买时，自动续费周期为1年。
     * @example `true`
     */
    "AutoRenew"?: string;
    /**
     * 实例系列，取值：
     * * 常规实例
     *     * **Basic**：基础系列。
     *     * **HighAvailability**：高可用系列。
     *     * **cluster**：MySQL或PostgreSQL集群系列。
     *     * **AlwaysOn**：SQL Server集群系列。
     *     * **Finance**：三节点企业系列。
     * * Serverless实例
     *     * **serverless_basic**：Serverless基础系列。（仅适用MySQL和PostgreSQL）
     *     * **serverless_standard**：Serverless高可用系列。（仅适用MySQL和PostgreSQL）
     *     * **serverless_ha**：SQL Server Serverless高可用系列。
     *     > 若创建Serverless实例，该参数必传。
     * @example `HighAvailability`
     */
    "Category"?: string;
    /**
     * 专属集群主机组ID。
     * 在专属集群内创建RDS实例时需要指定。
     * - 您可以调用DescribeDedicatedHostGroups接口查询RDS主机组信息。
     * - 如您还未创建RDS主机组，可以调用CreateDedicatedHostGroup接口创建。
     * @example `dhg-4n****`
     */
    "DedicatedHostGroupId"?: string;
    /**
     * 专属集群中主实例的主机ID。
     * 在专属集群内创建RDS实例时需要指定。如不指定该参数，系统默认自动分配主机。
     * - 您可以调用DescribeDedicatedHosts接口查询RDS主机组内的主机信息。
     * - 如您还没有主机，可以调用CreateDedicatedHost接口添加。
     * @example `i-bp****`
     */
    "TargetDedicatedHostIdForMaster"?: string;
    /**
     * 专属集群中备实例的主机ID。
     * 在专属集群内创建RDS高可用系列或三节点企业系列实例时需要指定。如不指定该参数，系统默认自动分配主机。
     * - 您可以调用DescribeDedicatedHosts接口查询RDS专属集群内的主机信息。
     * - 如您还没有主机，可以调用CreateDedicatedHost接口添加。
     * @example `i-bp****`
     */
    "TargetDedicatedHostIdForSlave"?: string;
    /**
     * 专属集群中日志实例的主机ID。
     * 在专属集群内创建RDS三节点企业系列实例时需要指定。如不指定该参数，系统默认自动分配主机。
     * - 您可以调用DescribeDedicatedHosts接口查询RDS专属集群内的主机信息。
     * - 如您还没有主机，可以调用CreateDedicatedHost接口添加。
     * @example `i-bp****`
     */
    "TargetDedicatedHostIdForLog"?: string;
    /**
     * 参数模板ID。可调用DescribeParameterGroups查询。
     * > 仅MySQL和PostgreSQL支持此参数，如不配置，将采用系统默认参数模板，您也可以自定义参数模板后，在此处使用。
     * @example `rpg-sys-****`
     */
    "DBParamGroupId"?: string;
    /**
     * 设置实例的时区，仅在**Engine**为**MySQL**或**PostgreSQL**时生效。
     * - **Engine**为**MySQL**：
     *     - 此参数配置UTC时区。取值范围为**-12:59** ~ **+13:00**。
     *     - 本地SSD盘实例可以使用命名时区，例如Asia/Hong_Kong。命名时区的详细信息，请参见[命名时区参考](~~297356~~)。
     * - **Engine**为**PostgreSQL**：
     *     - 此参数配置命名时区，不支持UTC时区。命名时区的详细信息，请参见[命名时区参考](~~297356~~)。
     *     - 仅当实例为PostgreSQL云盘时，该参数可配置。
     * > - 购买主实例时支持设置时区，只读实例不支持设置时区，只读实例将继承主实例时区。
     * > - 如果不配置此参数，系统将根据您购买实例的地域，选择默认时区。
     * @example `+08:00`
     */
    "DBTimeZone"?: string;
    /**
     * 表名是否区分大小写，取值：
     * * **true**：不区分大小写（默认）。
     * * **false**：区分大小写。
     * @example `true`
     */
    "DBIsIgnoreCase"?: string;
    /**
     * 指定创建的RDS实例的内核小版本，仅在创建MySQL或PostgreSQL实例时需要传入。
     * 格式：
     * * MySQL：`<实例版本>_<数字版本号>`。例如`rds_20200229`、`xcluster_20200229`或`xcluster80_20200229`。说明如下：
     *     * rds：高可用系列或基础系列。
     *     * xcluster：MySQL 5.7三节点企业系列。
     *     * xcluster80：MySQL 8.0三节点企业系列。
     *     > 数字版本号可通过调用DescribeDBMiniEngineVersions接口查询。各版本差异，请参见[AliSQL 小版本Release Notes](~~96060~~)。
     * * PostgreSQL：`rds_postgres_<大版本>00_<小版本号>`。例如`rds_postgres_1400_20220830`。说明如下：
     *     * 1400：PostgreSQL大版本为14。
     *     * 20220830：AliPG内核小版本，可通过调用DescribeDBMiniEngineVersions接口查询。各版本差异，请参见[PostgreSQL 小版本Release Notes](~~126002~~)。
     *     > 如果**BabelfishConfig**中配置了启用Babelfish，则RDS PostgreSQL实例小版本格式为：`rds_postgres_大版本00_AliPG内核小版本_babelfish`。
     * @example `rds_20200229`
     */
    "TargetMinorVersion"?: string;
    /**
     * 存储空间自动扩容开关，仅MySQL和PostgreSQL支持，取值：
     * * **Enable**：开启。
     * * **Disable**：关闭（默认）。
     * >您也可以在实例创建完成之后，调用ModifyDasInstanceConfig进行调整。更多信息，请参见[设置存储空间自动扩容](~~173826~~)。
     * @example `Disable`
     */
    "StorageAutoScale"?: string;
    /**
     * 存储空间自动扩容触发阈值（百分比），取值：
     * * **10**
     * * **20**
     * * **30**
     * * **40**
     * * **50**
     * >**StorageAutoScale**为**Enable**时该参数必填。
     * @example `50`
     */
    "StorageThreshold"?: number;
    /**
     * 存储空间自动扩容的总存储空间上限值，即自动扩容不会导致实例总存储空间超过该值。单位：GB。
     * > - 取值需大于等于0。
     * > - **StorageAutoScale**为**Enable**时必填。
     * @example `2000`
     */
    "StorageUpperBound"?: number;
    /**
     * 是否对本次创建实例的操作执行预检查，取值：
     * * **true**：执行预检查操作，不创建实例。检查项目包含请求参数、请求格式、业务限制和库存等。
     * * **false**：发送正常请求，通过检查后直接创建实例（默认）。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 用户备份ID。可调用ListUserBackupFiles接口查询。传入该参数，可基于用户备份创建实例。
     * 如需传入此参数，有如下限制：
     * - **PayType**参数必须为**Postpaid**。
     * - **Engine**参数必须为**MySQL**。
     * - **EngineVersion**参数必须为**5.7**。
     * - **Category**参数必须为**Basic**。
     * @example `67798****`
     */
    "UserBackupId"?: string;
    /**
     * 指定需要创建的RDS MySQL实例数量。本参数仅适用于批量创建RDS MySQL实例。
     * 取值范围：**1**~**20**；默认值：**1**。
     * > - 创建多个RDS MySQL实例时，可以考虑通过**Tag.Key**和**Tag.Value**参数给同一批次的实例打上标签，以方便创建完成后通过标签管理该批次的实例。
     * > - 完成多个RDS MySQL实例的创建后，接口只会返回**TaskId**、**RequestId**和**Message**参数，不会返回其他详情参数。如需查询个体实例的详情，可调用DescribeDBInstanceAttribute接口。
     * > - **engine**参数非**MySQL**，而本参数的值大于**1**时，接口会调用失败并返回错误码`InvalidParam.Engine`。
     * @example `2`
     */
    "Amount"?: number;
    /**
     * 批量创建实例策略。本参数仅在**Amount**参数大于1时生效，取值：
     * * **Atomicity**（默认值）：原子性。即同一批次的实例要么全部创建成功，若有一个创建失败，则所有实例创建失败。
     * * **Partial**：非原子性。即实例的创建不受同一批次中其他实例的影响。
     * @example `Atomicity`
     */
    "CreateStrategy"?: string;
    /**
     * 标签列表。
     */
    "Tag"?: {
        /**
         * 标签键。传入此参数为实例绑定标签。
         * * 若传入的标签键已存在，则直接为实例绑定该标签键。可调用ListTagResources查询已创建的标签。
         * * 若传入的标签键不存在，则先创建再为实例绑定该标签键。
         * * 不允许传入空字符串。
         * * 该参数与**Tag.Value**参数为配套参数，不可单独使用。
         * @example `testkey1`
         */
        Key: string;
        /**
         * 标签键对应的标签值。传入此参数为实例绑定标签。
         * * 若对应的标签键中存在传入的标签值，则直接为实例绑定该标签值。可调用ListTagResources查询已创建的标签。
         * * 若对应的标签键中不存在传入的标签值，则先创建再为实例绑定该标签值。
         * * 该参数与**Tag.Key**参数为配套参数，不可单独使用。
         * @example `testvalue1`
         */
        Value: string;
    }[];
    /**
     * 是否开启RDS释放保护功能，仅按量付费实例支持，取值：
     * * **true**：开启。
     * * **false**：关闭（默认）。
     * @example `true`
     */
    "DeletionProtection"?: boolean;
    /**
     * Babelfish for RDS PostgreSQL配置信息。
     * 配置格式：{"babelfishEnabled":"true","migrationMode":"xxxxxxx","masterUsername":"xxxxxxx","masterUserPassword":"xxxxxxxx"}
     * 参数含义如下：
     * - **babelfishEnabled**：是否开启Babelfish，开启为**true**，该参数不配置默认不开启。
     * - **migrationMode**：数据库模式，单数据库模式配置为**single-db**，多数据库模式配置为**multi-db**。
     * - **masterUsername**：初始化管理账号。由小写字母、数字、下划线组成，以字母开头，以字母或数字结尾，最多63个字符，且不能以pg开头。
     * - **masterUserPassword**：管理账号的密码。由大写、小写、数字、特殊字符组成，至少包含三种，长度为8－32位；特殊字符包括`! @ # $ % ^ & * () _ + - =` 。
     * > 该参数仅适用于RDS PostgreSQL实例，Babelfish for RDS PostgreSQL的更多介绍，请参见[Babelfish简介](~~428613~~)。
     * @example `{"babelfishEnabled":"true","migrationMode":"single-db","masterUsername":"babelfish_user","masterUserPassword":"Babelfish123!"}`
     */
    "BabelfishConfig"?: string;
    /**
     * RDS Serverless实例的相关设置。创建Serverless实例时必传。
     * >MariaDB不支持创建Serverless实例。
     */
    "ServerlessConfig"?: {
        /**
         * 实例RCU（RDS Capacity Unit）自动扩缩范围的最大值。取值：
         * - MySQL：**1~32**
         * - SQL Server：**2~8**
         * - PostgreSQL：**1~14**
         * >该参数的值必须大于等于**MinCapacity**，且仅支持传入**整数**。
         * @example `8`
         */
        MaxCapacity: number;
        /**
         * 实例RCU自动扩缩范围的最小值。取值：
         * - MySQL：**0.5~32**
         * - SQL Server：**2~8**（仅支持整数）
         * - PostgreSQL：**0.5~14**
         * >该参数的值必须小于等于**MaxCapacity**。
         * @example `0.5`
         */
        MinCapacity: number;
        /**
         * 是否开启Serverless实例的智能暂停和启动。取值：
         * * **true**：启用。
         * * **false**：不启用（默认）。
         * > 仅MySQL和PostgreSQL的Serverless实例需设置该参数。如果10分钟无任何连接将进入暂停状态，当连接进入时会自动唤醒。
         * @example `true`
         */
        AutoPause: boolean;
        /**
         * 是否开启Serverless实例的强制弹性扩缩容。取值：
         * * **true**：启用。
         * * **false**：不启用（默认）。
         * > * 仅MySQL和PostgreSQL的Serverless实例需设置该参数。开启该参数后，实例进行强制扩缩容时会有30~120秒的服务不可用，请根据实际情况谨慎使用。
         * > * 实例RCU的弹性扩缩容通常会立刻生效，但在某些特殊情况下（例如大事务执行中）无法即刻完成扩缩容，此时可开启本参数进行强制扩缩容。
         * @example `false`
         */
        SwitchForce: boolean;
    };
    /**
     * 数据库内网连接地址。
     * @example `rm-uf6wjk5****.mysql.rds.aliyuncs.com`
     */
    "ConnectionString"?: string;
    /**
     * 支持在创建RDS实例时初始化端口。取值范围：
     * - MySQL：1000~65534
     * - PostgreSQL、SQL Server、MariaDB：1000~5999
     * @example `3306`
     */
    "Port"?: string;
    /**
     * 弃用参数，无需配置。
     * @example `0`
     */
    "BpeEnabled"?: string;
    /**
     * <props="intl">无效参数，无需配置。</props>
     * <props="china">通用云盘IO突发功能开关。</props>
     * <props="china">* true：开启IO突发功能。</props>
     * <props="china">* false：关闭IO突发功能。</props>
     * <props="china">> 了解通用云盘的IO突发功能的更多信息，请参见[什么是通用云盘](~~2340501~~)。</props>
     * @example `false`
     */
    "BurstingEnabled"?: boolean;
    /**
     * 是否自动支付。取值范围：
     * - **true**：自动支付。您需要确保账户余额充足。
     * - **false**：只生成订单不扣费。
     * > 默认值为true。如果您的支付方式余额不足，可以将参数AutoPay设置为false，此时会生成未支付订单，您可以登录RDS管理控制台自行支付。
     * >
     * @example `true`
     */
    "AutoPay"?: boolean;
    /**
     * <props="china">是否开启通用云盘IO加速功能，参数取值含义如下：</props>
     * <props="china"> - 1：开启</props>
     * <props="china"> - 0：不开启</props>
     * <props="china">> 通用云盘的IO加速功能的更多信息，请参见[通用云盘IO加速功能技术介绍](~~2527067~~)。</props>
     * <props="intl">预留参数。</props>
     * @example `0`
     */
    "IoAccelerationEnabled"?: string;
    /**
     * <props="china">通用云盘数据归档功能开关。</props>
     * <props="china">true：开启。</props>
     * <props="china">false：关闭。</props>
     * <props="intl">预留参数。</props>
     * <props="china">通用云盘的数据归档功能信息，请参见[数据归档](~~2701832~~)。</props>
     * @example `false`
     */
    "ColdDataEnabled"?: boolean;
    /**
     * 白名单列表。
     * 当需要配置多个IP地址时，用英文逗号隔开多个IP地址或IP段，且逗号前后不能有空格，例如`192.168.0.1,172.16.213.9`。
     * @example `192.168.0.1,172.16.213.9`
     */
    "WhitelistTemplateList"?: string;
}
