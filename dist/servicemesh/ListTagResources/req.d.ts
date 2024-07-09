export interface ListTagResourcesRequest {
    /**
     * 服务网格所在地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 系统规定参数，固定为`servicemesh`。
     * @example `servicemesh`
     */
    "ResourceType": string;
    /**
     * 网格实例ID列表。
     */
    "ResourceId"?: string[];
    /**
     * 标签列表，最多包含20个子项。
     */
    "Tag"?: {
        /**
         * 标签键。
         * 最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `test`
         */
        Key: string;
        /**
         * 资源的标签值。
         * 标签值可以为空或输入不超过128个字符的字符串，不能以aliyun或者acs:开头，不能包含http://或者https://。
         * 每一个标签键对应一个标签值，一次最多支持输入20个标签键对应的标签值。
         * @example `yahaha`
         */
        Value: string;
    }[];
    /**
     * 表示当前调用返回读取到的位置。显示为空表示数据已经读取完毕。
     * @example `""`
     */
    "NextToken"?: string;
}
