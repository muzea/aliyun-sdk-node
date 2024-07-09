export interface DeleteResourceRequest {
    /**
     * 请求路径。格式为：
     * /api/v1/providers/{provider}/products/{product}/resources/{parentResourcePath}/{resourceTypeCode}/{resourceId}
     * 请求路径中变量说明：
     * provider: 云厂商，目前只支持Aliyun。
     * product: 产品Code。
     * parentResourcePath: 父资源路径。以Redis Account为例，Redis DBInstance是Account的父资源，那么parentResourcePath格式为：父资源Code/父资源ID（DBInstance/r-8vbf5abe31c9****）。
     * resourceTypeCode: 资源Code。资源Code为资源类型resourceType（父资源Code/子资源Code）的后一部分。以Redis Account为例，resourceType为DBInstance/Account，resourceTypeCode为Account。
     * resourceId: 资源ID。
     * 示例如下：
     * Redis DBInstance: /api/v1/providers/Aliyun/products/Redis/resources/DBInstance/r-8vbf5abe31c9****
     * Redis Account: /api/v1/providers/Aliyun/products/Redis/resources/Instance/r-8vbf5abe31cxxxxx/Account/cctest****
     * ECS Instance: /api/v1/providers/Aliyun/products/ECS/resources/Instance/i-123****
     * RDS Instance: /api/v1/providers/Aliyun/products/RDS/resources/DBInstance/r-123****
     * VPC VPC: /api/v1/providers/Aliyun/products/VPC/resources/VPC/vpc-123****
     * SLB LoadBalancer: /api/v1/providers/Aliyun/products/SLB/resources/LoadBalancer/lb-123****
     * OSS Bucket: /api/v1/providers/Aliyun/products/OSS/resources/Bucket/cctest****
     * @example `/api/v1/providers/Aliyun/products/Redis/resources/Instance/r-8vbf5abe31cxxxxx/Account/cctest`
     */
    "requestPath"?: string;
    /**
     * 地域ID。若云产品是region化产品，则此参数为必填。
     * @example `cn-beijing
    `
     */
    "regionId"?: string;
    /**
     * 幂等参数。若云产品支持幂等能力，则传入生效。
     * @example `1e810dfe1468721d0664a49b9d9f74f4
    `
     */
    "clientToken"?: string;
}
