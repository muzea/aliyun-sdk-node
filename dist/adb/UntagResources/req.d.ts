export interface UntagResourcesRequest {
    /**
     * 地域ID。
     * > 您可以调用[DescribeRegions](~~143074~~)接口查看AnalyticDB MySQL版支持的地域和可用区信息，包括地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 资源类型，取值固定为**ALIYUN::ADB::CLUSTER**。
     * @example `ALIYUN::ADB::CLUSTER`
     */
    "ResourceType": string;
    /**
     * 是否解绑实例上的所有标签，默认值为false，取值：
     * - **true**：解绑实例上的所有标签。
     * - **false**：不解绑实例上的所有标签。
     * > 如果同时传入TagKey和本参数，本参数不生效。
     * @example `false`
     */
    "All"?: boolean;
    /**
     * 集群ID，N的取值范围：1~50。
     */
    "ResourceId": string[];
    /**
     * 资源的标签键，N的取值范围：1~20。
     */
    "TagKey"?: string[];
}
