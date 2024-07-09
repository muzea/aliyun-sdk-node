export interface ListTagResourcesRequest {
    /**
     * 地域ID，您可以通过接口[DescribeRegions](~~98041~~)查看可用的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 资源类型定义，取值固定为**cluster**。
     * @example `cluster`
     */
    "ResourceType": string;
    /**
     * 用来返回更多结果。第一次查询不需要提供这个参数，如果第一次查询没有返回全部结果，则可在后续查询中传入前一次返回的token继续查询。
     * @example `212db86sca4384811e0b5e8707e******`
     */
    "NextToken"?: string;
    /**
     * 目标集群ID。若您需要查询多个集群的标签情况，请单击**添加**来添加目标集群ID。
     * > * `ResourceId.N`参数和`Tag.N.Key`参数至少传入一个。
     * > * 若选择传入`ResourceId.N`参数，则每次最多添加50个集群ID。
     * @example `pc-****************`
     */
    "ResourceId"?: string[];
    /**
     * 标签列表。
     */
    "Tag"?: {
        /**
         * 标签键。若您需要查询多个标签下的所有目标集群详情，请单击**添加**来添加标签。
         * >*  `ResourceId.N`参数和`Tag.N.Key`参数至少传入一个。
         * >* 若选择传入`Tag.N.Key`参数，则每次最多添加20对标签。
         * @example `type`
         */
        Key: string;
        /**
         * 标签键对应的标签值，允许传入空字符串。
         * @example `test`
         */
        Value: string;
    }[];
}
