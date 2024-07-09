export interface GetBotSessionDataResponse {
    /**
     * API调用耗时，单位毫秒ms。
     * @example `116`
     */
    CostTime: string;
    /**
     * 请求id
     * @example `15CD94CC-CBEB-4189-806C-A132D1F45D51`
     */
    RequestId: string;
    /**
     * 数据详情
     */
    Datas: any[];
}
