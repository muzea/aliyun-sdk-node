export interface UntagResourcesRequest {
    /**
     * 地域ID，可以通过接口DescribeRegions查看可用的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 资源类型定义。唯一取值：**INSTANCE**。
     * @example `INSTANCE`
     */
    "ResourceType": string;
    /**
     * 是否删除实例的全部标签。取值：
     * * **true**
     * * **false**
     * 默认值：**false**。
     * >未传入**TagKey.N**时该参数有效。
     * @example `false`
     */
    "All"?: boolean;
    /**
     * 实例ID列表。可以同时对N个实例解绑标签，N的取值范围：**1**~**50**。
     * @example `rm-uf6wjk5xxxxxxx`
     */
    "ResourceId": string[];
    /**
     * 标签键列表。可以同时删除N个标签键，N的取值范围：**1**~**20**。不允许传入空字符串。
     * @example `testkey1`
     */
    "TagKey"?: string[];
}
