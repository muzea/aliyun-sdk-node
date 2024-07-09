export interface GetCMSIdByForeignIdRequest {
    /**
     * AICCS实例ID，在智能联络中心控制台上可以看到
     * @example `ccc_xp_pre-cn-***`
     */
    "InstanceId": string;
    /**
     * 昵称
     * @example `张三`
     */
    "Nick"?: string;
    /**
     * 外部id
     * @example `zhangsan`
     */
    "ForeignId": string;
    /**
     * 用户来源
     * @example `1`
     */
    "SourceId": number;
}
