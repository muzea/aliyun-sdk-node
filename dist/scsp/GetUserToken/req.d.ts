export interface GetUserTokenRequest {
    /**
     * AICCS实例ID，在智能联络中心控制台上可以看到
     * @example `ccc_xp_pre-cn-***`
     */
    "InstanceId": string;
    /**
     * 用户id
     * @example `875436`
     */
    "UserId": string;
    /**
     * 用户昵称
     * @example `花花`
     */
    "Nick"?: string;
    /**
     * 应用访问标识(由服务方颁发)
     * @example `54678765`
     */
    "AppKey": string;
}
