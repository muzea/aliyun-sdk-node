export interface DeleteDhcpOptionsSetRequest {
    /**
     * 要删除的DHCP选项集所在的地域。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 要删除的DHCP选项集的ID。
     * @example `dopt-o6w0df4epg9zo8isy****`
     */
    "DhcpOptionsSetId": string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**可能不一样。
     * @example `0c593ea1-3bea-11e9-b96b-88e9fe637760`
     */
    "ClientToken"?: string;
    /**
     * 是否只预检此次请求，取值：
     * **true**：发送检查请求，不会删除DHCP选项集。检查项包括是否填写了必需参数、请求格式和限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * **false**（默认值）：发送正常请求，通过检查后直接删除DHCP选项集。
     * @example `false`
     */
    "DryRun"?: boolean;
}
