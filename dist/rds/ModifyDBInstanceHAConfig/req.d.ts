export interface ModifyDBInstanceHAConfigRequest {
    /**
     * 数据复制方式。
     * - Semi-sync：半同步。
     * - Sync：强同步。
     * - Async：异步。
     * <props="china">- Mgr：组复制。</props>
     * @example `Sync`
     */
    "SyncMode": string;
    /**
     * 高可用模式。
     * - RPO：数据一致性优先，实例会尽可能保障数据的可靠性，即数据丢失量最少。对于数据一致性要求比较高的用户应该使用RPO模式。
     * - RTO：实例可用性优先，实例会尽快恢复服务，即可用时间最长。对于数据库在线时间要求比较高的用户应该使用RTO模式。
     * @example `RPO`
     */
    "HAMode": string;
    /**
     * 实例ID。
     * @example `rm-uf6wjk543****`
     */
    "DbInstanceId": string;
}
