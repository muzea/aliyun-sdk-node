export interface TransformToPrePaidRequest {
    /**
     * 实例ID，可调用[DescribeInstances](~~60933~~)获取。
     * @example `r-bp1zxszhcgatnx****`
     */
    "InstanceId": string;
    /**
     * 预付费时长，单位为月。取值：**1**~**9**、**12**、**24**、**36**。
     * @example `12`
     */
    "Period": number;
    /**
     * 是否自动付款，取值：
     * * **true**：自动付款。
     * * **false**：手动付款（默认），您通过控制台对实例进行手动续费，详情请参见[手动续费](~~26352~~)。
     * @example `true`
     */
    "AutoPay"?: boolean;
}
