export interface ModifyInstanceTagsRequest {
    /**
     * OceanBase 集群 ID。
     * @example `ob317v4uif****`
     */
    "InstanceId": string;
    /**
     * 标签值。
     * @example `[{"Key": "xxx", "Value", "xxx"},{}]`
     */
    "Tags": string;
}
