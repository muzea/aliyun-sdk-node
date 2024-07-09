export interface ListInstanceResponse {
    /**
     * 机器人列表信息
     */
    Instances: {
        /**
         * 机器人唯一标识
         * @example `chatbot-cn-mp90s2lrk00050`
         */
        InstanceId: string;
        /**
         * 机器人名称
         * @example `智能客服-小C`
         */
        Name: string;
        /**
         * 机器人备注
         * @example `用于C端问答的机器人`
         */
        Introduction: string;
        /**
         * 机器人服务的语言，如 zh-cn、en-us，参考 http://www.lingoes.net/zh/translator/langcode.htm
         * @example `zh-cn`
         */
        LanguageCode: string;
        /**
         * 机器人类型
         * @example `scenario_im`
         */
        RobotType: string;
        /**
         * 机器人头像的URL
         * @example `/alimefe/meebot/robot/0.0.5/img/xxx-90-97.png`
         */
        Avatar: string;
        /**
         * 机器人创建的 UTC 时间
         * @example `2021-08-12T16:00:01Z`
         */
        CreateTime: string;
    }[];
    /**
     * 总条数
     * @example `23`
     */
    TotalCount: number;
    /**
     * 分页-页面大小
     * @example `5`
     */
    PageSize: number;
    /**
     * 分页-第几页
     * @example `1`
     */
    PageNumber: number;
    /**
     * 请求ID
     * @example `92B81548-42B9-4B34-924B-4E778AEB412B`
     */
    RequestId: string;
}
