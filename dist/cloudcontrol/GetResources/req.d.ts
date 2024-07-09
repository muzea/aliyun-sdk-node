export interface GetResourcesRequest {
    /**
     * 请求路径。根据不同的请求路径，用户可分别调用资源List和Get能力。
     * 1.List: /api/v1/providers/{provider}/products/{product}/resources/{parentResourcePath}/{resourceTypeCode}
     * 2.Get: /api/v1/providers/{provider}/products/{product}/resources/{parentResourcePath}/{resourceTypeCode}/{resourceId}
     * 请求路径中变量说明：
     * provider: 云厂商，目前只支持Aliyun。
     * product: 产品Code。
     * parentResourcePath: 父资源路径。以Redis Account为例，Redis DBInstance是Account的父资源，那么parentResourcePath格式为：父资源Code/父资源ID（DBInstance/r-8vbf5abe31c9****）。
     * resourceTypeCode: 资源Code。资源Code为资源类型resourceType（父资源Code/子资源Code）的后一部分。以Redis Account为例，resourceType为DBInstance/Account，resourceTypeCode为Account。
     * resourceId: 资源ID。
     * 示例如下：
     * Redis DBInstance List: /api/v1/providers/Aliyun/products/Redis/resources/DBInstance
     * Redis DBInstance Get: /api/v1/providers/Aliyun/products/Redis/resources/Instance/r-8vbf5abe31cxxxxx
     * ECS Instance List: /api/v1/providers/Aliyun/products/ECS/resources/Instance
     * ECS Instance Get: /api/v1/providers/Aliyun/products/ECS/resources/Instance/i-123****
     * RDS Instance List: /api/v1/providers/Aliyun/products/RDS/resources/DBInstance
     * RDS Instance Get: /api/v1/providers/Aliyun/products/RDS/resources/DBInstance/r-123****
     * VPC VPC List: /api/v1/providers/Aliyun/products/VPC/resources/VPC
     * VPC VPC Get: /api/v1/providers/Aliyun/products/VPC/resources/VPC/vpc-123****
     * SLB LoadBalancer List: /api/v1/providers/Aliyun/products/SLB/resources/LoadBalancer
     * SLB LoadBalancer Get: /api/v1/providers/Aliyun/products/SLB/resources/LoadBalancer/lb-123****
     * OSS Bucket List: /api/v1/providers/Aliyun/products/OSS/resources/Bucket
     * OSS Bucket Get: /api/v1/providers/Aliyun/products/OSS/resources/Bucket/cctest****
     * @example `/api/v1/providers/Aliyun/products/Redis/resources/DBInstance/r-8vbf5abe31c9****`
     */
    "requestPath"?: string;
    /**
     * 地域ID。若云产品是region化产品，则此参数为必填。
     * @example `cn-beijing
    `
     */
    "regionId"?: string;
    /**
     * 过滤条件。json格式，可以将部分资源属性作为过滤条件。
     */
    "filter"?: any;
    /**
     * 用来标记当前开始读取的位置，置空表示从头开始。
     * @example `AAAAAdDWBF2****`
     */
    "nextToken"?: string;
    /**
     * 分页查询时每页行数，最大不能超过100。
     * @example `10`
     */
    "maxResults"?: number;
}
