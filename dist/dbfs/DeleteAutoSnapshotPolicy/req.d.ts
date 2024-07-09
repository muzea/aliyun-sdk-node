export interface DeleteAutoSnapshotPolicyRequest {
    /**
     * 自动快照策略ID。
     * @example `sp-z5siir3iq3m**********`
     */
    "PolicyId": string;
    /**
     * 所属的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
}
