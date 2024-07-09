export interface CreateCustomRoutingEndpointsRequest {
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
     * 待创建终端节点的终端节点组ID。
     * @example `epg-bp1bpn0kn908w4nb****`
     */
    "EndpointGroupId": string;
    /**
     * 终端节点信息。
     * 您最多可输入20个终端节点信息。
     */
    "EndpointConfigurations": {
        /**
         * 终端节点后端服务类型。取值：
         *  **PrivateSubNet**（默认值）：私网CIDR。
         * @example `PrivateSubNet`
         */
        Type: string;
        /**
         * 终端节点交换机（vSwitch）实例ID。
         * @example `vsw-test01`
         */
        Endpoint: string;
        /**
         * 后端服务流量通行策略，取值：
         * - **DenyAll**（默认值）：拒绝所有访问流量访问指定后端服务。
         * - **AllowAll**：允许所有访问流量访问指定后端服务。
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
             * 每个终端节点下，最多可输入20个通行目标的端口范围，每个通行目标最多可输入20个端口范围。
             */
            PortRanges: {
                /**
                 * 指定可以接受访问流量的通行目标的起始端口。该端口取值必须属于终端节点组后端服务端口范围。
                 * 仅当**TrafficToEndpointPolicy**取值为**AllowCustom**时，该项生效。
                 * 每个终端节点下，最多可输入20个通行目标的端口范围，每个通行目标最多可输入20个起始端口。
                 * @example `80`
                 */
                FromPort: number;
                /**
                 * 指定可以接受访问流量的通行目标的结束端口。该端口取值必须属于终端节点组后端服务端口范围。
                 * 仅当**TrafficToEndpointPolicy**取值为**AllowCustom**时，该项生效。
                 * 每个终端节点下，最多可输入20个通行目标的端口范围，每个通行目标最多可输入20个结束端口。
                 * @example `80`
                 */
                ToPort: number;
            }[];
        }[];
    }[];
}
