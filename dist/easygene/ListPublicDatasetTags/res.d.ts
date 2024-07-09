export interface ListPublicDatasetTagsResponse {
    /**
     * 主机ID
     * @example `easygene.cn-beijing.aliyuncs.com`
     */
    HostId: string;
    /**
     * 请求ID
     * @example `DA980AD0-158F-44F3-847D-5EAB96C0EB6B`
     */
    RequestId: string;
    /**
     * 翻页Token用来表示当前调用返回读取到的位置，空代表数据已经读取完毕
     * @example `ba6d88e2-a6f2-4d2c-a2ae-68b76b078445`
     */
    NextToken: string;
    /**
     * 分页数
     * @example `10`
     */
    MaxResults: number;
    /**
     * 总记录数
     * @example `100`
     */
    TotalCount: number;
    /**
     * 公共数据集标签
     */
    Tags: string[];
}
