export interface CreateCloudBenchTasksRequest {
    /**
     * 压测任务类型。取值：
     * - **pressure test**（默认）：智能压测，将从源实例上捕获的流量，按照目标实例规格支持的极限速度，在目标实例上进行回放。
     * - **smart pressure test**：生成压测，通过分析和学习短时间内在源实例上捕获的流量，生成和原始流量的业务模型和流量分布基本一致的流量进行持续压测，减少从源实例采集数据的时间，降低存储成本和性能开销。
     * @example `pressure test`
     */
    "TaskType": string;
    /**
     * 源实例ID，仅支持RDS MySQL、PolarDB MySQL版实例，您可通过调用[GetInstanceInspections](~~202857~~)接口获取。
     * >当**DstType**为**Instance**时，本参数需要传入。
     * @example `rm-2ze1jdv45i7l6****`
     */
    "SrcInstanceId": string;
    /**
     * 压测任务描述。
     * @example `test-das-bench-0501`
     */
    "Description": string;
    /**
     * 备用参数。
     * @example `None`
     */
    "SrcPublicIp"?: string;
    /**
     * 目标实例ID，仅支持RDS MySQL、PolarDB MySQL版实例，您可通过调用[GetInstanceInspections](~~202857~~)接口获取。
     * >当**DstType**为**Instance**时，本参数需要传入。
     * @example `rm-2ze1jdv45i7l6****`
     */
    "DstInstanceId"?: string;
    /**
     * 数据库网关的专有网络ID。
     * >若**ClientType**取值为**ECS**，则此参数必传入。
     * @example `vpc-t4nsnwvpbc1h76ja4****`
     */
    "GatewayVpcId"?: string;
    /**
     * 数据库网关的IP地址或域名。
     * >若**ClientType**取值为**ECS**，则此参数必传入。
     * @example `172.30.XX.XX`
     */
    "GatewayVpcIp"?: string;
    /**
     * 压测机器类型。取值：
     * - **ECS**：您需要自己准备[数据库网关](~~64905~~)。
     * - **DAS_ECS**：DAS自动购买和部署的ECS。
     * @example `ECS`
     */
    "ClientType": string;
    /**
     * 压测任务的开始时间，格式为Unix时间戳，单位为毫秒。
     * @example `1608888296000`
     */
    "RequestStartTime"?: string;
    /**
     * 压测任务的结束时间，格式为Unix时间戳，单位为毫秒。
     * @example `1608888296001`
     */
    "RequestEndTime"?: string;
    /**
     * 压测任务的持续时间，单位为毫秒。
     * @example `86400000`
     */
    "RequestDuration"?: string;
    /**
     * 源实例流量在目标实例上的回放速度，回放速度必须是正整数，取值：**1**~**30**，默认为**1**。
     * @example `1`
     */
    "Rate"?: string;
    /**
     * 生成压测的持续时间，单位为毫秒。
     * >当**TaskType**为**smart pressure test**时本参数需要传入。
     * @example `86400000`
     */
    "SmartPressureTime"?: string;
    /**
     * DTS迁移任务规格，您可以通过调用[DescribeCloudbenchTask](~~230669~~)接口获取。
     * >压测任务需要先将源实例基准数据迁移至目标实例，当您新建DTS任务时需要传入本参数。
     * @example `medium`
     */
    "DtsJobClass"?: string;
    /**
     * DTS迁移任务ID，您可调用[ConfigureDtsJob](~~208399~~)接口获取。
     * >已在DTS控制台创建完DTS任务时本参数必传入。
     * @example `23127`
     */
    "DtsJobId"?: string;
    /**
     * 源端实例高权限账号。取值：**admin**。
     * >当**DstType**为**Instance**时，本参数需要传入。
     * @example `admin`
     */
    "SrcSuperAccount"?: string;
    /**
     * 源端实例高权限账号的密码。
     * >当**DstType**为**Instance**时，本参数需要传入。
     * @example `test123`
     */
    "SrcSuperPassword"?: string;
    /**
     * 目标实例的高权限账号。
     * @example `root`
     */
    "DstSuperAccount"?: string;
    /**
     * 目标实例高权限账号的密码。
     * @example `test123`
     */
    "DstSuperPassword"?: string;
    /**
     * 目标实例的类型。取值：
     * - **Instance**（默认）：实例ID。
     * - **ConnectionString**：实例的连接地址。
     * @example `Instance`
     */
    "DstType"?: string;
    /**
     * 目标实例的连接地址，仅支持RDS MySQL、PolarDB MySQL版实例。
     * >**DstType**为**ConnectionString**本参数有效。
     * @example `rm-de21209****.mysql.rds.aliyuncs.com`
     */
    "DstConnectionString"?: string;
    /**
     * 目标实例的端口。
     * >**DstType**为**ConnectionString**本参数有效。
     * @example `3306`
     */
    "DstPort"?: string;
    /**
     * 压测生成的临时目录。
     * @example `/tmp/bench/`
     */
    "WorkDir"?: string;
    /**
     * 备份集ID，可通过查询备份列表接口[DescribeBackups](~~26273~~)获取。
     * @example `229132`
     */
    "BackupId"?: string;
    /**
     * 备份的时间。格式为：yyyy-MM-ddTHH:mm:ssZ（UTC时间）。
     * @example `2021-04-23T13:22:14Z`
     */
    "BackupTime"?: string;
    /**
     * 创建压测任务的总个数，取值：**0**~**30**，默认为**1**。
     * @example `1`
     */
    "Amount"?: string;
    /**
     * 压测任务结束后的状态。取值：
     * - **WAIT_TARGET**：准备压测的目标实例。
     * - **WAIT_DBGATEWAY**：准备压测部署。
     * - **WAIT_SQL**：准备全量SQL。
     * - **WAIT_LOGIC**：准备开始回放流量。
     * >当压测任务执行完EndState设置的状态之后，任务将直接到达完成状态。
     * @example `WAIT_TARGET`
     */
    "EndState"?: string;
}
