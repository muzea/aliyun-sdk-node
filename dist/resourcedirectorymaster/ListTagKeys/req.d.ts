export interface ListTagKeysRequest {
    /**
     * 下一个查询开始的Token。
     * @example `TGlzdFJlc291cm****`
     */
    "NextToken"?: string;
    /**
     * 单次请求返回结果的最大条数。
     * 取值范围：1~100。默认值：10。
     * @example `10`
     */
    "MaxResults"?: number;
    /**
     * 资源类型。
     * 取值：Account，表示资源目录的成员。
     * @example `Account`
     */
    "ResourceType": string;
    /**
     * 模糊查询的标签键。
     * @example `team`
     */
    "KeyFilter"?: string;
}
