export interface GetPtsDebugSampleLogsResponse {
    /**
     * 请求ID
     * @example `A8E16480-15C1-555A-922F-B736A005E52D`
     */
    RequestId: string;
    /**
     * 采样日志
     */
    SamplingLogs: {
        /**
         * 请求方法
         * @example `GET`
         */
        HttpRequestMethod: string;
        /**
         * 响应状态码
         * @example `200`
         */
        HttpResponseStatus: string;
        /**
         * 时间戳, ms
         * @example `1650253024471`
         */
        Timestamp: number;
        /**
         * 出参设置
         * @example `{\"skuId\":\"{R:json@$.page.list[0].skuId}\"}`
         */
        ExportConfig: string;
        /**
         * 响应错误信息
         * @example `""`
         */
        HttpResponseFailMsg: string;
        /**
         * 断言检查结果
         * @example `[{"checkPointType":"StatusCode","checker":{"expect":"200","operate":"eq","parsedExpectValue":"200","realValue":"200"},"hit":true,"point":"状态码"}]`
         */
        CheckResult: string;
        /**
         * 响应体
         * @example `{"timestamp":1679903049155,"status":404,"error":"Not Found","message":"No message available","path":"/"}`
         */
        HttpResponseBody: string;
        /**
         * 链路ID
         * @example `65354719`
         */
        ChainId: string;
        /**
         * 请求头
         * @example `[{"name":"v2","sensitive":false,"value":"1"},{"name":"x-pts-test","sensitive":false,"value":"2"}]`
         */
        HttpRequestHeaders: string;
        /**
         * 响应时间, ms
         * @example `230`
         */
        Rt: string;
        /**
         * 响应头
         * @example `[{"valuePos":18,"name":"transfer-encoding","buffer":{"empty":false,"full":false},"sensitive":false,"value":"chunked"},{"valuePos":13,"name":"Content-Type","buffer":{"empty":false,"full":false},"sensitive":false,"value":"application/json;charset=UTF-8"},{"valuePos":5,"name":"Date","buffer":{"empty":false,"full":false},"sensitive":false,"value":"Mon, 27 Mar 2023 07:44:08 GMT"}]`
         */
        HttpResponseHeaders: string;
        /**
         * 请求开始时间
         * @example `12`
         */
        HttpStartTime: number;
        /**
         * 导出参数内容
         * @example `{"skuId":"1"}`
         */
        ExportContent: string;
        /**
         * 参数导入内容
         * @example `""`
         */
        ImportContent: string;
        /**
         * HTTP用时瀑布流
         * @example `{"traceId":"0:1:10a94f66pts-2069351-allsparktask","requests":[{"lease":{"conn":{"duration":-1,"finish":-1,"operation":"conn","start":-1},"dns":{"duration":-1,"finish":-1,"operation":"dns","start":-1},"duration":-1,"finish":-1,"operation":"lease","start":32277914755},"recv":{"duration":225975,"finish":32283700284,"message":"","operation":"recv","start":32283474309},"sent":{"duration":594179,"finish":32278776504,"message":"","operation":"sent","start":32278182325},"tag":"GET http://tomcodemall.com:30080/api/product/skuinfo/list?key=2&vv=4&t4=%EF%BB%BF101"}],"message":""}`
         */
        HttpTiming: string;
        /**
         * 请求体
         * @example `{"loginacct":"acce"}`
         */
        HttpRequestBody: string;
        /**
         * 节点ID
         * @example `1345531`
         */
        NodeId: string;
        /**
         * 请求URL
         * @example `http://www.example.com`
         */
        HttpRequestUrl: string;
        /**
         * 链路名称
         * @example `串联链路`
         */
        ChainName: string;
    }[];
    /**
     * 页码
     * @example `1`
     */
    PageNumber: number;
    /**
     * 当前分页包含的条目数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 总条数。
     * @example `100`
     */
    TotalCount: number;
    /**
     * 是否成功。
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 系统状态码。
     * @example `4001`
     */
    Code: string;
    /**
     * 错误提示信息，若成功则为空。
     * @example `空`
     */
    Message: string;
}
