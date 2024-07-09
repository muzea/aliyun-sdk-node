export interface RedialCallRequest {
    /**
     * 呼叫中心实例ID。
     * @example `abc`
     */
    "InstanceId": string;
    /**
     * 座席用户ID信息。
     * @example `samzhang@abc`
     */
    "UserId"?: string;
    /**
     * 座席端提供的唯一ID，用来表示一个座席工作台。
     * @example `CCC-x.x.x.x-chrome102-bsdf911812c60f61e`
     */
    "DeviceId"?: string;
    /**
     * 主叫号码。
     * @example `0109810****`
     */
    "Caller"?: string;
    /**
     * 被叫号码。
     * @example `1318888****`
     */
    "Callee"?: string;
    /**
     * 超时时间，呼叫在经过该参数指定的时间仍然未接通的情况下，则主动挂断。
     * @example `30`
     */
    "TimeoutSeconds"?: number;
    /**
     * 随路数据，不能超过128字节，主要用于扩展需求，普通客户无需关心。
     * @example `a=b`
     */
    "Tags"?: string;
    /**
     * 话务ID。用来重拨的上一通电话的话务ID。
     * @example `job-6581536084722****`
     */
    "JobId"?: string;
}
