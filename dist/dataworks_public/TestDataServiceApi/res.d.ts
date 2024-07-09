export interface TestDataServiceApiResponse {
    /**
     * 请求id
     * @example `abdsfewe`
     */
    RequestId: string;
    /**
     * 返回对象
     */
    Data: {
        /**
         * 测试Id
         * @example `232432`
         */
        TestId: string;
    };
}
