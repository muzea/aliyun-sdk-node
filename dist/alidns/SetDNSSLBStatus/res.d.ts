export interface SetDNSSLBStatusResponse {
    /**
     * 请求ID。
     * @example `536E9CAD-DB30-4647-AC87-AA5CC38C5382`
     */
    RequestId: string;
    /**
     * 符合规则的A记录数量。
     * @example `8`
     */
    RecordCount: number;
    /**
     * 权重配置的最新状态。
     * @example `true`
     */
    Open: boolean;
}
