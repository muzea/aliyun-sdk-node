export interface ListTagResourcesRequest {
    /**
     * 资源类型定义，可取的值有：
     * - ALIYUN::LC::FLOW：逻辑编排工作流
     * @example `ALIYUN::LC::FLOW`
     */
    "ResourceType": string;
    /**
     * 下一个查询开始Token
     * @example `caeba0bbb2be03f84eb48b699f0a4883`
     */
    "NextToken"?: string;
    /**
     * 单页返回最大数
     * @example `20`
     */
    "MaxResults"?: number;
    /**
     * 资源 ID 列表
     */
    "ResourceId"?: string[];
    /**
     * 标签列表。列表最大长度为 20
     */
    "Tag"?: {
        /**
         * 标签键。
         * @example `testkey`
         */
        Key: string;
        /**
         * 标签值。
         * @example `testvalue`
         */
        Value: string;
    }[];
}
