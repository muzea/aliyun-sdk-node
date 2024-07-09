export interface ListStatefulAsyncInvocationFunctionsResponse {
    /**
     * 用来表示当前调用返回读取到的位置，空代表数据已经读取完毕。
     * @example `""`
     */
    nextToken: string;
    /**
     * 返回的实际数据列表。
     */
    data: any[];
}
