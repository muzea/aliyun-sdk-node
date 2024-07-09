export interface UntagResourcesRequest {
    /**
     * 地域ID。取值：
     * - 对于中心化部署的云服务，您可以填写通用地域`cn-hangzhou`，或者参照[标签支持的中心化云服务的对应地域](~~2579691~~)填写资源对应的地域ID。
     * - 对于非中心化部署的云服务，您需要填写资源所属的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 资源ARN（Aliyun Resource Name）。
     * @example `arn:acs:vpc:cn-hangzhou:123456789****:vpc/vpc-bp19dd90tkt6tz7wu****`
     */
    "ResourceARN": string[];
    /**
     * 标签键。
     * N的取值范围：1~10。
     * @example `k1`
     */
    "TagKey": string[];
}
