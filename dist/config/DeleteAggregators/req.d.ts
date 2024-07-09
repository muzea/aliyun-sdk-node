export interface DeleteAggregatorsRequest {
    /**
     * 账号组ID。多个账号组ID之间用半角句号（,）分隔。
     * @example `ca-9190626622af00a9****`
     */
    "AggregatorIds": string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符，且不能超过64个字符。
     * @example `AAAAAdDWBF2****`
     */
    "ClientToken"?: string;
}
