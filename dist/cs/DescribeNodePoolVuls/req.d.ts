export interface DescribeNodePoolVulsRequest {
    /**
     * 集群ID。
     * @example `c17e742cee942410486f237293d66****`
     */
    "cluster_id": string;
    /**
     * 节点池ID。
     * @example `np38f32fdbc60e4a1e957ffde77846****`
     */
    "nodepool_id": string;
    /**
     * 要查询的漏洞修复必要性等级。多个等级之间使用半角逗号（,）分隔。取值：
     * - `asap`：高
     * - `later`：中
     * - `nntf`：低
     * @example `asap`
     */
    "necessity"?: string;
}
