export interface ListTagResourcesRequest {
    /**
     * 资源所属的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 下一个查询开始Token。
     * @example `caeba0bbb2be03f84eb48b699f0axxxx`
     */
    "NextToken"?: string;
    /**
     * 资源类型定义。目前仅支持cluster，即E-HPC集群。
     * @example `cluster`
     */
    "ResourceType": string;
    /**
     * 资源ID，最多50个。
     */
    "ResourceId"?: string[];
    /**
     * 标签列表，最多20个。
     */
    "Tag"?: {
        /**
         * 标签键。
         * @example `TestKey`
         */
        Key: string;
        /**
         * 标签值。
         * @example `TestValue`
         */
        Value: string;
    }[];
}
