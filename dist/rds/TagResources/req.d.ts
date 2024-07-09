export interface TagResourcesRequest {
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
     * 实例ID。
     * @example `rm-uf6wjk5xxxxxxx`
     */
    "ResourceId": string[];
    /**
     * 标签列表。
     */
    "Tag"?: {
        /**
         * 标签键。可以同时创建N个标签键，N的取值范围：**1**~**20**。不允许传入空字符串。
         * @example `testkey1`
         */
        Key: string;
        /**
         * 标签键对应的标签值。可以同时创建N个标签值，N的取值范围：**1**~**20**。允许传入空字符串。
         * @example `testvalue1`
         */
        Value: string;
    }[];
}
