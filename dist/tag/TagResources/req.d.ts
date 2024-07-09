export interface TagResourcesRequest {
    /**
     * 地域ID。取值：
     * - 对于中心化部署的云服务，您可以填写通用地域`cn-hangzhou`，或者参照[标签支持的中心化云服务的对应地域](~~2579691~~)填写资源对应的地域ID。
     * - 对于非中心化部署的云服务，您需要填写资源所属的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 标签键和标签值。键值对取值范围：1~10。
     * 如果指定多个标签，则会为指定资源同时创建并绑定该多个标签。
     * 约束如下：
     * - 标签键长度范围：1~128个字符。
     * - 标签值长度范围：1~128个字符。
     * - 区分大小写。
     * - 同一个资源上的同一个标签键只能对应一个标签值。如果您尝试添加已有标签键，则对应的标签值会更新为新值。
     * @example `{"k1":"v1","k2":"v2"}`
     */
    "Tags": string;
    /**
     * 资源ARN（Aliyun Resource Name）。
     * @example `arn:acs:vpc:cn-hangzhou:123456789****:vpc/vpc-bp19dd90tkt6tz7wu****`
     */
    "ResourceARN": string[];
}
