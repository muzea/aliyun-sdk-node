export interface QueryTagByParamResponse {
    /**
     * 每页大小
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID
     * @example `10A1AD70-E48E-476D-98D9-39BD92193837`
     */
    RequestId: string;
    /**
     * 当前页码
     * @example `5`
     */
    PageNumber: number;
    /**
     * 总数量
     * @example `2`
     */
    TotalCount: number;
    data: {
        /**
         * 数据记录
         */
        tag: {
            /**
             * 标签名称
             * @example `hellopal`
             */
            TagName: string;
            /**
             * 标签ID
             * @example `52366`
             */
            TagId: string;
            /**
             * 标签描述
             * @example `test description`
             */
            TagDescription: string;
        }[];
    };
}
