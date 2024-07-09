export interface ListListenerCertificatesResponse {
    /**
     * 本次请求所返回的最大记录条数。
     * @example `50`
     */
    MaxResults: number;
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 如果**NextToken**为空表示没有下一次查询。
     * - 如果**NextToken**有返回值，该取值表示下一次查询开始的令牌。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `365F4154-92F6-4AE4-92F8-7FF3******`
     */
    RequestId: string;
    /**
     * 本次请求条件下的数据总量。
     * @example `1000`
     */
    TotalCount: number;
    /**
     * 证书列表。
     */
    Certificates: {
        /**
         * 证书ID，当前仅支持服务器证书。
         * @example `123157******`
         */
        CertificateId: string;
        /**
         * 是否为监听默认证书。取值：
         * - **true**：默认证书。
         * - **false**：扩展证书。
         * @example `true`
         */
        IsDefault: boolean;
        /**
         * 证书与监听关联的状态。取值：
         * - **Associating**：关联中。
         * - **Associated**：已关联。
         * - **Diassociating**：解除关联中。
         * @example `Associating`
         */
        Status: string;
        /**
         * 证书类型。
         * @example `Server`
         */
        CertificateType: string;
    }[];
}
