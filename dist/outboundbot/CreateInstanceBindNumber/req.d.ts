export interface CreateInstanceBindNumberRequest {
    /**
     * 绑定的号码
     * @example `10088`
     */
    "Number"?: string;
    /**
     * 智能外呼实例ID列表
     * @example `1,2,4,5`
     */
    "InstanceList"?: string;
}
