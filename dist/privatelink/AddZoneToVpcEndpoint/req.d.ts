export interface AddZoneToVpcEndpointRequest {
    /**
     * 要添加可用区的终端节点所属的地域ID。
     * 您可以通过调用[DescribeRegions](~~120468~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 要添加的可用区ID。
     * @example `cn-hangzhou-b`
     */
    "ZoneId": string;
    /**
     * 要添加的可用区中的交换机，系统会自动在该交换机下创建一个终端节点网卡。
     * @example `vsw-hjkshjvdkdvd****`
     */
    "VSwitchId": string;
    /**
     * 要添加的可用区中的终端节点网卡的IP。
     * @example `192.XX.XX.32`
     */
    "ip"?: string;
    /**
     * 要添加可用区的终端节点的ID。
     * @example `ep-hp33b2e43fays7s8****`
     */
    "EndpointId": string;
    /**
     * 是否只预检此次请求。取值：
     * - **true**：发送检查请求，不会添加可用区。检查项包括是否填写了必需参数、请求格式、业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后返回HTTP 2xx状态码并直接进行操作。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符。
     * @example `0c593ea1-3bea-11e9-b96b-88e9fe637760`
     */
    "ClientToken"?: string;
}
