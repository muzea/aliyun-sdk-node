export interface GetDataServiceApiTestRequest {
    /**
     * 测试Id。TestDataServiceApi接口调用以后异步执行，同时返回测试Id。也可以通过ListDataServiceApiTest获取最近的测试Id。
     * @example `123434`
     */
    "TestId": number;
}
