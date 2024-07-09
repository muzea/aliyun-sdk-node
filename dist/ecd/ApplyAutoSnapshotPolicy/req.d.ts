export interface ApplyAutoSnapshotPolicyRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云电脑支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 自动快照策略ID。
     * @example `sp-ejtum8j5tfcw7****`
     */
    "PolicyId": string;
    /**
     * 云电脑ID。可设置1\~20个。
     */
    "DesktopId": string[];
}
