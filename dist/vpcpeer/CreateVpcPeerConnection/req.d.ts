export interface CreateVpcPeerConnectionRequest {
    /**
     * 需要创建VPC对等连接的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 需要创建VPC对等连接发起端的VPC ID。
     * @example `vpc-bp1gsk7h12ew7oegk****`
     */
    "VpcId": string;
    /**
     * 需要创建的VPC对等连接接收端的阿里云账号（主账号）ID。
     * - 输入您的阿里云账号ID，则创建同账号VPC对等连接。
     * - 输入其他阿里云账号ID，则创建跨账号VPC对等连接。
     *
     * > 如果接收端的账号为RAM用户（子账号），则**AcceptingAliUid**需要输入该RAM用户对应的阿里云账号ID。
     * @example `1210123456123456`
     */
    "AcceptingAliUid": number;
    /**
     * 需要创建的VPC对等连接接收端的地域ID。
     * - 创建同地域VPC对等连接时，输入与发起端的地域ID相同的地域ID。
     * - 创建跨地域VPC对等连接时，输入与发起端的地域ID不同的地域ID。
     * @example `cn-hangzhou`
     */
    "AcceptingRegionId": string;
    /**
     * VPC对等连接接收端的VPC ID。
     * @example `vpc-bp1vzjkp2q1xgnind****`
     */
    "AcceptingVpcId": string;
    /**
     * 需要创建的VPC对等连接名称。
     * 名称长度为2~128个字符，以英文字母或中文开头，可包含数字、下划线（_）和短划线（-）。
     * @example `vpcpeer`
     */
    "Name"?: string;
    /**
     * 需要创建的VPC对等连接描述信息。
     * 长度为2～256个字符，必须以字母或中文开头，但不能以`http://`或`https://`开头。
     * @example `description`
     */
    "Description"?: string;
    /**
     * 是否只预检此次请求。取值：
     * - **true**：发送检查请求，不会创建VPC对等连接。检查项包括是否填写了必需参数、请求格式、业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后返回HTTP 2xx状态码并直接进行操作。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**可能不一样。
     * @example `02fb3da4-130e-11e9-8e44-001****`
     */
    "ClientToken"?: string;
    /**
     * 资源组ID。
     * 关于资源组的更多信息，请参见[什么是资源组](~~94475~~)。
     * @example `rg-acfmxazb4ph6aiy****`
     */
    "ResourceGroupId"?: string;
    /**
     * 需要创建的VPC对等连接的带宽值，单位：Mbps，取值范围为大于0的整数。如需指定该参数，请确保您创建的是跨地域的对等连接。
     * @example `100`
     */
    "Bandwidth"?: number;
}
