export interface QueryDNAJobListRequest {
    /**
     * 需要查询的DNA作业ID列表。一次最多建议查询10个，用半角逗号（,）分隔。
     * @example `88c6ca184c0e47098a5b665e2a12****`
     */
    "JobIds"?: string;
}
