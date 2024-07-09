export interface ModifyInstanceTemporaryCapacityRequest {
    /**
     * OceanBase 集群 ID。
     * @example `ob317v4uif****`
     */
    "InstanceId": string;
    /**
     * 规格。
     * @example `oceanbase.cluster.i2.small`
     */
    "Spec": string;
    /**
     * 磁盘大小，单位：GB。
     * @example `400`
     */
    "DiskSize"?: string;
    /**
     * 支持的语言。取值：
     * - 中文：zh-CN
     * - 英文：en-US
     * @example `zh-CN`
     */
    "AcceptLanguage"?: string;
}
