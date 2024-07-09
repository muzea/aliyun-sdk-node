export interface ListDataServiceApiTestResponse {
    /**
     * 请求Id
     * @example `ESDAFWEA`
     */
    RequestId: string;
    /**
     * 数据列表
     */
    Data: {
        /**
         * 测试Id
         * @example `123`
         */
        TestId: number;
        /**
         * 测试API Id
         * @example `2343`
         */
        ApiId: number;
        /**
         * 测试API请求参数
         * @example `{"name":"test"}`
         */
        ParamMap: string;
        /**
         * 测试API返回code，如果未完成，该数据为空
         * @example `0`
         */
        RetCode: number;
        /**
         * 返回数据
         * @example `{"id":2}`
         */
        RetResult: string;
        /**
         * API请求花费的时间
         * @example `10`
         */
        CostTime: number;
        /**
         * 任务是否已经完成，包含：RUNNING，FINISHED
         * @example `FINISHED`
         */
        Status: string;
        /**
         * 任务创建时间
         * @example `1651824913000`
         */
        CreateTime: number;
    }[];
}
