export interface GetCallsPerDayRequest {
    /**
     * AICCS实例ID，在智能联络中心控制台上可以看到
     * @example `ccc_xp_pre-cn-***`
     */
    "InstanceId": string;
    /**
     * 开始时间
     * @example `20210316`
     */
    "DataIdStart": string;
    /**
     * 结束时间
     * @example `20210316`
     */
    "DataIdEnd": string;
    /**
     * 查询结果按日分组
     * @example `Y`
     */
    "DataId"?: string;
    /**
     * 查询结果按小时分组
     * @example `Y`
     */
    "HourId"?: string;
    /**
     * 查询结果按分钟分组
     * @example `Y`
     */
    "MinuteId"?: string;
    /**
     * 手机号，多个手机号可以使用逗号隔开
     * @example `1583709xxxx`
     */
    "PhoneNumbers"?: string;
    /**
     * 手机号，多个手机号可以使用逗号隔开
     * @example `1583709xxxx`
     */
    "HavePhoneNumbers"?: string;
    /**
     * 当前页
     * @example `1`
     */
    "PageNo": number;
    /**
     * 页大小
     * @example `10`
     */
    "PageSize": number;
}
