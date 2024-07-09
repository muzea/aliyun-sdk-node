export interface DescribeDcdnAclFieldsResponse {
    /**
     * 请求ID。
     * @example `30A3A25A-86B3-4C1D-BAA8-12B8607A5CFD`
     */
    RequestId: string;
    /**
     * 规则详情。
     */
    Content: {
        /**
         * 规则支持项及配置限制策略，需要JSON解码。
         * @example `\"fieldList\":[{\"name\":\"alert\",\"display\":\"observe\",\"tip\":\"mark the request in the log without blocking it\"},{\"name\":\"bypass\",\"display\":\"bypass\",\"tip\":\"bypass security modules\"}],\"module\":[{\"name\":\"cc\",\"display\":\"Rate Limit\",\"tip\":\"bypass Rate Limit\"},{\"name\":\"bot\",\"display\":\"Bot Traffic Management\",\"tip\":\"bypass Bot Manager\"}]`
         */
        Fields: string;
    }[];
}
