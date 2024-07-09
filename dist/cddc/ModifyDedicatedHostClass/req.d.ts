export interface ModifyDedicatedHostClassRequest {
    /**
     * [地域ID](~~198326~~)。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 主机ID。您可以登录云数据库专属集群控制台，在**主机列表**查看并获取主机ID。
     * @example `ch-bp1fgj3kt7fsb****`
     */
    "DedicatedHostId": string;
    /**
     * 主机升配的规格编码，详情请参见[主机规格详情](~~206343~~)。
     * @example `rds.c6.x4large`
     */
    "TargetClassCode": string;
    /**
     * 指定主机规格的升配时间，格式为yyyy-MM-ddTHH:mm:ssZ（UTC时间）。
     * >仅当SwitchTimeMode为2时，需要传入SwitchTime参数。
     * @example `2021-07-13T07:14:22Z`
     */
    "SwitchTime"?: string;
    /**
     * 选择升配的执行模式，取值：
     * - **0**（默认）：立刻执行升配。
     * - **2**：在指定时间执行升配。
     * > 若本参数的值为**2**，则必须同时传入**SwitchTime**参数。
     * @example `2`
     */
    "SwitchTimeMode"?: string;
}
