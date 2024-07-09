export interface DescribeEipAddressesRequest {
    /**
     * ENS的节点ID。
     * @example `cn-nanjing-cmcc`
     */
    "EnsRegionId": string;
    /**
     * 弹性公网IP绑定的EIP信息。
     * @example `[\"eip-5rd9i3pftfgbavl4y1b7hm4a3\"]`
     */
    "Eips"?: string;
}
