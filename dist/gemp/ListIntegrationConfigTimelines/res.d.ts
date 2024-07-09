export interface ListIntegrationConfigTimelinesResponse {
    /**
     * data
     */
    data: {
        /**
         * 主题
         * @example `时间线标题`
         */
        title: string;
        /**
         * 描述
         * @example `描述xxxxx`
         */
        description: string;
        /**
         * 创建时间
         * @example `2021-04-05 10:10:10`
         */
        createTime: string;
    }[];
    /**
     * requestId
     * @example `601FA6A2-AC5C-4B59-BE11-378F887A6A11`
     */
    requestId: string;
    /**
     * totalCount
     * @example `103`
     */
    totalCount: number;
    /**
     * pageNumber
     * @example `1`
     */
    pageNumber: number;
    /**
     * pageSize
     * @example `10`
     */
    pageSize: number;
}
