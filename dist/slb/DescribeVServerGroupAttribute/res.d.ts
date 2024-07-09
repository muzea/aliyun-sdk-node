export interface DescribeVServerGroupAttributeResponse {
    /**
     * 虚拟服务器组ID。
     * @example `rsp-cige6****`
     */
    VServerGroupId: string;
    /**
     * 虚拟服务器组的名称。
     * @example `Group1`
     */
    VServerGroupName: string;
    /**
     * 请求ID。
     * @example `9DEC9C28-AB05-4DDF-9A78-6B******`
     */
    RequestId: string;
    /**
     * 传统型负载均衡实例ID。
     * @example `lb-jfakd****`
     */
    LoadBalancerId: string;
    BackendServers: {
        /**
         * 后端服务器列表。
         */
        BackendServer: {
            /**
             * 后端服务器类型，取值：
             * - **ecs**：ECS实例（默认）。
             * - **eni**：弹性网卡实例。
             * - **eci**：弹性容器实例。
             * @example `ecs`
             */
            Type: string;
            /**
             * 后端服务器的权重。
             * @example `100`
             */
            Weight: number;
            /**
             * 服务器组描述。
             * > 若用户未设置Description，则该参数不返回。
             * @example `服务器组描述。`
             */
            Description: string;
            /**
             * 后端服务器实例IP。
             * @example `192.XX.XX.11`
             */
            ServerIp: string;
            /**
             * 后端服务器使用的端口。
             * @example `90`
             */
            Port: number;
            /**
             * 后端服务器实例ID。
             * @example `vm-233`
             */
            ServerId: string;
        }[];
    };
    /**
     * 传统型负载均衡实例的创建时间，格式：`YYYY-MM-DDThh:mm:ssZ`。
     * @example `2022-08-31T02:49:05Z`
     */
    CreateTime: string;
    Tags: {
        /**
         * 服务器上配置的标签。
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
}
