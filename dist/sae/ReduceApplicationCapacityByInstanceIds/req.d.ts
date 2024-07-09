export interface ReduceApplicationCapacityByInstanceIdsRequest {
    /**
     * 目标应用ID。
     * @example `0099b7be-5f5b-4512-a7fc-56049ef1****`
     */
    "AppId": string;
    /**
     * 实例ID。可填写多个实例ID，用英文逗号（,）分隔。
     * @example `b2a8a925-477a-4ed7-b825-d5e22500****`
     */
    "InstanceIds": string;
}
