export interface ListListenerCertificatesResponse {
    /**
     * 请求ID。
     * @example `6FEA0CF3-D3B9-43E5-A304-D217037876A8`
     */
    RequestId: string;
    /**
     * 列表条目数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 如果**NextToken**为空表示没有下一次查询。
     * - 如果**NextToken**有返回值，该取值表示下一次查询开始的令牌。
     * @example `caeba0bbb2be03f84eb48b699f0a4883`
     */
    NextToken: string;
    /**
     * 本次读取的最大数据记录数量。
     * @example `20`
     */
    MaxResults: number;
    /**
     * 证书列表。
     */
    Certificates: {
        /**
         * 证书ID。
         * @example `6092**-cn-hangzhou`
         */
        CertificateId: string;
        /**
         * 是否为默认证书。
         * - **true**：默认证书。
         * - **false**：扩展证书。
         * @example `true`
         */
        IsDefault: boolean;
        /**
         * 扩展证书绑定的域名。
         * 默认证书不返回该字段。
         * @example `example.com`
         */
        Domain: string;
        /**
         * 证书的状态。
         * - **active**：证书绑定监听并生效。
         * - **updating**：扩展证书替换中。
         * @example `active`
         */
        State: string;
    }[];
}
