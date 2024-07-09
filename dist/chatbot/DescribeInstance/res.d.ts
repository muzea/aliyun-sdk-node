export interface DescribeInstanceResponse {
    /**
     * 请求ID
     * @example `907AA5F2-0521-49AB-80AB-1ADEFAB2B901`
     */
    RequestId: string;
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
     * 机器人的时区，参考《公共-时区码》
     * @example `Asia/Chongqing`
     */
    TimeZone: string;
    /**
     * 机器人备注
     * @example `用于C端问答的机器人`
     */
    Introduction: string;
    /**
     * 机器人服务的语言，如zh-cn、en-us
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
     * 机器人状态
     * @example `PUBLISHED`
     */
    EditStatus: string;
    /**
     * 机器人创建的 UTC 时间
     * @example `2021-08-12T16:00:01Z`
     */
    CreateTime: string;
    /**
     * 类目列表
     */
    Categories: {
        /**
         * 类目ID
         * @example `30000066832`
         */
        CategoryId: number;
        /**
         * 类目名称
         * @example `杭州市防疫政策`
         */
        Name: string;
        /**
         * 父类目ID，-1表示根目录
         * @example `-1`
         */
        ParentCategoryId: number;
    }[];
}
