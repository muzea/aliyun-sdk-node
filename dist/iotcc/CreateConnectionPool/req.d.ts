export interface CreateConnectionPoolRequest {
    /**
     * 云连接器实例ID。
     * @example `iotcc-bp1odcab8tmno0hdq****`
     */
    "IoTCloudConnectorId": string;
    /**
     * 连接地址池的IP数量。取值范围：**1**~**500**。
     * @example `2`
     */
    "Count"?: number;
    /**
     * 连接地址池的名称。
     * 长度为2~128个字符，必须以字母或中文开头，可包含数字、下划线（_）和短划线（-）。但不能以`http:// `或`https://`开头。
     * @example `pool01`
     */
    "ConnectionPoolName"?: string;
    /**
     * 连接地址池的描述信息。
     * 长度为2~256个字符，必须以字母或中文开头，但不能以`http:// `或`https://`开头。
     * @example `pool01`
     */
    "ConnectionPoolDescription"?: string;
    /**
     * 连接地址池所属的CIDR地址块。**N**的取值范围：**1**~**20**。
     * 多个CIDR地址块使用and（&）分隔，格式为`Cidrs.1=CIDR地址块1&Cidrs.2=CIDR地址块2`。
     */
    "Cidrs"?: string[];
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**可能不一样。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * 是否只预检此次请求，取值：
     * - **true**：发送检查请求，不会创建连接地址池。检查项包括是否填写了必需参数、请求格式、业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后直接创建连接地址池。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 云连接器实例所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
