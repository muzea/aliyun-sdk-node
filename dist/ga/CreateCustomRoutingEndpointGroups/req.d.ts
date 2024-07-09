export interface CreateCustomRoutingEndpointGroupsRequest {
    /**
     * 全球加速实例所在的地域ID，仅取值**cn-hangzhou**。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * 是否只预检此次请求。取值：
     * - **true**：发送检查请求，不会创建自定义路由类型终端节点组。检查项包括是否填写了必需参数、请求格式、业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后返回HTTP 2xx状态码并直接创建自定义路由类型终端节点组。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 全球加速实例ID。
     * @example `ga-bp1odcab8tmno0hdq****`
     */
    "AcceleratorId": string;
    /**
     * 自定义路由类型监听ID。
     * @example `lsr-bp1bpn0kn908w4nbw****`
     */
    "ListenerId": string;
    /**
     * 终端节点组信息。
     * 您最多可以输入5个终端节点组信息。
     */
    "EndpointGroupConfigurations": {
        /**
         * 终端节点组所属地域ID。
         * 您最多可以输入5个终端节点组地域ID。
         * @example `cn-hangzhou`
         */
        EndpointGroupRegion: string;
        /**
         * 终端节点组名称。
         * 名称长度为2~128个字符，以大小写字母或中文开头，可包含数字、下划线（_）和短划线（-）。
         * 最多可以输入5个终端节点组名称。
         * @example `test`
         */
        Name: string;
        /**
         * 终端节点组的描述信息。
         * 描述长度最大256字符，不能包含`http://`和`https://`字符。
         * 最多可以输入5个终端节点组的描述信息。
         * @example `test`
         */
        Description: string;
        /**
         * 终端节点组的映射信息配置。
         * 您需要输入终端节点组后端服务端口范围和协议类型，输入信息与关联的监听端口范围将形成映射关系。
         * 每个终端节点组下，最多可输入20条映射端口范围和协议类型信息。
         */
        DestinationConfigurations: {
            /**
             * 终端节点组后端服务的协议类型。
             * 每个终端节点组映射端口范围和协议类型信息中，最多可以输入4个后端服务协议类型。
             */
            Protocols: string[];
            /**
             * 终端节点组后端服务起始端口。
             * 取值范围：**1**~**65499**，且需满足**FromPort**≤**ToPort**，即终端节点组后端服务起始端口需小于等于终端节点组后端服务结束端口。
             * 每个终端节点组下，最多可输入20条后端服务起始端口信息。
             * @example `80`
             */
            FromPort: number;
            /**
             * 终端节点组后端服务结束端口。
             * 取值范围：**1**~**65499**，且需满足**FromPort**≤**ToPort**，即终端节点组后端服务起始端口需小于等于终端节点组后端服务结束端口。
             * 每个终端节点组下，最多可输入20条后端服务结束端口信息。
             * @example `80`
             */
            ToPort: number;
        }[];
        /**
         * 终端节点信息。
         * 每个终端节点组下，最多可输入10个终端节点信息。
         */
        EndpointConfigurations: {
            /**
             * 终端节点后端服务类型。取值：
             *  **PrivateSubNet**（默认值）：私网CIDR。
             * @example `PrivateSubNet`
             */
            Type: string;
            /**
             * 终端节点交换机（vSwitch）实例名称。
             * @example `vsw-test01`
             */
            Endpoint: string;
            /**
             * 后端服务流量通行策略，取值：
             * - **AllowAll**：允许所有访问流量访问指定后端服务。
             * - **DenyAll**（默认值）：拒绝所有访问流量访问指定后端服务。
             * - **AllowCustom**：指定可以接收访问流量的通行目标。
             * 您需要指定该通信目标的IP地址和端口范围，端口范围输入为空时，表示支持该通行目标的所有端口。
             * @example `DenyAll`
             */
            TrafficToEndpointPolicy: string;
            /**
             * 流量通行目标配置。
             * 每个终端节点下，最多可输入20个通行目标。
             */
            PolicyConfigurations: {
                /**
                 * 指定可以接受访问流量的通行目标IP地址。
                 * 仅当**TrafficToEndpointPolicy**取值为**AllowCustom**时，该项生效。
                 * 每个终端节点下，最多可输入20个通行目标IP地址。
                 * @example `10.0.XX.XX`
                 */
                Address: string;
                /**
                 * 指定可以接受访问流量的通行目标端口范围。该端口范围必须属于终端节点组后端服务端口范围。
                 * 输入为空时，表示支持该通行目标的所有端口。
                 * 仅当**TrafficToEndpointPolicy**取值为**AllowCustom**时，该项生效。
                 * 每个终端节点下，最多可输入20个通行目标的端口范围，每个通行目标最多可输入5个端口范围。
                 */
                PortRanges: {
                    /**
                     * 指定可以接受访问流量的通行目标的起始端口。该端口取值必须属于终端节点组后端服务端口范围。
                     * 仅当**TrafficToEndpointPolicy**取值为**AllowCustom**时，该项生效。
                     * 每个终端节点下，最多可输入20个通行目标的端口范围，每个通行目标最多可输入5个起始端口。
                     * @example `80`
                     */
                    FromPort: number;
                    /**
                     * 指定可以接受访问流量的通行目标的结束端口。该端口取值必须属于终端节点组后端服务端口范围。
                     * 仅当**TrafficToEndpointPolicy**取值为**AllowCustom**时，该项生效。
                     * 每个终端节点下，最多可输入20个通行目标的端口范围，每个通行目标最多可输入5个结束端口。
                     * @example `80`
                     */
                    ToPort: number;
                }[];
            }[];
        }[];
    }[];
}
