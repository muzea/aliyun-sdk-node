export interface ModifyCustomerGatewayAttributeRequest {
    /**
     * 用户网关所属的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**可能不一样。
     * @example `02fb3da4-130e-11e9-8e44****`
     */
    "ClientToken"?: string;
    /**
     * 用户网关的实例ID。
     * @example `cgw-bp1pvpl9r9adju6l5****`
     */
    "CustomerGatewayId": string;
    /**
     * 用户网关的名称。
     * 名称长度为1～100个字符，不能以`http://`或`https://`开头。
     * @example `nametest`
     */
    "Name"?: string;
    /**
     * 用户网关的描述信息。
     * 描述信息长度为1～100个字符，不能以`http://`或`https://`开头。
     * @example `desctest`
     */
    "Description"?: string;
    /**
     * 本地数据中心网关设备BGP路由协议的认证密钥。
     * 密钥长度为1~64个字符，只支持ASCII字符，不支持空格、中文和半角问号（?）。
     * @example `AuthKey****`
     */
    "AuthKey"?: string;
}
