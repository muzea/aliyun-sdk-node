export interface RestartDedicatedHostRequest {
    /**
     * 主机所在的[地域ID](~~198326~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 主机ID。您可以登录云数据库专属集群控制台，在**主机列表**查看并获取主机ID。
     * @example `ch-bp10a5id3boqi****`
     */
    "DedicatedHostId": string;
    /**
     * 主实例的切换方案，取值：
     * - **MaintainTime**（默认）：在实例维护时间段切换，等待当前主机上的主实例切换到其他主机的备实例后再重启主机，避免影响业务。
     * - **Immediate**：立即切换，即立即强制重启主机。
     * @example `MaintainTime`
     */
    "FailoverMode": string;
    /**
     * 是否强制关机重启，取值：
     * - true：强制重启。执行断电操作，所有未写入存储设备的缓存数据会丢失，请谨慎选择。
     * - false（默认值）：正常重启。
     * > 该参数仅对Tair主机生效，其余引擎主机重启均为正常重启。
     * @example `false`
     */
    "ForceStop"?: boolean;
}
