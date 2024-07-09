export interface ListScanBaselineByTaskRequest {
    /**
     * 实例 ID
     * @example `cri-***********`
     */
    "InstanceId"?: string;
    /**
     * 页号
     * @example `1`
     */
    "PageNo"?: number;
    /**
     * 页大小
     * @example `30`
     */
    "PageSize"?: number;
    /**
     * 等级
     * @example `High`
     */
    "Level"?: string;
    /**
     * 仓库 ID
     * @example `crr-**************`
     */
    "RepoId"?: string;
    /**
     * 镜像版本
     * @example `1.1.36`
     */
    "Tag"?: string;
    /**
     * 镜像 digest 值
     * @example `sha256:1c89806cfaf66d2990e2cf1131ebd56ff24b133745a33abf1228*************`
     */
    "Digest"?: string;
    /**
     * 镜像扫描任务 ID
     * @example `3e526d7e-4b45-4703-b046-***********`
     */
    "ScanTaskId"?: string;
}
