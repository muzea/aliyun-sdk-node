export interface AssociateVSwitchWithIoTCloudConnectorRequest {
    /**
     * 云连接器实例ID。
     * @example `iotcc-bp1odcab8tmno0hdq****`
     */
    "IoTCloudConnectorId": string;
    /**
     * 云连接器实例需关联的VPC的ID。
     * 如果填写此参数则必须填**VSwitchList**；如果不填，则**VSwitchList**也不填。
     * @example `vpc-bp1aevy8sofi8mh1q****`
     */
    "VpcId": string;
    /**
     * 客户端VPC下的交换机列表，并且交换机的可用区必须和云连接器实例的可用区一致。
     * **N**取值为**2**，表示必须为2个交换机。
     */
    "VSwitchList": string[];
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**可能不一样。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * 是否只预检此次请求，取值：
     * - **true**：发送检查请求，不会将交换机与云连接器实例进行关联。检查项包括是否填写了必需参数、请求格式、业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后直接将交换机与云连接器实例进行关联。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 云连接器实例所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
}
