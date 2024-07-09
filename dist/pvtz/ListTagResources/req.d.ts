export interface ListTagResourcesRequest {
    /**
     * 部分返回参数语言。取值范围：en、zh、ja
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 资源类型：ZONE
     * @example `ZONE`
     */
    "ResourceType": string;
    /**
     * 下一个查询开始Token
     * @example `234235354`
     */
    "NextToken"?: string;
    /**
     * 相当于PageSize，查询展示数量。默认为20，取值范围`[1,200]`
     * @example `20`
     */
    "Size"?: number;
    /**
     * 资源ID列表，即ZoneId列表。传入内容数量最大值为50
     * @example `97fe9321a476d0861f624d3f738dcc38`
     */
    "ResourceId"?: string[];
    /**
     * 标签列表。
     */
    "Tag"?: {
        /**
         * 资源标签键
         * @example `env`
         */
        Key: string;
        /**
         * 资源标签值
         * @example `daily`
         */
        Value: string;
    }[];
}
