export interface ReplaceServersInServerGroupRequest {
    /**
     * 服务器组ID。
     * >函数计算类型的服务器组不支持替换后端服务器。
     * @example `sgp-5114d593o96qxy****`
     */
    "ServerGroupId": string;
    /**
     * 待添加的后端服务器列表，单次调用最多支持传入200个服务器。
     */
    "AddedServers": {
        /**
         * 后端服务器描述。长度为2~256个字符，支持中文和大小写英文字母，可包含数字、半角句号（.）、下划线（_）、短划线（-）、半角逗号（,）、半角分号（;）、正斜线（/）和at（@）。单次调用最多支持传入200个服务器。
         * @example `test`
         */
        Description: string;
        /**
         * 后端服务器组使用的端口。取值范围：**1**~**65535**。单次调用最多支持传入200个服务器。
         * @example `80`
         */
        Port: number;
        /**
         * 后端服务器ID。单次调用最多支持传入200个服务器。
         * - 当服务器组为**Instance**类型时，该参数为**Ecs**、**Eni**、**Eci**资源ID。
         * - 当服务器组为**Ip**类型时，该参数为IP地址。
         * >函数计算类型的服务器组不支持替换后端服务器。您可以通过调用[ListServerGroups](~~213627~~)接口获取服务器组类型的取值。
         * @example `i-bp1f9kdprbgy9uiu****`
         */
        ServerId: string;
        /**
         * ENI多IP模式时指定的IP地址。单次调用最多支持传入200个服务器。
         * @example `192.168.1.1`
         */
        ServerIp: string;
        /**
         * 后端服务器类型，单次调用最多支持传入200个服务器。取值：
         * - **Ecs**：ECS实例。
         * - **Eni**：ENI弹性网卡实例。
         * - **Eci**：ECI弹性容器。
         * @example `Ecs`
         */
        ServerType: string;
        /**
         * 后端服务器的权重，单次调用最多支持传入200个服务器。
         * 取值：**0**~**100**。默认值：**100**。如果设置权重为**0**，则不会将请求转发给该后端服务器。
         * @example `100`
         */
        Weight: number;
    }[];
    /**
     * 待删除的后端服务器。
     */
    "RemovedServers": {
        /**
         * 后端服务器ID。单次调用最多支持传入200个服务器。
         * - 当服务器组为**Instance**类型时，该参数为**Ecs**、**Eni**、**Eci**资源ID。
         * - 当服务器组为**Ip**类型时，该参数为IP地址。
         * >函数计算类型的服务器组不支持替换后端服务器。您可以通过调用[ListServerGroups](~~213627~~)接口获取服务器组类型的取值。
         * @example `i-bp1f9kdprbgy9uiu****`
         */
        ServerId: string;
        /**
         * ENI多IP模式时指定的IP地址。单次调用最多支持传入200个服务器。
         * @example `192.168.1.12`
         */
        ServerIp: string;
        /**
         * 后端服务器类型，单次调用最多支持传入200个服务器。取值：
         * - **Ecs**：ECS实例。
         * - **Eni**：ENI弹性网卡实例。
         * - **Eci**：ECI弹性容器。
         * @example `ecs`
         */
        ServerType: string;
        /**
         * 后端服务器使用的端口。取值范围：**1**~**65535**。单次调用最多支持传入200个服务器。
         * @example `81`
         */
        Port: number;
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
     * - **true**：发送检查请求，不会替换服务器组中的后端服务器。检查项包括是否填写了必需参数、请求格式、业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后返回`HTTP 2xx`状态码并直接进行操作。
     * @example `true`
     */
    "DryRun"?: boolean;
}
