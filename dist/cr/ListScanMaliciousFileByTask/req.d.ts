export interface ListScanMaliciousFileByTaskRequest {
    /**
     * 实例 ID
     * @example `cri-gu94qynvpwk*****`
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
     * 恶意文件等级
     * @example `High`
     */
    "Level"?: string;
    /**
     * 镜像仓库id
     * @example `crr-h1y4l279wb8*****`
     */
    "RepoId"?: string;
    /**
     * 镜像版本
     * @example `V6.11`
     */
    "Tag"?: string;
    /**
     * 镜像 digest 值
     * @example `sha256:aa4bffff6406785e930dab1f94c9a1297ba22xxxx71d71504a015764*********`
     */
    "Digest"?: string;
    /**
     * 镜像扫描任务 ID
     * @example `79ee6bc2-3288-4c56-b967-**********`
     */
    "ScanTaskId"?: string;
}
