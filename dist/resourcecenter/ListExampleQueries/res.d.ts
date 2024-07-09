export interface ListExampleQueriesResponse {
    /**
     * 请求ID。
     * @example `D696E6EF-3A6D-5770-801E-4982081FE4D0`
     */
    RequestId: string;
    /**
     * 每页的最大数据条数。
     * @example `10`
     */
    MaxResults: string;
    /**
     * 下一页查询开始的Token。
     * @example `eyJzZWFyY2hBZnRlcnMiOlsiMTAwMTU2Nzk4MTU1OSJd****`
     */
    NextToken: string;
    /**
     * 系统模板信息。
     */
    ExampleQueries: {
        /**
         * 模板ID。
         * @example `sq-0PfKy****`
         */
        QueryId: string;
        /**
         * 模板名称。
         * @example `列出所有阿里云资源`
         */
        Name: string;
        /**
         * 模板描述。
         * @example `返回所有有权限的资源，并按照资源类型和资源ID排列。`
         */
        Description: string;
    }[];
}
