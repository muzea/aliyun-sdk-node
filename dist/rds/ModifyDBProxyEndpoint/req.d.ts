export interface ModifyDBProxyEndpointRequest {
    /**
     * 实例ID。可调用DescribeDBInstances获取。
     * @example `rm-bp145737x5bi6****`
     */
    "DBInstanceId": string;
    /**
     * 代理连接地址ID。可以通过接口DescribeDBProxyEndpoint查看。
     * > - MySQL：当**DbEndpointOperator**取值为**Delete**或**Modify**时，本参数必须传入。
     * > - PostgreSQL：当**DbEndpointOperator**取值为**Delete**、**Modify**或**Create**时，本参数必须传入。
     * @example `gos787jog2wk0y****`
     */
    "DBProxyEndpointId"?: string;
    /**
     * 设置代理连接地址想要开通的代理功能，各功能之间以英文分号（;）隔开。格式：`功能1:开通情况;功能2:开通情况;... `，末尾不加英文分号（;）。
     * 功能取值：
     * * **ReadWriteSpliting**：读写分离
     * * **ConnectionPersist**：连接池
     * * **TransactionReadSqlRouteOptimizeStatus**：事务拆分
     * 开通情况取值：
     * * **1**：功能已开通
     * * **0**：功能未开通
     * > RDS PostgreSQL仅支持设置**ReadWriteSpliting**。
     * @example `ReadWriteSpliting:1;ConnectionPersist:0`
     */
    "ConfigDBProxyFeatures"?: string;
    /**
     * 地域ID。可调用DescribeRegions获取。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 读写分离中只读实例的最大延迟阈值，当只读实例延迟时间超过该值时，读取流量不发往该实例，单位：秒。不传该参数则保持原值。取值：**0**~**3600**。默认值：**30**。
     * >开通读写分离时才需要传入该参数。
     * @example `30`
     */
    "ReadOnlyInstanceMaxDelayTime"?: string;
    /**
     * 读权重分配模式。取值：
     * * **Standard**：按规格权重自动分配。
     * * **Custom**：自定义分配权重。
     * > 开通读写分离时才需要传入该参数。权限分配模式的详细信息，MySQL请参见[读权重分配](~~96076~~)，PostgreSQL请参见[开通并配置数据库代理服务](~~418272~~)。
     * @example `Standard`
     */
    "ReadOnlyInstanceDistributionType"?: string;
    /**
     * 自定义读权重分配，即传入主实例和只读实例的读请求权重。以100递增，最大值为10000，格式：
     * - 常规实例：`{"主实例ID":"权重","只读实例ID":"权重"...}`
     *     示例：`{"rm-uf6wjk5****":"500","rr-tfhfgk5xxx":"200"...}`
     * - RDS MySQL集群版实例：`{"只读实例ID":"权重","DBClusterNode":{"主节点ID":"权重","备节点ID":"权重","备节点ID":"权重"...}}`
     *     示例：`{"rr-tfhfgk5****":"200","DBClusterNode":{"rn-2z****":"0","rn-2z****":"400","rn-2z****":"400"...}}`
     *     > **DBClusterNode**为集群版独有的请求信息，包含主备节点的**NodeID**以及**权重**。
     * @example `{"rm-uf6wjk5****":"500","rr-tfhfgk5xxx":"200"...}`
     */
    "ReadOnlyInstanceWeight"?: string;
    /**
     * 操作类型，取值：
     * * **Modify**：默认值，修改代理终端。
     * * **Create**：新建代理终端。
     * * **Delete**：删除代理终端。
     * @example `Modify`
     */
    "DbEndpointOperator"?: string;
    /**
     * 代理终端的备注信息。
     * @example `test-proxy`
     */
    "DbEndpointAliases"?: string;
    /**
     * 代理终端的类型，保留参数，无需设置。
     * @example `RWSplit`
     */
    "DbEndpointType"?: string;
    /**
     * 读写类型，取值：
     * * **ReadWrite**：连接主实例，可接受写请求。
     * * **ReadOnly**：默认值，不连接主实例，无法接受写请求。
     * > * 当**DbEndpointOperator**取值为**Create**时，本参数必须传入。
     * > * RDS MySQL实例中，本参数的取值从**ReadWrite**更换为**ReadOnly**时，会关闭事务拆分功能。
     * @example `ReadWrite`
     */
    "DbEndpointReadWriteMode"?: string;
    /**
     * 废弃参数，无需配置。
     * @example `normal`
     */
    "DBProxyEngineType"?: string;
}
