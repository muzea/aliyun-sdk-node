export interface ModifyOutboundCallNumberRequest {
    /**
     * 实例id
     * @example `52e80b02-0126-4556-a1e6-ef5b3747ed53/a9a3ddc7-d7d7-48cd-82b5-b31bb5510e71_2a66f8ad-dfbb-4980-9b84-439171295a11.xlsx`
     */
    "InstanceId": string;
    /**
     * 修改的号码
     * @example `10088`
     */
    "Number": string;
    /**
     * 限流时间范围，单位为秒
     * @example `100`
     */
    "RateLimitPeriod": number;
    /**
     * 限流时间范围时间内可以呼出的次数
     * @example `10`
     */
    "RateLimitCount": number;
    /**
     * 号码id
     * @example `fa0e21e9-caab-4629-9121-1e341243d599`
     */
    "OutboundCallNumberId": string;
}
