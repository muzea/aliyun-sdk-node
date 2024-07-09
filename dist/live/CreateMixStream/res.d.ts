export interface CreateMixStreamResponse {
    /**
     * 合流任务ID。可作为查询合流任务列表和删除合流任务的请求参数。
     * @example `5b2a046e-74d7-385e-253f-8a5b87e4****`
     */
    MixStreamId: string;
    /**
     * 请求ID。
     * @example `0D715397-2E66-4AE1-694h-C546628AD145`
     */
    RequestId: string;
}
