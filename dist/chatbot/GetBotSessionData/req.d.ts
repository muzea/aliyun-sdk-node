export interface GetBotSessionDataRequest {
    /**
     * 查询开始时间，时间格式为yyyyMMdd，⽐如20240505
     * @example `20240505`
     */
    "StartTime": string;
    /**
     * 查询结束时间，时间格式为yyyyMMdd，⽐如20240605
     * @example `20240605`
     */
    "EndTime": string;
    /**
     * 机器⼈实例id
     * @example `chatbot-cn-7QuUfaqMQe`
     */
    "RobotInstanceId": string;
    /**
     * 业务空间key，不设置则访问默认业务空间，key值在主账号业务管理页面获取
     * @example `ac627989eb4f8a98ed05fd098bbae5_p_beebot_public`
     */
    "AgentKey"?: string;
}
