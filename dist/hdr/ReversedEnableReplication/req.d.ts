export interface ReversedEnableReplicationRequest {
    /**
     * 受保护服务器ID
     * @example `sr-000cm9ax8sh2381wa7kv`
     */
    "ServerId"?: string;
    /**
     * 反向复制使用源机
     * @example `false`
     */
    "ReplicationUseOriginalInstance"?: boolean;
    /**
     * 目标站点基础设施ID
     * @example `is-000bzkmmlwgibbduuoff`
     */
    "ReplicationInfrastructureId"?: string;
    /**
     * -
     * @example `-`
     */
    "ReplicationLocation"?: string;
    /**
     * -
     * @example `-`
     */
    "ReplicationComputeResource"?: string;
    /**
     * -
     * @example `-`
     */
    "ReplicationDatastore"?: string;
    /**
     * 反向复制的复制网络VSwitch ID
     * @example `vsw-bp1ii4x07tey6sisg4blp`
     */
    "ReplicationNetwork"?: string;
    /**
     * -
     * @example `-`
     */
    "ReplicationUseDhcp"?: boolean;
    /**
     * -
     * @example `-`
     */
    "ReplicationIpAddress"?: string;
    /**
     * -
     * @example `-`
     */
    "ReplicationNetMask"?: string;
    /**
     * -
     * @example `-`
     */
    "ReplicationDns"?: string;
    /**
     * -
     * @example `-`
     */
    "ReplicationGateway"?: string;
    /**
     * 反向复制的恢复网络VSwitch ID
     * @example `vsw-bp1xmea0mkjtxqoubk7q8`
     */
    "RecoveryNetwork"?: string;
    /**
     * -
     * @example `-`
     */
    "CrashConsistentPointPolicy"?: string;
    /**
     * -
     * @example `-`
     */
    "AppConsistentPointPolicy"?: string;
    /**
     * -
     * @example `-`
     */
    "ShadowInstanceType"?: string;
}
