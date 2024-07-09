export interface CreateEnterpriseCodeRequest {
    /**
     * 地域ID。
     * 您可以调用[DescribeRegions](~~69813~~)查询智能接入网关支持的地域及对应的地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 企业码。
     * 企业码长度为5个字符，必须包含字母和数字，字母可以是大写或者小写。企业码必须与其他企业码不重复，保证全球唯一。
     * @example `12P**`
     */
    "EnterpriseCode": string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**可能不一样。
     * @example `02fb3da4****	`
     */
    "ClientToken"?: string;
}
