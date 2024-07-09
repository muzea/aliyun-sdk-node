export interface DescribeInstanceCreatableZoneResponse {
    /**
     * 请求 ID。
     * @example `EE205C00-30E4-XXXX-XXXX-87E3A8A2AA0C`
     */
    RequestId: string;
    /**
     * 可用区列表信息。
     */
    ZoneList: {
        /**
         * 是否是集群部署的可用区。
         * @example `true`
         */
        IsInCluster: boolean;
        /**
         * 可用区 ID。
         * @example `cn-hangzhou-i`
         */
        Zone: string;
    }[];
}
