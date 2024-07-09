export interface GetSavedQueryResponse {
    /**
     * 请求ID。
     * @example `6D98D9B0-318D-56A4-910C-93B5F945AF2B`
     */
    RequestId: string;
    /**
     * 模板信息。
     */
    SavedQuery: {
        /**
         * 模板ID。
         * @example `cq-GeAck****`
         */
        QueryId: string;
        /**
         * 模板表达式。
         * @example `SELECT * FROM resources;`
         */
        Expression: string;
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
         * @example `2023-10-30T01:43:16Z`
         */
        CreateTime: string;
        /**
         * 更新时间（UTC时间）。
         * @example `2023-10-30T01:43:16Z`
         */
        UpdateTime: string;
    };
}
