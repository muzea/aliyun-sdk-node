export interface ListResourcesByAdvancedSearchResponse {
    /**
     * 请求ID。
     * @example `D241DEBF-67A2-56AF-88CF-57BF78F0A850`
     */
    RequestId: string;
    /**
     * 查询结果。
     */
    QueryResults: {
        /**
         * 查询返回的资源列表，最大返回1000条数据。查看更多数据请使用搜索文件下载。
         */
        QueryResultList: {
            /**
             * 搜索返回的字段名称列表。
             */
            Columns: string[];
            /**
             * 搜索返回的资源数据列表。
             */
            Values: any[];
        };
    };
}
