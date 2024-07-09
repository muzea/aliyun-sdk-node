export interface UpdateCustomRoutingEndpointGroupDestinationsRequest {
    /**
     * 全球加速实例所在的地域ID，仅取值**cn-hangzhou**。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**可能不一样。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * 是否只预检此次请求。取值：
     * - **true**：发送检查请求，不会修改终端节点组的映射信息。检查项包括是否填写了必需参数、请求格式、业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后返回HTTP 2xx状态码并直接修改终端节点组的映射信息。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 待修改映射信息的终端节点组ID。
     * @example `epg-bp1dmlohjjz4kqaun****`
     */
    "EndpointGroupId": string;
    /**
     * 终端节点组的映射信息配置。
     * 您需要输入终端节点组后端服务端口范围和协议类型，输入信息与关联的监听端口范围将形成映射关系。
     * 单次调用本接口最多可输入20个映射端口范围和协议类型信息。
     */
    "DestinationConfigurations": {
        /**
         * 终端节点组后端服务协议类型。取值：
         * - **TCP**：TCP协议。
         * - **UDP**：UDP协议。
         * - **TCP,UDP**：TCP和UDP协议。
         * 每个终端节点组映射端口范围和协议类型信息中，最多可以输入4个后端服务协议类型。
         */
        Protocols: string[];
        /**
         * 终端节点组后端服务起始端口。
         * 取值范围：**1**~**65499**，且需满足**FromPort**≤**ToPort**，即终端节点组后端服务起始端口需小于等于终端节点组后端服务结束端口。
         * 单次调用本接口最多可输入20条后端服务起始端口信息。
         * @example `80`
         */
        FromPort: number;
        /**
         * 终端节点组后端服务结束端口。
         * 取值范围：**1**~**65499**，且需满足**FromPort**≤**ToPort**，即终端节点组后端服务起始端口需小于等于终端节点组后端服务结束端口。
         * 单次调用本接口最多可输入20条后端服务结束端口信息。
         * @example `80`
         */
        ToPort: number;
        /**
         * 终端节点组的映射信息配置ID。
         * @example `dst-abc123****`
         */
        DestinationId: string;
    }[];
}
