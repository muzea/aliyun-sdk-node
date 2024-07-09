export interface GetAIImageJobsRequest {
    /**
     * AI图片处理任务ID。由一个或多个JobId组成，JobId为调用[SubmitAIImageJob](~~186922~~)接口返回参数JobId的值。
     * - 最多支持10个ID。
     * - 多个ID之间使用半角逗号（,）分隔。
     * @example `cf08a2c6e11e*****de1711b738b9067`
     */
    "JobIds": string;
}
