export interface ListServiceVersionsResponse {
    /**
     * 限定返回的版本排序方向：
     *   - **FORWARD**：从小到大排序。
     *   - **BACKWARD**：默认值，从大到小排序。
     * @example `BACKWARD`
     */
    direction: string;
    /**
     * 用来返回更多结果。第一次查询不需要提供这个参数，后续查询的Token从返回结果中获取。
     * @example `eJhojW7N****`
     */
    nextToken: string;
    /**
     * 版本列表。
     */
    versions: {
        /**
         * 服务版本的创建时间。
         * @example `2020-03-16T06:23:50Z`
         */
        createdTime: string;
        /**
         * 服务的版本描述。
         * @example `test_description`
         */
        description: string;
        /**
         * 服务的版本上一次被更新的时间。
         * @example `2020-07-15T06:12:31Z`
         */
        lastModifiedTime: string;
        /**
         * 服务的版本号。
         * @example `1`
         */
        versionId: string;
    }[];
}
