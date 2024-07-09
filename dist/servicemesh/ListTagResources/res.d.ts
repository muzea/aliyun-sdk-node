export interface ListTagResourcesResponse {
    /**
     * 请求ID。
     * @example `BD65C0AD-D3C6-48D3-8D93-38D2015C****`
     */
    RequestId: string;
    /**
     * 表示当前调用返回读取到的位置。显示为空表示数据已经读取完毕。
     * @example `""`
     */
    NextToken: string;
    /**
     * 查询到的集群和标签的信息。
     */
    TagResources: {
        /**
         * 网格实例ID。
         * @example `863c333b-9a8e-4b53-a13f-52a97936****`
         */
        ResourceId: string;
        /**
         * 系统规定参数，固定为`servicemesh`。
         * @example `servicemesh`
         */
        ResourceType: string;
        /**
         * 标签键。
         * @example `k1`
         */
        TagKey: string;
        /**
         * 标签值。
         * @example `yahaha`
         */
        TagValue: string;
    }[];
}
