export interface DeleteAutoSnapshotPolicyRequest {
    /**
     * 自动快照所属的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "regionId": string;
    /**
     * 自动快照策略的ID。您可以调用[DescribeAutoSnapshotPolicyEx](~~25530~~)查看您可用的自动快照策略。
     * @example `sp-bp14yziiuvu3s6jn****`
     */
    "autoSnapshotPolicyId": string;
}
