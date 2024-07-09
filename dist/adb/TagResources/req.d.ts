export interface TagResourcesRequest {
    /**
     * 地域ID，您可通过接口[DescribeRegions](~~143074~~)查看可用的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 集群类型，取值：**ALIYUN::ADB::CLUSTER**。
     * @example `ALIYUN::ADB::CLUSTER`
     */
    "ResourceType": string;
    /**
     * 绑定标签的集群ID。若需要为多个集群同时添加标签，请单击**添加**并输入集群ID。
     * > - 一次最多为50个集群同时绑定标签。
     * > - 您可以调用[DescribeDBClusters](~~129857~~)接口查看目标地域下所有AnalyticDB MySQL集群的详情，包括集群ID。
     * @example `am-bp1xxx.1`
     */
    "ResourceId": string[];
    /**
     * 标签列表信息。
     */
    "Tag": {
        /**
         * 标签键。若您需要为目标集群一次性添加多个标签，请单击**添加**并输入标签键和对应的标签值。
         * > 每次最多添加20对标签。
         * @example `testkey1`
         */
        Key: string;
        /**
         * 标签键对应的标签值。若您需要为目标集群一次性添加多个标签，请单击**添加**并输入标签键和对应的标签值。
         * > 每次最多添加20对标签。
         * @example `testvalue1`
         */
        Value: string;
    }[];
}
