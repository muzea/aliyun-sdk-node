export interface CreateIpv4GatewayRequest {
    /**
     * 创建的IPv4网关的名称。
     * 名称长度为1～128个字符，不能以`http://`或`https://`开头。
     * @example `ipv4`
     */
    "Ipv4GatewayName"?: string;
    /**
     * 创建的IPv4网关的描述信息。
     * 描述长度为1～256个字符，不能以`http://`或`https://`开头。
     * @example `test`
     */
    "Ipv4GatewayDescription"?: string;
    /**
     * 创建的IPv4网关所在VPC的ID。
     * 一个VPC仅支持创建一个IPv4网关。
     * IPv4网关属于VPC高级功能。当VPC不支持该高级功能（不支持创建IPv4网关）时，您需要联系阿里云工程师处理。
     * @example `vpc-5tss06uvoyps5xoya****`
     */
    "VpcId": string;
    /**
     * 是否只预检此次请求。取值：
     * - **true**：发送检查请求，不会创建IPv4网关。检查项包括是否填写了必需参数、请求格式、业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后返回HTTP 2xx状态码并直接创建IPv4网关。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * 创建IPv4网关的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `ap-southeast-6`
     */
    "RegionId": string;
    /**
     * 资源组ID。
     * @example `rg-acfmxazb4ph6aiy****`
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
}
