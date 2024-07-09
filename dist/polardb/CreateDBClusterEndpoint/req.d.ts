export interface CreateDBClusterEndpointRequest {
    /**
     * 集群ID。
     * @example `pc-**************`
     */
    "DBClusterId": string;
    /**
     * 自定义集群地址类型，取值固定为**Custom**。
     * @example `Custom`
     */
    "EndpointType": string;
    /**
     * 加入目标地址的读负载节点，多个节点间用英文逗号（,）分隔。 默认为全部节点。
     * > * PolarDB MySQL版需要传入节点ID。
     * >* PolarDB PostgreSQL版和PolarDB PostgreSQL版（兼容Oracle）需要传入节点角色名称，例如`Writer,Reader1,Reader2`。
     * >* **ReadWriteMode**取值为**ReadOnly**时，支持只挂载一个节点。但当此节点故障时，该地址可能会有最多1小时的不可用，请勿用于生产环境。因此，推荐至少选择2个节点，以提升可用性。
     * >* **ReadWriteMode**取值为**ReadWrite**时，至少要选择2个节点。
     *     * PolarDB MySQL版支持选择任意两个节点。当两个节点都是只读节点时，写请求都会发往主节点。
     *     * PolarDB PostgreSQL版和PolarDB PostgreSQL版（兼容Oracle）必须包含主节点。
     * @example `pi-**********,pi-*********`
     */
    "Nodes"?: string;
    /**
     * 读写模式，取值范围如下：
     * - **ReadWrite**：可读可写（自动读写分离）。
     * - **ReadOnly**（默认）：只读。
     * @example `ReadOnly`
     */
    "ReadWriteMode"?: string;
    /**
     * 新节点是否自动加入本地址，取值范围如下：
     * * **Enable**：新节点自动加入本地址。
     * * **Disable**（默认）：新节点不自动加入本地址。
     * @example `Disable`
     */
    "AutoAddNewNodes"?: string;
    /**
     * 集群地址的高级配置，格式为JSON，目前支持设置一致性级别、事务拆分、主库不接受读和连接池。
     * * 设置负载均衡策略。格式为{\"LoadBalancePolicy\":\"负载均衡策略\"}。取值范围如下：
     *    * **0**：基于连接数负载均衡（默认）。
     *    * **1**：基于活跃请求数负载均衡。
     * * 设置一致性级别。格式为`{"ConsistLevel":"一致性级别"}`，取值范围如下：
     *     * **0**：最终一致性。
     *     * **1**：会话一致性（默认值）。
     *     * **2**：全局一致性。
     * * 设置事务拆分。格式为`{"DistributedTransaction":"事务拆分"}`，取值范围如下：
     *     * **on**：开启事务拆分（默认值）。
     *     * **off**：关闭事务拆分。
     * * 设置主库是否接受读。格式为`{"MasterAcceptReads":"主库不接受读"}`，取值范围如下：
     *     * **on**：表示主库接受读。
     *     * **off**：表示主库不接受读（默认值）。
     * * 设置连接池。格式为`{"ConnectionPersist":"连接池"}`，取值范围如下：
     *     * **off**：关闭连接池（默认值）。
     *     * **Session**：开启会话级连接池。
     *     * **Transaction**：开启事务级连接池。
     * * 设置并行查询，格式为{\"MaxParallelDegree\":\"并行查询\"}。取值范围如下：
     *     * 具体的并发数量。示例："MaxParallelDegree":"2"。
     *     * **off**：关闭并行查询（默认）。
     * * 设置行存/列存自动引流，格式为{\"EnableHtapImci\":\"行存/列存自动引流\"}。取值范围如下：
     *     * **on**：开启行存/列存自动引流功能。
     *     * **off**：关闭行存/列存自动引流功能（默认）。
     * * 设置是否开启过载保护，格式为{\"EnableOverloadThrottle\":\"是否开启过载保护\"}。取值范围如下：
     *    * **on**：开启过载保护。
     *    * **off**：关闭过载保护（默认）。
     * > * 仅当PolarDB MySQL版集群地址的读写模式为**可读可写（自动读写分离）**时，支持设置事务拆分、主库是否接受读、连接池和是否开启过载保护。
     * >* 当PolarDB MySQL版集群地址的读写模式为**只读**时，支持**基于连接数负载均衡**和**基于活跃请求数负载均衡**两种负载均衡策略； **可读可写（自动读写分离）模式**的集群地址仅支持**基于活跃请求数负载均衡策略**。
     * >* 当PolarDB MySQL版集群地址的读写模式为**可读可写（自动读写分离）**，或集群地址的读写模式为**只读**且负载均衡策略为**基于活跃请求数负载均衡**时，支持设置行存/列存自动引流。
     * >* 仅PolarDB MySQL版支持将一致性级别设置为全局一致性。
     * >* 如果参数**ReadWriteMode**取值为**ReadOnly**，一致性级别取值只能为**0**。
     * >* 您可以同时设置一致性级别、事务拆分、主库不接受读和连接池，例如`{"ConsistLevel":"1","DistributedTransaction":"on","ConnectionPersist":"Session","MasterAcceptReads":"on"}`。
     * >* 事务拆分的设置受一致性级别设置的约束。例如一致性级别取值为**0**时，不支持开启事务拆分；一致性级别取值为**1**或**2**时，支持开启事务拆分。
     * @example `{"ConsistLevel": "1","DistributedTransaction": "on"}`
     */
    "EndpointConfig"?: string;
    /**
     * 用于保证请求的幂等性，防止重复提交请求。由客户端生成该参数值，保证在不同请求间唯一，大小写敏感、不超过64个ASCII字符。
     * @example `6000170000591aed949d0f******************`
     */
    "ClientToken"?: string;
    /**
     * 自定义集群地址名称。
     * @example `test`
     */
    "DBEndpointDescription"?: string;
}
