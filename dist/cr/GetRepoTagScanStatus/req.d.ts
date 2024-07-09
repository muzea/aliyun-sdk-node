export interface GetRepoTagScanStatusRequest {
    /**
     * 实例ID
     * @example `cri-2j88dtld8yel****`
     */
    "InstanceId": string;
    /**
     * 镜像仓库ID
     * @example `crr-uf082u9dg8do****`
     */
    "RepoId"?: string;
    /**
     * 镜像Tag
     * @example `1`
     */
    "Tag"?: string;
    /**
     * 镜像扫描任务ID
     * @example `838152F9-F725-5A52-A344-8972D65AC045`
     */
    "ScanTaskId"?: string;
    /**
     * 镜像digest值
     * @example `67bfbcc12b67936ec7f867927817cbb071832b873dbcaed312a1930ba5f1d529`
     */
    "Digest"?: string;
}
