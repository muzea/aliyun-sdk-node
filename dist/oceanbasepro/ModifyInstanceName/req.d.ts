export interface ModifyInstanceNameRequest {
    /**
     * OceanBase 集群 ID。
     * @example `ob317v4uif****`
     */
    "InstanceId": string;
    /**
     * OceanBase 集群名称。
     * 长度必须为 1 到 20 个字符。
     * @example `ob4prod`
     */
    "InstanceName": string;
}
