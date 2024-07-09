export interface ListTagResourcesRequest {
    /**
     * 堡垒机实例的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 资源类型定义。
     * 唯一取值为INSTANCE，表示堡垒机实例。
     * @example `INSTANCE`
     */
    "ResourceType": string;
    /**
     * 下一个查询开始的Token。
     * @example `6EwFJmScBXFFC3nf.9Rq7HzA7APx7GWLbkZbjHrR6Pq39w`
     */
    "NextToken"?: string;
    /**
     * 资源ID。
     * @example `bastionhost-cn-78v1gcxxxxx`
     */
    "ResourceId"?: string[];
    /**
     * 标签列表。
     */
    "Tag"?: {
        /**
         * 标签键。
         * N的取值范围：1~20。
         * @example `test`
         */
        Key: string;
        /**
         * 标签值。
         * N的取值范围：1~20。
         * @example `testapi`
         */
        Value: string;
    }[];
}
