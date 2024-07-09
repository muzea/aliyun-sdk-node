export interface EnableHBaseueBackupRequest {
    /**
     * HBaseue集群Id。
     * @example `ld-m5eznlga4k5bcxxxx`
     */
    "HbaseueClusterId": string;
    /**
     * 备份节点个数。
     * @example `2`
     */
    "NodeCount": number;
    /**
     * 备份服务冷存大小，800G起步。
     * @example `800`
     */
    "ColdStorageSize"?: number;
    /**
     * 保证幂等token。
     * @example `xxx`
     */
    "ClientToken"?: string;
}
