export interface DeleteSourceServerRequest {
    /**
     * 迁移源ID。
     * @example `s-bp17m1vi6x20c6g6****`
     */
    "SourceId": string;
    /**
     * 是否强制删除迁移源。
     * - true：强制删除迁移源、迁移源关联的迁移任务及任务对应的中转资源。
     * - false：无法删除已关联迁移任务的迁移源。
     * @example `true`
     */
    "Force"?: boolean;
}
