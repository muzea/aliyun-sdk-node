export interface ConfigureSubscriptionInstanceRequest {
    /**
     * 数据订阅实例所在地域的ID，详情请参见[支持的地域列表](~~141033~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 数据订阅实例ID，可以通过调用[DescribeSubscriptionInstances](~~49442~~)接口查询。
     * @example `dtshp8n2ze4r5x****`
     */
    "SubscriptionInstanceId": string;
    /**
     * 订阅实例名称。
     * > 建议配置具有业务意义的名称（无唯一性要求），便于后续识别。
     * @example `MySQL订阅`
     */
    "SubscriptionInstanceName"?: string;
    /**
     * 源数据库的实例类型，取值：
     * - **RDS**：RDS MySQL。
     * - **PolarDB**：PolarDB MySQL。
     * - **LocalInstance**：有公网IP的自建数据库。
     * - **ECS**：ECS上的自建数据库。
     * - **Express**：通过专线接入的自建数据库。
     * - **CEN**：通过云企业网CEN接入的自建数据库。
     * - **dg**：通过数据库网关接入的自建数据库。
     * > 支持自建数据库的数据库类型为MySQL、Oracle，您需要提前调用[CreateSubscriptionInstance](~~49436~~)设置。
     * @example `RDS`
     */
    "SourceEndpoint.InstanceType"?: string;
    /**
     * 源实例ID。
     * > 源数据库的实例类型为RDS MySQL、PolarDB-X 1.0、PolarDB MySQL时，本参数才可用且必须传入。
     * @example `rm-bp1zc3iyqe3qw****`
     */
    "SourceEndpoint.InstanceID"?: string;
    /**
     * 是否订阅DDL类型的数据，取值：
     * - **true**：是，为默认值。
     * - **false**：否。
     * @example `true`
     */
    "SubscriptionDataType.DDL": boolean;
    /**
     * 是否订阅DML类型的数据，取值：
     * - **true**：是，为默认值。
     * - **false**：否。
     * @example `true`
     */
    "SubscriptionDataType.DML": boolean;
    /**
     * 订阅对象，格式为JSON串且支持一定的正则表达式，详细说明，请参见[订阅对象配置说明](~~141902~~)。
     * @example `[{     "DBName": "dtstestdata" }]`
     */
    "SubscriptionObject": string;
    /**
     * 源数据库的连接地址。
     * > 当源数据库为自建数据库时，本参数才可用且必须传入。
     * @example `172.16.88.***	`
     */
    "SourceEndpoint.IP"?: string;
    /**
     * 源数据库的服务端口。
     * > 当源数据库为自建数据库时，本参数才可用且必须传入。
     * @example `3306`
     */
    "SourceEndpoint.Port"?: string;
    /**
     * 源实例的数据库账号。
     * > 订阅不同的数据库所需的权限有所差异，详情请参见[DTS数据订阅方案概览](~~145715~~)中对应的配置案例。
     * @example `dtstestaccount`
     */
    "SourceEndpoint.UserName"?: string;
    /**
     * 源实例的数据库账号密码。
     * @example `Test123456	`
     */
    "SourceEndpoint.Password"?: string;
    /**
     * Oracle数据库的SID信息。
     * > 当源数据库为自建Oracle时，且Oracle数据库为非RAC实例时，本参数才可用且必须传入。
     * @example `testsid`
     */
    "SourceEndpoint.OracleSID"?: string;
    /**
     * 待订阅的数据库名称。
     * @example `dtstestdata`
     */
    "SourceEndpoint.DatabaseName"?: string;
    /**
     * 源实例所属的阿里云账号ID。
     * > 仅在配置跨阿里云账号的数据订阅时本参数才可用，且必须传入。
     * @example `140692647406****`
     */
    "SourceEndpoint.OwnerID"?: string;
    /**
     * 源实例的授权角色。当源实例与配置订阅任务所属阿里云账号不同时，需传入该参数，来指定源实例的授权角色，以允许配置订阅任务所属阿里云账号访问源实例的实例信息。
     * > 角色所需的权限及授权方式，请参见[跨阿里云账号数据迁移或同步时如何配置RAM授权](~~48468~~)。
     * @example `ram-for-dts`
     */
    "SourceEndpoint.Role"?: string;
    /**
     * 订阅实例的网络类型，目前取值仅支持**vpc**，表示专有网络。
     * > - 如果传入了本参数，则订阅实例被定义为新版，您还需要正确设置**SubscriptionInstance.VPCId**和**SubscriptionInstance.VSwitchID**参数；如果不传入该参数，则订阅实例被定义为旧版。
     * - 旧版订阅实例支持订阅自建MySQL、RDS for MySQL和DRDS的数据，新版订阅实例支持订阅自建MySQL、RDS for MySQL、PolarDB MySQL和Oracle的数据。
     * @example `vpc`
     */
    "SubscriptionInstanceNetworkType"?: string;
    /**
     * 订阅实例的专有网络ID。
     * > 当**SubscriptionInstanceNetworkType**取值为**vpc**时，本参数才可用且必须传入。
     * @example `vpc-bp1vwnn14rqpyiczj****`
     */
    "SubscriptionInstance.VPCId"?: string;
    /**
     * 订阅实例的虚拟交换机ID。
     * > 当**SubscriptionInstanceNetworkType**取值为**vpc**时，本参数才可用且必须传入。
     * @example `vsw-bp10df3mxae6lpmku****`
     */
    "SubscriptionInstance.VSwitchId"?: string;
    /**
     * 阿里云主账号ID，无需设置，该参数即将下线。
     * @example `12323344****`
     */
    "AccountId"?: string;
}
