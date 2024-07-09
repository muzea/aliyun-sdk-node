export interface GetAsyncJobResultResponse {
    /**
     * 请求ID。
     * @example `A1F44EC4-118D-4A03-B213-F908F36F7DAA`
     */
    RequestId: string;
    /**
     * 返回的数据内容。
     */
    Data: {
        /**
         * 异步任务状态。包括：
         * - QUEUING：任务排队中
         * - PROCESSING：异步处理中
         * - PROCESS_SUCCESS：处理成功
         * - PROCESS_FAILED：处理失败
         * - TIMEOUT_FAILED：任务超时未处理完成
         * - LIMIT_RETRY_FAILED：超过最大重试次数
         * @example `PROCESS_SUCCESS`
         */
        Status: string;
        /**
         * 异步任务错误码信息。
         * @example `paramsIllegal`
         */
        ErrorMessage: string;
        /**
         * 异步任务返回的真实请求结果。
         * @example `{\"Content\":\"<div > <h2 > 2017 年 3 月 40 多家陶企上榜失信被执行人名单 </h2><div > 1 月 7 日，陶卫网记者根据最高人民法院及各地法院发布的失信被执行人信息统计，2019 年 12 月全国各地有 112 家陶瓷企业被列入“失信被执行人”名单，名单涉及 21 个省（市）。此次名单中，广东省的失信陶企多达 28 家。 </div><div > 据统计，这些“失信被执行人”的上榜原因主要为债务纠纷，欠款不还，大部分为拖欠供应商货款、工资、员工赔偿、银行贷款以及融资租赁租金等，也有涉及运输、燃气等费用，小部分企业涉及承担债务连带清偿责任。 </div><table border=1>    <tr><td > 公司名称 </td><td > 最新失信发布时间 </td><td > 累计失信次数 </td>    </tr>    <tr><td > 潮州市澳士通陶瓷实业有限公司 </td><td > 3 月 15 日 </td><td > 1 次 </td>    </tr>    <tr><td > 肇庆市德圣陶瓷有限公司 </td><td > 3 月 14 日 </td><td > 6 次 </td>    </tr>    <tr><td > 清远市港龙陶瓷有限公司 </td><td > 3 月 10 日 </td><td > 28 次 </td>    </tr>    <tr><td > 广西金沙江陶瓷有限公司 </td><td > 3 月 14 日 </td><td > 3 次 </td>    </tr>    <tr><td > 宜丰县凯扬陶瓷发展有限公司 </td><td > 3 月 29 日 </td><td > 11 次 </td>    </tr>    <tr><td > 江西领先精工陶瓷发展有限公司 </td><td > 3 月 29 日 </td><td > 23 次 </td>    </tr>    <tr><td > 高安弘建陶瓷有限公司 </td><td > 3 月 28 日 </td><td > 5 次 </td>    </tr></table>\"}`
         */
        Result: string;
        /**
         * 异步任务错误码。
         * @example `InvalidParameter`
         */
        ErrorCode: string;
        /**
         * 异步任务ID。
         * @example `49E2CC28-ED1D-4CC5-854D-7D0AE2B20976`
         */
        JobId: string;
    };
}
