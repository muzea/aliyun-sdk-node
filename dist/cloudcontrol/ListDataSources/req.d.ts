export interface ListDataSourcesRequest {
    /**
     * 请求路径。格式为：
     *  /api/v1/providers/{provider}/products/{product}/dataSources/{resourceType}
     * 请求路径中变量说明：
     * provider: 云厂商，目前只支持Aliyun。
     * product: 产品Code。
     * resourceType: 资源类型。
     * 示例如下：
     * Redis DBInstance: /api/v1/providers/Aliyun/products/Redis/dataSources/DBInstance
     * @example `/api/v1/providers/Aliyun/products/Redis/dataSources/DBInstance`
     */
    "requestPath"?: string;
    /**
     * 属性名称（当前支持RegionId）。
     * @example `RegionId`
     */
    "attributeName": string;
    /**
     * 指定过滤条件。json格式：{"key1":"value1"}。
     */
    "filter"?: any;
}
