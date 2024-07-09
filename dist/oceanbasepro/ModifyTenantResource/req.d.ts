export interface ModifyTenantResourceRequest {
    /**
     * 租户 ID。
     * @example `ob2mr3oae0****`
     */
    "TenantId": string;
    /**
     * 租户的 CPU 大小，单位：核数。
     * @example `2`
     */
    "Cpu": number;
    /**
     * 租户内存大小，单位 GB。
     * @example `2`
     */
    "Memory": number;
    /**
     * OceanBase 集群 ID。
     * @example `ob317v4uif****`
     */
    "InstanceId": string;
    /**
     * 租户分配日志盘大小，单位：GB。
     * @example `128`
     */
    "LogDisk"?: number;
    /**
     * 创建只读副本的可用区,当传入多个可用区的时候，以英文逗号分隔。
     * @example `cn-shanghai-g-ro,cn-shanghai-h-ro`
     */
    "ReadOnlyZoneList"?: string;
}
