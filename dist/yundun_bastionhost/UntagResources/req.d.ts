export interface UntagResourcesRequest {
    /**
     * 要查询堡垒机实例的地域ID。
     * > 地域ID和地域名称的对应关系，请参见[地域和可用区](~~40654~~)。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 资源类型定义。
     * 唯一取值为**INSTANCE**，表示堡垒机实例。
     * @example `INSTANCE`
     */
    "ResourceType": string;
    /**
     * 设置是否删除堡垒机实例上的全部标签。
     * - 设置TagKey.N时，All的值只能设置为**false**，删除某个标签。
     * - 未设置TagKey.N时，All设置为**true**，删除所有的标签。All设置为**false**，不删除标签。
     * @example `false`
     */
    "All"?: boolean;
    /**
     * 实例ID。
     * N的取值范围：1~20。
     * > 可通过调用[DescribeInstances](~~153281~~)接口获取堡垒机实例ID。
     */
    "ResourceId": string[];
    /**
     * 实例的标签键。
     * N的取值范围：1~20。
     */
    "TagKey"?: string[];
}
