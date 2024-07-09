export interface DeleteUserSayRequest {
    /**
     * 业务空间key,不设置则访问默认业务空间，key值在主账号业务管理页面获取
     * @example `ac627989eb4f8a98ed05fd098bbae5_p_beebot_public`
     */
    "AgentKey"?: string;
    /**
     * 机器人ID
     * @example `343df2sdf23`
     */
    "InstanceId": string;
    /**
     * 意图ID
     * @example `5564564546`
     */
    "IntentId": number;
    /**
     * 话术ID
     * @example `4562121234`
     */
    "UserSayId": number;
}
