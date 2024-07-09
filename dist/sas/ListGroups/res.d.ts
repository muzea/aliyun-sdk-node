export interface ListGroupsResponse {
    /**
     * 分组列表。
     */
    List: {
        /**
         * 服务器分组ID。
         * @example `11028542`
         */
        GroupId: number;
        /**
         * 服务器分组名称。
         * @example `cn-shenzhen+dir-1440978***`
         */
        GroupName: string;
        /**
         * 服务器分组类型。取值：
         * - **0**：默认分组
         * - **1**：其他分组
         * @example `1`
         */
        GroupFlag: number;
    }[];
    /**
     * 查询结果页面显示的信息。
     */
    PageInfo: {
        /**
         * 分页查询时，当前页的页码。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 分页大小。
         * @example `10`
         */
        PageSize: number;
        /**
         * 数据的总条数。
         * @example `202`
         */
        TotalCount: number;
        /**
         * 当前页显示的数据条数。
         * @example `4`
         */
        Count: number;
        /**
         * 使用NextToken方式下返回的NextToken值。
         * @example `B604532DEF982B875E8360A6EFA3B***`
         */
        NextToken: string;
    };
    /**
     * 异常事件处理的结果状态。取值：
     * - **true**：处理成功。
     * - **false**：处理失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 接口请求返回的状态码。
     * @example `200`
     */
    Code: string;
    /**
     * 错误码的详细信息。
     * @example `successful`
     */
    Message: string;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `CB414DB5-F692-5DAB-9F0F-975C060AF***`
     */
    RequestId: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
}
