export interface ListRepoTagScanResultRequest {
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
     * 镜像版本名称
     * @example `1`
     */
    "Tag"?: string;
    /**
     * 镜像扫描任务ID
     * @example `6b0b094f-8a90-4f8f-b660-2427aed0****`
     */
    "ScanTaskId"?: string;
    /**
     * 扫描结果列表页码
     * @example `1`
     */
    "PageNo"?: number;
    /**
     * 扫描结果列表每页展示数
     * @example `30`
     */
    "PageSize"?: number;
    /**
     * 扫描漏洞等级，取值：
     * - `High`：高危
     * - `Medium`：中危
     * - `Low`：低危
     * - `Unknown`：未知
     * @example `High`
     */
    "Severity"?: string;
    /**
     * 镜像digest
     * @example `sha256:6b0b094f8a904f8fb6602427aed0d1fa`
     */
    "Digest"?: string;
    /**
     * 漏洞类型，取值：
     * - `cve`：镜像系统漏洞
     * - `sca`：镜像应用漏洞
     * @example `sca`
     */
    "ScanType"?: string;
    /**
     * 扫描模糊查询词，支持按照CVE名称模糊查询
     * @example `CVE-2021`
     */
    "VulQueryKey"?: string;
    /**
     * 设置查询的参数，当值为`FixCmd`时只返回`FixCmd`的结果，其余字段不返回
     * @example `FixCmd`
     */
    "FilterValue"?: string;
}
