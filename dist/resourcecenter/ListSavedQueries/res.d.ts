export interface ListSavedQueriesResponse {
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
     * 下一个查询开始的Token。
     * @example `AAAAARfZmVDe9NvRXloR5+8CK9nNJufMdRA7W1miLC1P****`
     */
    NextToken: string;
    /**
     * 自定义查询模板信息。
     */
    SavedQueries: {
        /**
         * 模板ID。
         * @example `cq-GeAck****`
         */
        QueryId: string;
        /**
         * 模板名称。
         * @example `查询我的所有资源。`
         */
        Name: string;
        /**
         * 模板描述。
         * @example `查询我的所有资源，返回所有的列。`
         */
        Description: string;
        /**
         * 创建时间（UTC时间）。
         * @example `2022-01-13T05:50:35Z`
         */
        CreateTime: string;
        /**
         * 更新时间（UTC时间）。
         * @example `2023-03-14 10:27:07`
         */
        UpdateTime: string;
    }[];
}
