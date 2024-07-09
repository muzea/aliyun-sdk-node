export interface ListProjectsResponse {
    /**
     * 下一次请求的分页token。
     * @example `123abc***`
     */
    nextToken: string;
    /**
     * 返回结果
     */
    data: {
        /**
         * 项目名称
         * @example `project_name`
         */
        name: string;
        /**
         * 项目描述
         * @example `test`
         */
        description: string;
        /**
         * 项目ID
         * @example `p-3q9jo749ne5****`
         */
        projectId: string;
    }[];
    /**
     * 请求ID
     * @example `DD6B1B2A-5837-5237-ABE4-FF0C8944****`
     */
    requestId: string;
    /**
     * 记录总数
     * @example `10`
     */
    totalSize: number;
}
