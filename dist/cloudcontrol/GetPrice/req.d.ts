export interface GetPriceRequest {
    /**
     * 请求路径。格式为： /api/v1/providers/{provider}/products/{product}/price/{resourceType}
     * 请求路径中变量说明：
     * provider: 云厂商，目前只支持Aliyun。
     * product: 产品Code。
     * resourceType: 资源Type。以Redis Account为例，resourceType为DBInstance/Account
     * 目前支持询价的资源列表如下：
     * Redis DBInstance: /api/v1/providers/aliyun/products/Redis/price/DBInstance
     * ECS Instance: /api/v1/providers/aliyun/products/ECS/price/Instance
     * RDS DBInstance: /api/v1/providers/aliyun/products/RDS/price/DBInstance
     * SLB LoadBalancer: /api/v1/providers/aliyun/products/SLB/price/LoadBalancer
     * ClickHouse DBCluster: /api/v1/providers/aliyun/products/ClickHouse/price/DBCluster
     * AliKafka Instance: /api/v1/providers/aliyun/products/AliKafka/price/Instance
     * @example `/api/v1/providers/aliyun/products/SLB/price/LoadBalancer`
     */
    "requestPath"?: string;
    /**
     * 地域ID。若云产品是region化产品，则此参数为必填。
     * @example `cn-beijing
    `
     */
    "regionId"?: string;
    /**
     * 询价属性（json格式）。
     * @example `{
            "LoadBalancerName": "cc-test",
            "LoadBalancerSpec": "slb.s3.small",
            "InternetChargeType": "paybybandwidth",
            "AddressType": "internet",
            "PaymentType": "PayAsYouGo",
            "Bandwidth": 6
          }`
     */
    "resourceAttributes"?: any;
}
