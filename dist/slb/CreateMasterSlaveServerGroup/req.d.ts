export interface CreateMasterSlaveServerGroupRequest {
    /**
     * 传统型负载均衡实例的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 传统型负载均衡实例ID。
     * @example `lb-bp1hv944r69al4j******`
     */
    "LoadBalancerId": string;
    /**
     * 主备服务器组名称。
     * @example `Group1`
     */
    "MasterSlaveServerGroupName"?: string;
    /**
     * 主备服务器组列表。一个主备服务器组只能包含2个后端服务器。
     * 包含以下参数：
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
     * * **ServerType**：String类型，表示后端服务器的主备类型，取值：
     *   * **Master**：主服务器。
     *   * **Slave**：备服务器。
     * @example `[{ "ServerId": "i-xxxxxxxxx", "Weight": "100", "Type": "ecs",  "Port":"82","ServerType":"Master","Description":"test-112" },  { "ServerId": "i-xxxxxxxxx", "Weight": "100", "Type": "ecs",  "Port":"84","ServerType":"Slave","Description":"test-112" }]`
     */
    "MasterSlaveBackendServers"?: string;
    /**
     * 标签列表。
     */
    "Tag"?: {
        /**
         * 资源标签键。N的取值范围：**1**~**20**。一旦输入该值，则不允许为空字符串。
         * 最多支持64个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `test`
         */
        Key: string;
        /**
         * 资源的标签值。N的取值范围：**1~20**。一旦输入该值，可以为空字符串。
         * 最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `1`
         */
        Value: string;
    }[];
}
