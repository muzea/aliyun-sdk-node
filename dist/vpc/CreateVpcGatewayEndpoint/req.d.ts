export interface CreateVpcGatewayEndpointRequest {
    /**
     * 要创建网关终端节点的VPC ID。
     * 该VPC必须与网关终端节点在同一个地域。
     * @example `vpc-bp1gsk7h12ew7oegk****`
     */
    "VpcId": string;
    /**
     * 终端节点服务名称。
     * @example `com.aliyun.cn-hangzhou.oss`
     */
    "ServiceName": string;
    /**
     * 云服务的访问策略。
     * 关于访问策略的语法和结构，请参见[权限策略语法和结构](~~93739~~)。
     * @example `{   "Version" : "1",   "Statement" : [ {     "Effect" : "Allow",     "Resource" : [ "*" ],     "Action" : [ "*" ],     "Principal" : [ "*" ]   } ] }`
     */
    "PolicyDocument"?: string;
    /**
     * 网关终端节点的名称。
     * 名称的长度在1~128个字符之间。
     * @example `test`
     */
    "EndpointName"?: string;
    /**
     * 网关终端节点的描述信息。
     * 描述信息的长度在1~255个字符之间。
     * @example `test`
     */
    "EndpointDescription"?: string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `5A2CFF0E-5718-45B5-9D4D-70B3FF3898`
     */
    "ClientToken"?: string;
    /**
     * 是否只预检此次请求，取值：
     * - **true**：发送检查请求，不会创建网关终端节点。检查项包括AccessKey是否有效、RAM用户的授权情况和是否填写了必需参数。如果检查不通过，则返回对应错误。如果检查通过，会返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后返回2xx HTTP状态码并创建网关终端节点。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 网关终端节点所属的资源组ID。
     * @example `rg-acfmxazb4ph****`
     */
    "ResourceGroupId"?: string;
    /**
     * 资源的标签。
     */
    "Tag"?: {
        /**
         * 资源的标签键。最多支持输入20个标签键。如需传入该值，则不能输入空字符串。
         * 一个标签键最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `FinanceDept`
         */
        Key: string;
        /**
         * 资源的标签值。最多支持输入20个标签值。如需传入该值，可以输入空字符串。
         * 最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `FinanceJoshua`
         */
        Value: string;
    }[];
    /**
     * 要创建的网关终端节点的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
}
