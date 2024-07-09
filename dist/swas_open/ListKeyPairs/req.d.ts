export interface ListKeyPairsRequest {
    /**
     * 地域ID。您可以调用[ListRegions](~~189315~~)查询可用地域。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符，且不能超过64个字符。更多详情，请参见[如何保证幂等性](~~25693~~)。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * 密钥对名称。长度为2~64个英文或中文字符。必须以大小写字母或中文开头，不能以http://或https://开头。可以包含数字、半角冒号（:）、下划线（_）或者短划线（-）。
     * @example `KeyPairName`
     */
    "KeyPairName"?: string;
    /**
     * 密钥对列表的页码。起始值：1。默认值：1 。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页的返回结果个数。
     * @example `10`
     */
    "PageSize"?: number;
}
