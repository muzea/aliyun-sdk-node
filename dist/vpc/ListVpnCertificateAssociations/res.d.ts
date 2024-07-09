export interface ListVpnCertificateAssociationsResponse {
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 如果**NextToken**为空表示没有下一次查询。
     * - 如果**NextToken**有返回值，该取值表示下一次查询开始的令牌。
     * @example `caeba0bbb2be****`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `197AF2BD-547F-470C-B29A-8400400233EB`
     */
    RequestId: string;
    /**
     * 绑定关系总条目数。
     * @example `4`
     */
    TotalCount: number;
    /**
     * 分批次查询时每次显示的条目数。
     * @example `10`
     */
    MaxResults: number;
    /**
     * 绑定关系列表。
     */
    VpnCertificateRelations: {
        /**
         * VPN网关实例ID。
         * @example `vpn-bp1usbiorilk51760****`
         */
        VpnGatewayId: string;
        /**
         * 证书类型。
         * - **Encryption**：加密证书。
         * - **Signature**：签名证书。
         * @example `Signature`
         */
        CertificateType: string;
        /**
         * 证书ID。
         * @example `6bfe4218-ea1d****`
         */
        CertificateId: string;
        /**
         * 绑定时间。
         * 时间按照ISO8601标准表示，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。
         * @example `2020-12-29T09:30:29Z`
         */
        AssociationTime: string;
        /**
         * VPN网关所在地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
    }[];
}
