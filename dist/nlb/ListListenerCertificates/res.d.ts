export interface ListListenerCertificatesResponse {
    /**
     * 请求ID。
     * @example `2198BD6D-9EBB-5E1C-9C48-E0ABB79CF831`
     */
    RequestId: string;
    /**
     * 服务器证书列表。
     */
    CertificateIds: string[];
    /**
     * 证书列表。
     */
    Certificates: {
        /**
         * 证书ID，当前仅支持服务器证书。
         * @example `12315790343_166f8204689_1714763408_70998****`
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
    /**
     * 列表条目数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 第一次查询和没有下一次查询时，均无需填写。
     * - 如果有下一次查询，取值为上一次API调用返回的NextToken值。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    NextToken: string;
    /**
     * 分批次查询时每次显示的条目数。取值范围：**1**~**100**，默认值为**20**。
     * @example `20`
     */
    MaxResults: number;
}
