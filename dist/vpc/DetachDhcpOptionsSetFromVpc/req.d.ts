export interface DetachDhcpOptionsSetFromVpcRequest {
    /**
     * DHCP选项集所在的地域。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 要与VPC取消关联的DHCP选项集的ID。
     * @example `dopt-o6w0df4epg9zo8isy****`
     */
    "DhcpOptionsSetId": string;
    /**
     * 要与DHCP选项集取消关联的VPC的ID。
     * @example `vpc-dfdgrgthhy****`
     */
    "VpcId": string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**可能不一样。
     * @example `0c593ea1-3bea-11e9-b96b-88e9fe637760`
     */
    "ClientToken"?: string;
    /**
     * 是否只预检此次请求，取值：
     * **true**：发送检查请求，不会取消DHCP选项集与VPC的关联。检查项包括AccessKey是否有效、RAM用户的授权情况和是否填写了必需参数。如果检查不通过，则返回对应错误。如果检查通过，会返回错误码`DryRunOperation`。
     * **false**（默认值）：发送正常请求，通过检查后返回2XX HTTP状态码并取消DHCP选项集与VPC的关联。
     * @example `false`
     */
    "DryRun"?: boolean;
}
