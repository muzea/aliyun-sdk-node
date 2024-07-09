export interface DescribeDiskReplicaPairProgressRequest {
    /**
     * 复制对ID。您可以调用[DescribeDiskReplicaPairs](~~354206~~)查询已创建的复制对ID。
     * @example `pair-cn-tl32ribst0z`
     */
    "ReplicaPairId": string;
    /**
     * 复制对所属的地域ID。
     * @example `cn-beijing`
     */
    "RegionId": string;
}
