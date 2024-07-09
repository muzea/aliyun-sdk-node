export interface UntagResourcesRequest {
    /**
     * 地域ID。
     * > 可通过接口[DescribeRegions](~~98041~~)查看可用的地域。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 资源类型，取值固定为**cluster**。
     * @example `cluster`
     */
    "ResourceType": string;
    /**
     * 是否解绑全部标签，取值为**true**或**false**，默认值为**false**。
     * > 仅当`TagKey.n`取值为空时该参数生效。
     * @example `true`
     */
    "All"?: boolean;
    /**
     * 目标集群ID。
     * @example `pc-***************`
     */
    "ResourceId": string[];
    /**
     * 标签键。
     * @example `type`
     */
    "TagKey"?: string[];
}
