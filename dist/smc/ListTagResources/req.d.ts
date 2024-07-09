export interface ListTagResourcesRequest {
    /**
     * SMC资源类型。取值范围：
     * - sourceserver：表示迁移源
     * - replicationjob：表示迁移任务
     * @example `sourceserver`
     */
    "ResourceType": string;
    /**
     * 下一个查询开始Token。
     * @example `caeba0bbb2be03f84eb48b699f0a4883`
     */
    "NextToken"?: string;
    /**
     * SMC资源ID列表。SMC资源包括迁移源和迁移任务。列表最大长度 50
     * @example `s-bp1e2fsl57knvuug****`
     */
    "ResourceId"?: string[];
    /**
     * 标签列表。
     */
    "Tag"?: {
        /**
         * SMC资源的标签键。标签键长度的取值范围：1~64。N的取值范围：1~20。
         * Tag.N用于精确查找绑定了指定标签的SMC资源，由一个键值对组成。
         * - 标签键和标签值严格区分大小写。
         * - 仅指定Tag.N.Key时，则返回关联该标签键的所有资源。
         * - 仅指定Tag.N.Value时，则报错InvalidParameter.TagValue。
         * - 同时指定多个标签键值对时，仅同时满足所有标签键值对的SMC资源会被查找到。
         * @example `TestKey`
         */
        Key: string;
        /**
         * SMC资源的标签值。标签值长度的取值范围：1~64。N的取值范围：1~20。
         * @example `TestValue`
         */
        Value: string;
    }[];
}
