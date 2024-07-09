export interface AddServersToServerGroupRequest {
    /**
     * 服务器组ID。
     * @example `sgp-atstuj3rtoptyui****`
     */
    "ServerGroupId": string;
    /**
     * 后端服务器列表。
     * > 单次调用最多支持传入200个服务器。
     */
    "Servers": {
        /**
         * 后端服务器ID。
         * - 当服务器组为**Instance**类型时，该参数为**Ecs**、**Eni**、**Eci**的资源ID。
         * - 当服务器组为**Ip**类型时，该参数为IP地址。
         * @example `i-bp67acfmxazb4p****`
         */
        ServerId: string;
        /**
         * 后端服务器类型，取值：
         * - **Ecs**：ECS实例。
         * - **Eni**：ENI弹性网卡实例。
         * - **Eci**：ECI弹性容器。
         * - **Ip**：Ip地址。
         * @example `Ecs`
         */
        ServerType: string;
        /**
         * 服务器IP地址。当服务器组为**Ip**类型时，必须指定IP地址。
         * @example `192.168.6.6`
         */
        ServerIp: string;
        /**
         * 后端服务器使用的端口。端口范围**0~65535**，不填则默认传入端口值**0**。
         * 当服务器组开启全端口转发后，添加后端服务器时无需指定端口（默认传入0），NLB将按照前端请求端口转发流量至后端服务器。您可以通过[ListServerGroups](~~445895~~)接口返回的**AnyPortEnabled**字段查询是否开启了全端口转发。
         * @example `443`
         */
        Port: number;
        /**
         * 后端服务器的权重，取值范围：**0**~**100**。默认值为**100**。如果设置权重为**0**，则不会将请求转发给该后端服务器。
         * @example `100`
         */
        Weight: number;
        /**
         * 服务器描述信息。
         * 长度限制为2-256个字符，可包含英文字母、数字、中文、半角逗号（,）、半角句号（.）、半角分号（;）、正斜线（/）、at（@）、下划线（_）和短划线（-）。
         * @example `ECS`
         */
        Description: string;
    }[];
    /**
     * 网络型负载均衡实例所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~443657~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 是否只预检此次请求。取值：
     * - **true**：发送检查请求，不会添加服务器。检查项包括是否填写了必需参数、请求格式、业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后返回HTTP 2xx状态码并直接进行操作。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**可能不一样。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
}
