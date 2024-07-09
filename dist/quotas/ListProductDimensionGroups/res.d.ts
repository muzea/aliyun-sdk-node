export interface ListProductDimensionGroupsResponse {
    /**
     * 维度组。
     */
    DimensionGroups: {
        /**
         * 云服务代码。
         * @example `entconsole`
         */
        ProductCode: string;
        /**
         * 维度组代码。
         * @example `entconsole_zjzp4dyg6b`
         */
        GroupCode: string;
        /**
         * 维度组名称。
         * @example `资源共享`
         */
        GroupName: string;
        /**
         * 维度组的Key。
         */
        DimensionKeys: string[];
    }[];
    /**
     * 本次请求返回的全部记录条数。
     * @example `3`
     */
    TotalCount: number;
    /**
     * 用来标记返回查询数据的位置。空表示数据已经查询完毕。
     * @example `21`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `057D210F-F2FC-5329-A536-26C16628BB09`
     */
    RequestId: string;
    /**
     * 本次查询返回的最大记录条数。
     * @example `3`
     */
    MaxResults: number;
}
