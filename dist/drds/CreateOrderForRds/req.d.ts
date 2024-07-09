export interface CreateOrderForRdsRequest {
    /**
     * 地域Id
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * RDS下单参数JOSN，参考[创建RDS实例](~~26228~~)。
     * @example `{"key":"value"}`
     */
    "Params": string;
}
