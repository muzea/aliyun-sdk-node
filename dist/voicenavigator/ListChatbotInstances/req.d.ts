export interface ListChatbotInstancesRequest {
    /**
     * 实例id
     * @example `af81a389-91f0-4157-8d82-720edd02b66a`
     */
    "InstanceId"?: string;
    /**
     * 页号
     * @example `1`
     */
    "PageNumber": number;
    /**
     * 个数
     * @example `10`
     */
    "PageSize"?: number;
    "UnionSource"?: string;
    "NluServiceType"?: string;
    "NluServiceParamsJson"?: string;
}
