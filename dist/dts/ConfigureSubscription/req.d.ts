export interface ConfigureSubscriptionRequest {
    /**
     * 订阅实例所在地域，请参见[支持的地域列表](~~141033~~)。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 订阅任务名称。
     * > 建议配置具有业务意义的名称（无唯一性要求），便于后续识别。
     * @example `MySQL订阅`
     */
    "DtsJobName": string;
    /**
     * 订阅实例ID，可以调用[DescribeDtsJobs](~~209702~~)查询。
     * @example `dtsy0zz3t13h7d****`
     */
    "DtsInstanceId"?: string;
    /**
     * 订阅任务ID，可以调用[DescribeDtsJobs](~~209702~~)查询。
     * @example `y0zz3t13h7d****`
     */
    "DtsJobId"?: string;
    /**
     * 源数据库类型，取值为**MySQL**、**PostgreSQL**、**Oracle**。
     * > 当源数据库为自建数据库，本参数必须传入。
     * @example `PostgreSQL`
     */
    "SourceEndpointEngineName"?: string;
    /**
     * 源数据库的实例类型，取值：
     * - **RDS**：云数据库RDS。
     * - **PolarDB**：PolarDB MySQL。
     * -  **DRDS**: PolarDB-X 1.0。
     * - **LocalInstance**：有公网IP的自建数据库。
     * - **ECS**：ECS上的自建数据库。
     * - **Express**：通过专线接入的自建数据库。
     * - **CEN**：通过云企业网CEN接入的自建数据库。
     * - **dg**：通过数据库网关接入的自建数据库。
     * @example `RDS`
     */
    "SourceEndpointInstanceType"?: string;
    /**
     * 源实例所属地域，详情请参见[支持的地域列表](~~141033~~)。
     * > 如果源实例为有公网IP的自建数据库，则可以传入**cn-hangzhou**或者离自建数据库物理距离最近的区域ID。
     * @example `cn-hangzhou`
     */
    "SourceEndpointRegion"?: string;
    /**
     * 源实例ID。
     * > 源数据库的实例类型为RDS MySQL、PolarDB-X 1.0、PolarDB MySQL时，本参数才可用且必须传入。
     * @example `rm-bp1zc3iyqe3qw****`
     */
    "SourceEndpointInstanceID"?: string;
    /**
     * 源数据库的连接地址。
     * > 当源数据库为自建数据库时，本参数才可用且必须传入。
     * @example `172.16.8*.***`
     */
    "SourceEndpointIP"?: string;
    /**
     * 源数据库的服务端口。
     * > 当源数据库为自建数据库时，本参数才可用且必须传入。
     * @example `3306`
     */
    "SourceEndpointPort"?: string;
    /**
     * Oracle数据库的SID信息。
     * > 当源数据库为自建Oracle时，且Oracle数据库为非RAC实例时，本参数才可用且必须传入。
     * @example `testsid`
     */
    "SourceEndpointOracleSID"?: string;
    /**
     * 待订阅的数据库名称。
     * @example `dtstestdata`
     */
    "SourceEndpointDatabaseName"?: string;
    /**
     * 源实例的数据库账号。
     * > 订阅不同的数据库所需的权限有所差异，请参见[准备用于数据订阅的数据库账号](~~212653~~)中的账号权限。
     * @example `dtstest`
     */
    "SourceEndpointUserName"?: string;
    /**
     * 源实例的数据库账号密码。
     * @example `Test123456`
     */
    "SourceEndpointPassword"?: string;
    /**
     * 源实例所属的阿里云账号ID。
     * > 仅在配置跨阿里云账号的数据订阅时本参数才可用，且必须传入。
     * @example `140692647406****`
     */
    "SourceEndpointOwnerID"?: string;
    /**
     * 源实例的授权角色。当源实例与配置订阅任务所属阿里云账号不同时，需传入该参数，来指定源实例的授权角色，以允许配置订阅任务所属阿里云账号访问源实例的实例信息。
     * > 角色所需的权限及授权方式，请参见[跨阿里云账号数据迁移或同步时如何配置RAM授权](~~48468~~)。
     * @example `ram-for-dts`
     */
    "SourceEndpointRole"?: string;
    /**
     * 订阅对象，格式为JSON串。详细定义，请参见[迁移、同步或订阅对象说明](~~209545~~)。
     * @example `{"dtstest":{"name":"dtstest","all":true}}`
     */
    "DbList": string;
    /**
     * DTS预留参数，格式为JSON串，您可以传入本参数完善源目库信息（如目标Kafka数据库的数据存储格式、云企业网CEN的实例ID）。更多信息，请参见[Reserve参数说明](~~176470~~)参数说明。
     * @example `{      "srcInstanceId": "cen-9kqshqum*******"  }`
     */
    "Reserve"?: string;
    /**
     * 订阅启动时间，格式为Unix时间戳，单位为秒（s）。
     * > Unix时间戳转换工具可用搜索引擎获取。
     * @example `1616902385`
     */
    "Checkpoint"?: string;
    /**
     * 订阅任务的网络类型，目前取值仅支持**vpc**，表示专有网络。
     * > - 如果传入了本参数，则订阅任务被定义为新版，您还需要正确设置**SubscriptionInstanceVPCId**和**SubscriptionInstanceVSwitchID**参数；如果不传入该参数，则订阅任务被定义为旧版。
     * - 旧版订阅任务支持订阅自建MySQL、RDS MySQL和PolarDB-X 1.0的数据，新版订阅任务支持订阅自建MySQL、RDS MySQL、PolarDB MySQL和Oracle的数据。
     * @example `vpc`
     */
    "SubscriptionInstanceNetworkType": string;
    /**
     * 订阅实例的专有网络ID。
     * > 当**SubscriptionInstanceNetworkType**取值为**vpc**时，本参数才可用且必须传入。
     * @example `vpc-bp1vwnn14rqpyiczj****`
     */
    "SubscriptionInstanceVPCId"?: string;
    /**
     * 订阅实例的虚拟交换机ID。
     * > 当**SubscriptionInstanceNetworkType**取值为**vpc**时，本参数才可用且必须传入。
     * @example `vsw-bp10df3mxae6lpmku****`
     */
    "SubscriptionInstanceVSwitchId"?: string;
    /**
     * 是否订阅DDL类型的数据，取值：
     * - **true**：是，为默认值。
     * - **false**：否。
     * @example `true`
     */
    "SubscriptionDataTypeDDL"?: boolean;
    /**
     * 是否订阅DML类型的数据，取值：
     * - **true**：是，为默认值。
     * - **false**：否。
     * @example `true`
     */
    "SubscriptionDataTypeDML"?: boolean;
    /**
     * 延迟报警的联系人手机号码，多个手机号码以英文逗号（,）分隔。
     * >-  本参数目前只支持中国站，仅支持大陆手机号码，且最多传入10个手机号码。
     * - 国际站不支持手机告警，仅支持[通过云监控平台为DTS任务设置报警规则](~~175876~~)。
     * @example `1361234****,1371234****`
     */
    "DelayPhone"?: string;
    /**
     * 触发延迟报警的阈值，单位为秒且需为整数，可根据业务需要设置阈值，建议设置10秒以上，避免因网络、数据库负载等原因导致的延迟波动。
     * > 当**DelayNotice**取值为**true**时，本参数必须传入。
     * @example `10`
     */
    "DelayRuleTime"?: number;
    /**
     * 是否监控延迟状态，取值：
     * - **true**：是。
     * - **false**：否。
     * @example `true`
     */
    "DelayNotice"?: boolean;
    /**
     * 异常报警的联系人手机号码，多个手机号码以英文逗号（,）分隔。
     * >-  本参数目前只支持中国站，仅支持大陆手机号码，且最多传入10个手机号码。
     * - 国际站不支持手机告警，仅支持[通过云监控平台为DTS任务设置报警规则](~~175876~~)。
     * @example `1361234****,1371234****`
     */
    "ErrorPhone"?: string;
    /**
     * 是否监控异常状态，取值：
     * - **true**：是。
     * - **false**：否。
     * @example `true`
     */
    "ErrorNotice"?: boolean;
    /**
     * DTS专属集群ID，用于将订阅任务调度到指定的DTS专属集群上。
     * @example `dtscluster_atyl3b5214uk***`
     */
    "DedicatedClusterId"?: string;
    /**
     * DTS实例的环境标签，取值为：
     * - **normal**：**普通**
     * - **online**：**线上**
     * @example `normal`
     */
    "DtsBisLabel"?: string;
    /**
     * Serverless实例的DU下限，取值为：1、2、4、8、16。
     * <props="intl">
     * > 当前暂不支持此功能，请勿传入参数。</props>
     * @example `1`
     */
    "MinDu"?: number;
    /**
     * Serverless实例的DU上限，取值为：2、4、8、16。
     * <props="intl">
     * > 当前暂不支持此功能，请勿传入参数。</props>
     * @example `16`
     */
    "MaxDu"?: number;
    /**
     * 源库通过SSL安全连接时，CA证书的路径。
     * > 当前暂不支持此功能，请勿传入此参数。
     * @example `****`
     */
    "SrcCaCertificateOssUrl"?: string;
    /**
     * 源库通过SSL安全连接时，CA证书的密钥。
     * > 当前暂不支持此功能，请勿传入此参数。
     * @example `****`
     */
    "SrcCaCertificatePassword"?: string;
    /**
     * 源库通过SSL安全连接时，客户端证书的路径。
     * > 当前暂不支持此功能，请勿传入此参数。
     * @example `****`
     */
    "SrcClientCertOssUrl"?: string;
    /**
     * 源库通过SSL安全连接时，客户端证书私钥的路径。
     * > 当前暂不支持此功能，请勿传入此参数。
     * @example `****`
     */
    "SrcClientKeyOssUrl"?: string;
    /**
     * 源库通过SSL安全连接时，客户端证书私钥的密码。
     * > 当前暂不支持此功能，请勿传入此参数。
     * @example `****`
     */
    "SrcClientPassword"?: string;
    /**
     * 资源组ID。
     * @example `rg-acfmzawhxxc****`
     */
    "ResourceGroupId"?: string;
}
