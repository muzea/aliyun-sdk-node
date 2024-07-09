export interface AddVServerGroupBackendServersRequest {
    /**
     * 负载均衡实例的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 虚拟服务器组ID。
     * @example `rsp-cige6******`
     */
    "VServerGroupId": string;
    /**
     * 要添加的后端服务器列表，包含以下参数：
     * - **ServerId**：String类型，必选，后端服务器的实例ID，分为ECS实例ID、ENI实例ID和ECI实例ID，当**ServerId**参数值为ENI实例ID或ECI实例ID时，**Type**参数值必选。
     * - **Weight**：后端服务器的权重，取值：**0**~**100**。默认值：**100**。
     * 如果值为0，则不会将请求转发给该后端服务器。
     * - **Description**：String类型，非必选，后端服务器描述，长度为1~80个字符，支持中文、字母、数字、短划线（-）、正斜线（/）、半角句号（.）和下划线（_）。
     * - **Type**：后端服务器类型，取值：
     *     - **ecs**：ECS实例（默认）。
     *
     *     - **eni**：弹性网卡实例。
     *     - **eci**：弹性容器实例。
     * > 只有性能保障型实例支持添加eni和eci类型的后端服务器。
     * *  **ServerIp**：ENI或ECI的实例IP。
     * *  **Port**：用来接收请求的后端端口。
     * 示例说明如下：
     * * 挂载ECS示例：
     *
     *   `[{ "ServerId": "i-xxxxxxxxx", "Weight": "100", "Type": "ecs",  "Port":"80","Description":"test-112" }]`
     * * 挂载ENI：
     *   `[{ "ServerId": "eni-xxxxxxxxx", "Weight": "100", "Type": "eni", "ServerIp": "192.168.**.**", "Port":"80","Description":"test-112" }]`
     * *  挂载ENI多IP：
     *    `[{ "ServerId": "eni-xxxxxxxxx", "Weight": "100", "Type": "eni", "ServerIp": "192.168.**.**", "Port":"80","Description":"test-113" },{ "ServerId": "eni-xxxxxxxxx", "Weight": "100", "Type": "eni", "ServerIp": "172.166.**.**", "Port":"80","Description":"test-113" }]`
     * * 挂载ECI：
     *   `[{ "ServerId": "eci-xxxxxxxxx", "Weight": "100", "Type": "eci", "ServerIp": "192.168.**.**", "Port":"80","Description":"test-114" }]`
     * > 必须是状态为运行中的后端服务器才可以加入负载均衡实例，每次调用最多可添加20个后端服务器。
     * @example `[{ "ServerId": "eni-xxxxxxxxx", "Weight": "100", "Type": "eni", "ServerIp": "192.168.**.**", "Port":"80","Description":"test-112" },{ "ServerId": "eni-xxxxxxxxx", "Weight": "100", "Type": "eni", "ServerIp": "172.166.**.**", "Port":"80","Description":"test-113" }]`
     */
    "BackendServers": string;
}
