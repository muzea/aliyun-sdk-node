export interface ModifyInstanceRequest {
    /**
     * 实例ID
     * @example `12f407b22cbe4890ac595f09985848d5`
     */
    "InstanceId": string;
    "Name"?: string;
    /**
     * 描述
     * @example `描述`
     */
    "Description"?: string;
    /**
     * 实例最大并发数
     * @example `10`
     */
    "Concurrency": number;
}
