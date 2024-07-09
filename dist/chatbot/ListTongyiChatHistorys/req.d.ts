export interface ListTongyiChatHistorysRequest {
    /**
     * 查询开始时间,时间格式为yyyy-MM-dd HH:mm:ss,⽐如 2024-04-01 00:00:00
     * @example `2024-04-01 00:00:00`
     */
    "StartTime": string;
    /**
     * 查询结束时间,时间格式为yyyy-MM-dd HH:mm:ss,⽐如 2024-04-01 08:00:00
     * @example `2024-04-01 08:00:00`
     */
    "EndTime": string;
    /**
     * 机器⼈实例id
     * @example `chatbot-cn-7QuUfaqMQe`
     */
    "RobotInstanceId": string;
    /**
     * 数据条数,默认30条,最大值为500
     * @example `30`
     */
    "Limit"?: number;
    /**
     * 业务空间key，不传时访问默认业务空间，key值在主账号业务管理页面获取
     * @example `ac627989eb4f8a98ed05fd098bbae5_p_beebot_public`
     */
    "AgentKey"?: string;
}
