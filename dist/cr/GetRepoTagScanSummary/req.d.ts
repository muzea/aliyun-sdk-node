export interface GetRepoTagScanSummaryRequest {
    /**
     * 实例ID
     * @example `cri-2j88dtld8yel****`
     */
    "InstanceId": string;
    /**
     * 镜像仓库ID
     * @example `crr-c2i5yk6h6pu9d5o8`
     */
    "RepoId"?: string;
    /**
     * 镜像版本名称
     * @example `1`
     */
    "Tag"?: string;
    /**
     * 镜像扫描任务ID
     * @example `47A3E5A3-6AD4-5F02-93B8-59F778AE25D4`
     */
    "ScanTaskId"?: string;
    /**
     * digest值
     * @example `sha256:c9f370a4eb1c00d0b0d7212a0a9fa4a7697756c90f0f680afaf9737a25725f4c`
     */
    "Digest"?: string;
}
