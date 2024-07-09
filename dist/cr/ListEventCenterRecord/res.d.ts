export interface ListEventCenterRecordResponse {
    /**
     * 请求ID
     * @example `665C7A5E-BAEC-5BCD-AF9F-5F9260D672BF`
     */
    RequestId: string;
    /**
     * 返回值
     * @example `success`
     */
    Code: string;
    /**
     * 页号
     * @example `1`
     */
    PageNo: number;
    /**
     * 是否成功
     * @example `true`
     */
    IsSuccess: boolean;
    /**
     * 页大小
     * @example `30`
     */
    PageSize: number;
    /**
     * 事件历史总条数
     * @example `50`
     */
    TotalCount: number;
    /**
     * 事件历史列表
     * @example `[]`
     */
    Records: {
        /**
         * 事件记录ID
         * @example `crecrr-ctdbzwtkpr*****`
         */
        RecordId: string;
        /**
         * 事件规则ID
         * @example `crecr-n6pbhgjxtla*****`
         */
        RuleId: string;
        /**
         * 实例ID
         * @example `cri-gl34plsa****`
         */
        InstanceId: string;
        /**
         * 事件规则名称
         * @example `chain-demo`
         */
        RuleName: string;
        /**
         * 命名空间
         * @example `mychain`
         */
        Namespace: string;
        /**
         * 仓库名称
         * @example `ruby-2.4.0`
         */
        RepoName: string;
        /**
         * 标签
         * @example `ruby-2.4.0`
         */
        Tag: string;
        /**
         * 通知渠道
         * @example `EVENT_BRIDGE`
         */
        EventChannel: string;
        /**
         * 事件类型
         * @example `cr:Artifact:DeliveryChainCompleted`
         */
        EventType: string;
        /**
         * 通知方式，取值：
         * - `http`：使用HTTP通知
         * - `https`：使用HTTPS通知
         * - `dingding`：使用钉钉通知
         * @example `http`
         */
        EventNotifyMethod: string;
        /**
         * 下游通知的事件ID
         * @example `7d478419-61df-49e5-b92b-30ce730c2127`
         */
        EventNotifyId: string;
        /**
         * 创建时间
         * @example `1638188622000`
         */
        CreateTime: number;
        /**
         * 更新时间
         * @example `1638188622000`
         */
        UpdateTime: number;
    }[];
}
