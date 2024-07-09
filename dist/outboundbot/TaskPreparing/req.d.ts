export interface TaskPreparingRequest {
    /**
     * 实例id
     * @example `33040b9a-b04b-452f-b554-cd6f3a15f850`
     */
    "InstanceId": string;
    /**
     * 任务id
     * @example `c9e42cd7-ba99-4872-9802-e05719ab051c`
     */
    "JobId": string;
    /**
     * 实例所属账号id
     * @example `1971226538081821`
     */
    "InstanceOwnerId"?: number;
}
