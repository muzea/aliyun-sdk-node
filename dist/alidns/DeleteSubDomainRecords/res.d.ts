export interface DeleteSubDomainRecordsResponse {
    /**
     * 主机记录。
     * @example `www`
     */
    RR: string;
    /**
     * 被删除的解析记录总数。
     * @example `1`
     */
    TotalCount: string;
    /**
     * 请求ID。
     * @example `536E9CAD-DB30-4647-AC87-AA5CC38C5382`
     */
    RequestId: string;
}
