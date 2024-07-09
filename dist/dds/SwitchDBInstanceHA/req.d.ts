export interface SwitchDBInstanceHARequest {
    /**
     * 实例ID。
     * @example `dds-bpxxxxxxxx`
     */
    "DBInstanceId": string;
    /**
     * 分片集群实例中Shard节点的ID。
     * > 当**DBInstanceId**参数传入的是分片集群实例ID时，本参数必须传入。
     * @example `d-bpxxxxxxxx`
     */
    "NodeId"?: string;
    /**
     * 需要执行切换的角色ID。您可以调用[DescribeRoleZoneInfo](~~123802~~)接口获取角色ID和节点角色信息。
     * > - 角色ID以英文逗号（,）分隔，不传入本参数则切换主备节点。
     * > - 当**DBInstanceId**参数传入的是分片集群实例ID时，执行切换的角色必须属于同一Shard节点中。
     * @example `972xxxx,972xxxx`
     */
    "RoleIds"?: string;
    /**
     * 切换主备节点的时间点。取值：
     * - 0：立即切换。
     * - 1：在可运维时间段内切换。
     * @example `0`
     */
    "SwitchMode"?: number;
}
