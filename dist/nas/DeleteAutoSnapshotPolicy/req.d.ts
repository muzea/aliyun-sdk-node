interface DeleteAutoSnapshotPolicyRequest {
    "RegionId": string;
    /**
    * 自动快照策略 ID。您可以调用 DescribeAutoSnapshotPolicies 查看您可用的自动快照策略。
    * @example `sp-extreme-233e6ylv0`
    */ "AutoSnapshotPolicyId": string;
}
export { DeleteAutoSnapshotPolicyRequest };