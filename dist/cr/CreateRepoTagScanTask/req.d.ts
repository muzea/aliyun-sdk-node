export interface CreateRepoTagScanTaskRequest {
    /**
     * 实例ID
     * @example `cri-xkx6vujuhay0****`
     */
    "InstanceId": string;
    /**
     * 镜像仓库ID
     * @example `crr-xwvi3osiy4ff****`
     */
    "RepoId": string;
    /**
     * 镜像版本
     * @example `1.24`
     */
    "Tag": string;
    /**
     * 镜像digest
     * @example `sha256:815386ebbe9a3490f38785ab11bda34ec8dacf4634af77b8912832d4f85dca04`
     */
    "Digest"?: string;
    /**
     * 扫描引擎类型
     * - `SAS_SCAN_SERVICE`, 云安全扫描引擎（需要付费开通）
     * - `ACR_SCAN_SERVICE`, ACR扫描引擎
     * @example `ACR_SCAN_SERVICE`
     */
    "ScanService"?: string;
}
