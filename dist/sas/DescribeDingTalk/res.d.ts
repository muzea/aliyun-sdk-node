export interface DescribeDingTalkResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `B256A525-7E42-4BB9-A27C-9017FDDFF1A2`
     */
    RequestId: string;
    /**
     * 分页信息。
     */
    PageInfo: {
        /**
         * 分页查询时，当前页的页码。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 分页查询时，显示每页数据的最大条数。
         * @example `20`
         */
        PageSize: number;
        /**
         * 总条数。
         * @example `149`
         */
        TotalCount: number;
    };
    /**
     * 通知列表。
     */
    ActionList: {
        /**
         * 通知状态。取值：
         * - **0**：关闭通知
         * - **1**：启用通知
         * @example `0`
         */
        Status: number;
        /**
         * 消息的通知范围配置。该值为JSON串，包含以下字段：
         * - **type**：通知类型
         * - **configItemList**：通知范围
         * @example `[{"type":"sas_analysis_pre-sas-operation-log-sas-event-suspicious","configItemList":[{"key":"item_level","valueList":["all"]}]},{"type":"sas_analysis_pre-sas-operation-log-sas-event-hc","configItemList":[{"key":"item_level","valueList":["all"]}]}]`
         */
        ConfigList: string;
        /**
         * 创建时间戳。单位：毫秒。
         * @example `1550828400000`
         */
        GmtCreate: number;
        /**
         * 通知名称。
         * @example `TestRuleAction`
         */
        ActionName: string;
        /**
         * 通知参数。
         * @example `https://oapi.dingtalk.com/robot/send`
         */
        Url: string;
        /**
         * 用户的UID。
         * @example `12312412341`
         */
        AliUid: number;
        /**
         * 通知的语言。取值：
         * - **zh**：中文
         * - **en**：英文
         * @example `zh`
         */
        DingTalkLang: string;
        /**
         * 时间间隔。单位：分钟。
         * @example `1000`
         */
        IntervalTime: number;
        /**
         * 修改时间。
         * @example `1550828400000`
         */
        GmtModified: number;
        /**
         * 分组ID列表。
         * @example `"123,456"`
         */
        GroupIdList: string;
        /**
         * 通知消息ID。
         * @example `1`
         */
        Id: number;
    }[];
}
