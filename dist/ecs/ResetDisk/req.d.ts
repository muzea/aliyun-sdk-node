export interface ResetDiskRequest {
    /**
     * 待回滚数据的云盘ID。
     * @example `d-bp199lyny9b3****`
     */
    "DiskId": string;
    /**
     * 需要恢复到某一云盘阶段的历史快照ID。
     * @example `s-bp199lyny9b3****`
     */
    "SnapshotId": string;
    /**
     * 是否预检本次请求。取值范围：
     * - true：发送检查请求，不会直接回滚云盘。检查项包括是否填写了必选参数、请求格式和资源状态限制。如果检查不通过，则返回对应错误信息。如果检查通过，则返回错误码`DryRunOperation`。
     * - false：发送正常请求，通过检查后直接发起云盘回滚操作。
     * 默认值：false。
     * @example `false`
     */
    "DryRun"?: boolean;
}
