export interface ListAIJobRequest {
    /**
     * 作业ID列表。JobId可以通过[GetPlayInfo](~~56124~~)接口中返回的PlayInfo结构体中获取。
     * > 多个ID之间用半角逗号（,）分隔，一次最多可以查询10个作业ID。
     * @example `a718a3a1e8bb42ee3bc88921e94****,aasdcsfg782740asd3****,k2l3ibaskod98wrns9d****`
     */
    "JobIds": string;
}
