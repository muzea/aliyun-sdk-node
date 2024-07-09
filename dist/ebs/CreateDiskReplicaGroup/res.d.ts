export interface CreateDiskReplicaGroupResponse {
    /**
     * 请求ID。
     * @example `C123F94F-4E38-19AE-942A-A8D6F44F****`
     */
    RequestId: string;
    /**
     * 一致性复制组ID。
     * @example `pg-xxxxxxx`
     */
    ReplicaGroupId: string;
}
