export interface OnsTraceQueryByMsgKeyResponse {
    /**
     * 公共参数，每个请求的ID都是唯一的，可用于排查和定位问题。
     * @example `F8654231-122A-4DBD-801F-38E35538****`
     */
    RequestId: string;
    /**
     * 该查询任务的ID。您需要根据该任务ID再调用[OnsTraceGetResult](~~59832~~)接口获取详细结果。
     * @example `272967562652883649157096685****`
     */
    QueryId: string;
}
