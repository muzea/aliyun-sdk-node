export interface GetAddressSimilarityResponse {
    /**
     * RequestId
     * @example `F1BD3BD6-3510-4144-996A-B7FCA70A5F81`
     */
    RequestId: string;
    /**
     * json格式数据
     * @example `{"sim_level":{"level":"none","address_a":"文一西路969号","address_b":"余杭区阿里巴巴","is_same":false},"time_used":{"rt":{"sim_level":"0.0400395393371582"},"start":"1589800627.3379788"},"status":"OK"}`
     */
    Data: string;
}
