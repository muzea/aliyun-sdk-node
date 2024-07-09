export interface UpdateCustomRoutingEndpointTrafficPoliciesRequest {
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
     * 待修改流量通行目标的终端节点ID。
     * @example `ep-2zewuzypq5e6r3pfh****`
     */
    "EndpointId": string;
    /**
     * 流量通行目标配置。
     * 每个终端节点下，最多可输入500个通行目标。
     */
    "PolicyConfigurations": {
        /**
         * 待修改的流量通行目标ID。
         * > 该参数为必选参数。
         * @example `ply-bptest2****`
         */
        PolicyId: string;
        /**
         * 指定可以接受访问流量的通行目标IP地址。
         * 仅当**TrafficToEndpointPolicy**（后端服务流量通行策略）取值为**AllowCustom**（指定可以接收访问流量的通行目标）时，该项生效。您可以通过[DescribeCustomRoutingEndpoint](~~449386~~)查询指定终端节点的后端服务流量通行策略。
         * 每个终端节点下，最多可输入500个通行目标IP地址。
         * > 该参数为必选参数。
         * @example `10.0.XX.XX`
         */
        Address: string;
        /**
         * 指定可以接受访问流量的通行目标端口范围。该端口范围必须属于终端节点组后端服务端口范围。
         * 输入为空时，表示支持该通行目标的所有端口。
         * 仅当**TrafficToEndpointPolicy**（后端服务流量通行策略）取值为**AllowCustom**（指定可以接收访问流量的通行目标）时，该项生效。您可以通过[DescribeCustomRoutingEndpoint](~~449386~~)查询指定终端节点的后端服务流量通行策略。
         * 每个终端节点下，最多可输入500个通行目标的端口范围，每个通行目标最多可输入10个端口范围。
         */
        PortRanges: {
            /**
             * 指定可以接受访问流量的通行目标的起始端口。该端口取值必须属于终端节点组后端服务端口范围。
             * 仅当**TrafficToEndpointPolicy**（后端服务流量通行策略）取值为**AllowCustom**（指定可以接收访问流量的通行目标）时，该项生效。您可以通过[DescribeCustomRoutingEndpoint](~~449386~~)查询指定终端节点的后端服务流量通行策略。
             * 起始端口和结束端口输入为空时，表示支持该通行目标的所有端口。
             * 每个终端节点下，最多可输入500个通行目标的端口范围，每个通行目标最多可输入10个起始端口。
             * @example `80`
             */
            FromPort: number;
            /**
             * 指定可以接受访问流量的通行目标的结束端口。该端口取值必须属于终端节点组后端服务端口范围。
             * 仅当**TrafficToEndpointPolicy**（后端服务流量通行策略）取值为**AllowCustom**（指定可以接收访问流量的通行目标）时，该项生效。您可以通过[DescribeCustomRoutingEndpoint](~~449386~~)查询指定终端节点的后端服务流量通行策略。
             * 起始端口和结束端口输入为空时，表示支持该通行目标的所有端口。
             * 每个终端节点下，最多可输入500个通行目标的端口范围，每个通行目标最多可输入10个结束端口。
             * @example `80`
             */
            ToPort: number;
        }[];
    }[];
}
