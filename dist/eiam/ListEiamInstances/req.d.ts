export interface ListEiamInstancesRequest {
    /**
     * 实例ID列表
     */
    "InstanceIds"?: string[];
    /**
     * 实例所属Region
     * @example `cn-hangzhou`
     */
    "InstanceRegionId"?: string;
}
