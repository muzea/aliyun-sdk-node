export interface ReinstallCollectorRequest {
    /**
     * 采集器ID。
     * @example `ct-cn-l871nd0u73c45****`
     */
    "ResId": string;
    /**
     * 用于保证请求的幂等性。由客户端生成该参数值，要保证在不同请求间唯一，最大不超过64个ASCII字符。
     * @example `5A2CFF0E-5718-45B5-9D4D-70B3FF****`
     */
    "ClientToken"?: string;
    /**
     * 请求体参数，详情请参见下文的RequestBody章节。
     * @example `{
      "restartType": "nodeEcsId",
      "nodes":["i-bp1gyhphjaj73jsr****","i-bp10piq1mkfnyw9t****"]
    }`
     */
    "body"?: string;
}
