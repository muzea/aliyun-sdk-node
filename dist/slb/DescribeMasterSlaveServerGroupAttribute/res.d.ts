export interface DescribeMasterSlaveServerGroupAttributeResponse {
    /**
     * 请求ID。
     * @example `9DEC9C28-AB05-4DDF-9A78-6B0******`
     */
    RequestId: string;
    Tags: {
        /**
         * 关联的标签类型。
         */
        Tag: {
            /**
             * 实例的标签键。N的取值范围：**1**~**20**。一旦输入该值，则不允许为空字符串。
             * 最多支持64个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
             * @example `TestKey`
             */
            TagKey: string;
            /**
             * 实例的标签值。N的取值范围：**1**~**20**。一旦输入该值，可以为空字符串。
             * 最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
             * @example `TestValue`
             */
            TagValue: string;
        }[];
    };
    /**
     * 关联的传统型负载均衡实例ID。
     * @example `lb-14fadafw4343a******`
     */
    LoadBalancerId: string;
    /**
     * 主备服务器组的名称。
     * @example `Group1`
     */
    MasterSlaveServerGroupName: string;
    /**
     * 主备服务器组ID。
     * @example `rsp-cige6******`
     */
    MasterSlaveServerGroupId: string;
    MasterSlaveBackendServers: {
        /**
         * 主备服务器组列表。
         */
        MasterSlaveBackendServer: {
            /**
             * 后端服务器类型，取值：
             * * **ecs**（默认）：ECS实例。
             * * **eni**：弹性网卡实例。
             * * **eci**：弹性容器实例。
             * @example `eni`
             */
            Type: string;
            /**
             * 后端服务器的权重。
             * @example `100`
             */
            Weight: number;
            /**
             * 主备服务器组描述。
             * @example `主备服务器组描述。`
             */
            Description: string;
            /**
             * 后端服务器使用的端口。
             * @example `90`
             */
            Port: number;
            /**
             * 后端服务器实例ID。
             * @example `eni-hhshhs****`
             */
            ServerId: string;
            /**
             * 服务器类型，取值：**Master**或**Slave**。
             * @example `Slave`
             */
            ServerType: string;
        }[];
    };
    /**
     * 传统型负载均衡实例创建时间，格式为：`YYYY-MM-DDThh:mm:ssZ`。
     * @example `2022-12-02T02:49:05Z`
     */
    CreateTime: string;
}
