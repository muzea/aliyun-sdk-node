export interface ListBaselineCheckWhiteRecordResponse {
    /**
     * 白名单规则列表。
     */
    List: {
        /**
         * 白名单记录的ID。
         * @example `79412`
         */
        RecordId: number;
        /**
         * 检查项ID。
         * @example `696`
         */
        CheckId: number;
        /**
         * 生效目标类型：
         * - **all_instance**：全部主机
         * - **instance**：部分主机
         * @example `instance`
         */
        TargetType: string;
        /**
         * 加白目标。
         * @example `HOST_BASELINE_WHITE_LIST_21`
         */
        Target: string;
        /**
         * 加白原因。
         * @example `暂时忽略
        `
         */
        Reason: string;
        /**
         * 数据来源。取值：
         * - **default**：主机
         * - **agentless**：agentless
         * @example `agentless`
         */
        Source: string;
        /**
         * 指定请求和接收消息的语言类型，默认值为**zh**。取值：
         * - **zh**：中文
         * - **en**：英文
         * @example `en`
         */
        Lang: string;
        /**
         * 检查项描述。
         * @example `Config the Event Audit policys`
         */
        CheckItem: string;
        /**
         * 检查项类别。
         * @example `Security audit`
         */
        CheckType: string;
        /**
         * 检查项类型展示名称。
         * @example `Security audit`
         */
        CheckTypeDisName: string;
    }[];
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
         * 分页查询时，显示的每页数据的最大条数。
         * @example `20`
         */
        PageSize: number;
        /**
         * 查询到的数据总条数。
         * @example `45`
         */
        TotalCount: number;
        /**
         * 分页查询时，当前页显示的数据条数。
         * @example `2`
         */
        Count: number;
    };
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `9F4E6157-9600-5588-86B9-38F09067****`
     */
    RequestId: string;
}
