export interface ListTagResourcesRequest {
    /**
     * 实例所属的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 资源类型，取值固定为**INSTANCE**。
     * @example `INSTANCE`
     */
    "ResourceType": string;
    /**
     * 下一个查询开始Token，用来返回更多结果。
     * > 第一次查询不需要提供本参数，如果一次查询没有返回全部结果，则可在后续查询中传入前一次返回的**NextToken**值以继续查询。
     * @example `212db86sca4384811e0b5e8707ec2****`
     */
    "NextToken"?: string;
    /**
     * 实例ID列表。
     * > * 本参数和**Tag**参数两者中必须传入一项。
     * @example `r-bp1zxszhcgatnx****`
     */
    "ResourceId"?: string[];
    /**
     * 实例的标签信息。本参数和**ResourceId**参数两者中必须传入一项。
     */
    "Tag"?: {
        /**
         * 标签的键。
         * @example `demokey`
         */
        Key: string;
        /**
         * 标签的值。
         * @example `demovalue`
         */
        Value: string;
    }[];
}
