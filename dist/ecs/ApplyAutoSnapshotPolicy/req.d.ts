export interface ApplyAutoSnapshotPolicyRequest {
    /**
     * 自动快照策略和云盘所在的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "regionId": string;
    /**
     * 目标自动快照策略ID。
     * @example `sp-bp14yziiuvu3s6jn****`
     */
    "autoSnapshotPolicyId": string;
    /**
     * 一块或多块云盘的ID。取值是JSON数组格式，云盘ID之间用半角逗号（,）隔开。
     * @example `["d-bp14k9cxvr5uzy54****", "d-bp1dtj8v7x6u08iw****", "d-bp1c0tyj9tfli2r8****"]`
     */
    "diskIds": string;
}
