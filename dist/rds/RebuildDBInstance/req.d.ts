export interface RebuildDBInstanceRequest {
    /**
     * 地域ID。可调用DescribeRegions获取。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 专属集群ID。可调用DescribeDedicatedHostGroups获取。
     * @example `dhg-4nxxxxxxx`
     */
    "DedicatedHostGroupId": string;
    /**
     * 专属集群内的实例ID。
     * @example `rm-uf6wjk5xxxxxxx`
     */
    "DBInstanceId": string;
    /**
     * 需要重建备实例的主机ID。
     * >不传入该参数时，备实例会优先在原主机上重建，如果原主机空间不足，系统会选择非主实例所在的主机，若还是找不到足够空间，会返回空间不足错误。
     * @example `i-bpxxxxxxx`
     */
    "DedicatedHostId"?: string;
    /**
     * 需要重建的备实例类型。取值：
     * * **FOLLOWER**：备节点。
     * * **LOG**：日志节点。
     * @example `FOLLOWER`
     */
    "RebuildNodeType"?: string;
}
