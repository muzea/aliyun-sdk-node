export interface GetResourceTypeRequest {
    /**
     * 选择返回产品的语言。
     * zh_CH：中文 （默认）
     * en_US：英文。
     * @example `zh_CH`
     */
    "x-acs-accept-language"?: string;
    /**
     * 请求路径。格式为：
     * /api/v1/providers/{provider}/products/{product}/resourceTypes/{resourceType}
     * 请求路径中变量说明：
     * provider: 云厂商，目前只支持Aliyun。
     * product: 产品Code。
     * resourceType: 资源类型。
     * 示例如下：
     * Redis DBInstance: /api/v1/providers/Aliyun/products/Redis/resourceTypes/DBInstance
     * Redis Account: /api/v1/providers/Aliyun/products/Redis/resourceTypes/DBInstance/Account
     * @example `/api/v1/providers/Aliyun/products/Redis/resourceTypes/DBInstance`
     */
    "requestPath"?: string;
}
