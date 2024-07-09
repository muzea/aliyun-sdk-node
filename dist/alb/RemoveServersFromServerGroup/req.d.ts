export interface RemoveServersFromServerGroupRequest {
    /**
     * 服务器组ID。
     * @example `sgp-atstuj3rtop****`
     */
    "ServerGroupId": string;
    /**
     * 后端服务器组列表，最多支持200个服务器。
     */
    "Servers": {
        /**
         * 后端服务器使用的端口。取值范围：**1**~**65535**。单次调用最多支持传入200个服务器。
         * > 当**ServerType**取值为**Ecs**、**Eni**、**Eci**、**Ip**时，该参数必传。
         * @example `80`
         */
        Port: number;
        /**
         * 后端服务器ID。单次调用最多支持传入200个服务器。
         * - 当服务器组为**Instance**类型时，该参数为**Ecs**、**Eni**、**Eci**资源ID。
         * - 当服务器组为**Ip**类型时，该参数为IP地址。
         * - 当服务器组为**Fc**类型时，该参数为函数计算的ARN标识。
         * >您可以通过调用[ListServerGroups](~~213627~~)接口获取服务器组类型的取值。
         * @example `i-bp1f9kdprbgy9uiu****`
         */
        ServerId: string;
        /**
         * ENI多IP模式时指定的IP地址。单次调用最多支持传入200个服务器。
         * @example `192.168.1.1`
         */
        ServerIp: string;
        /**
         * 后端服务器类型。单次调用最多支持传入200个服务器。取值：
         * - **Ecs**：ECS实例。
         * - **Eni**：ENI弹性网卡实例。
         * - **Eci**：ECI弹性容器。
         * - **Ip**：IP地址。
         * - **Fc**：函数计算。
         * @example `Ecs`
         */
        ServerType: string;
    }[];
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `593B0448-D13E-4C56-AC0D-FDF0FDE0E9A3`
     */
    "ClientToken"?: string;
    /**
     * 是否只预检此次请求，取值：
     * - **true**：发送检查请求，不会从服务器组中移除后端服务器。检查项包括是否填写了必需参数、请求格式、业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后返回HTTP 2xx状态码并直接进行操作。
     * @example `false`
     */
    "DryRun"?: boolean;
}
