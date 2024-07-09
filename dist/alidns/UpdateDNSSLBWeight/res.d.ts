export interface UpdateDNSSLBWeightResponse {
    /**
     * 请求ID。
     * @example `536E9CAD-DB30-4647-AC87-AA5CC38C5382`
     */
    RequestId: string;
    /**
     * 解析记录ID。
     * @example `9999985`
     */
    RecordId: string;
    /**
     * 修改后的权重值。
     * @example `2`
     */
    Weight: number;
}
