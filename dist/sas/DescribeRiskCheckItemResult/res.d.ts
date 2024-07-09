export interface DescribeRiskCheckItemResultResponse {
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `3BFB4989-A108-46A4-954E-FF7EF02D1078`
     */
    RequestId: string;
    /**
     * 影响资产分页信息。
     */
    PageContentResource: {
        /**
         * 分页查询时，当前页的页码。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 影响资产的动态表格的分页数据。
         * @example `{"resultStatus":[{"id":32183150,"status":"failed"}],"columns":[{"title":"所在可用区","key":"RegionId"},{"title":"数据库实例ID","key":"DBInstanceId"},{"title":"问题条目值","key":"VulValue"}],"values":[{"DBInstanceId":{"type":"link","value":"dds-bp144b42843****\n","url":"https://mongodb.console.aliyun.com/replicate/cn-hangzhou/instances/dds-bp144b42843****​/basicInfo"},"VulValue":{"type":"link","value":"0.0.0.0/0","url":"https://mongodb.console.aliyun.com/replicate/cn-hangzhou/instances/dds-bp144b42843****​/whiteList"},"RegionId":{"type":"text","value":"cn-hangzhou"}}],"emptyGridValue":{"type":"text","value":"暂无数据"},"type":"grid"}`
         */
        ContentResource: any;
        /**
         * 分页查询时，每页最多显示的数据条数。
         * @example `10`
         */
        PageSize: number;
        /**
         * 返回数据的总条数。
         * @example `1`
         */
        TotalCount: number;
        /**
         * 返回数据的总页数。
         * @example `3`
         */
        PageCount: number;
        /**
         * 分页查询时，当前页显示的数据条数。
         * @example `1`
         */
        Count: number;
    };
}
