export interface ListQuotaApplicationTemplatesResponse {
    /**
     * 请求ID。
     * @example `D47B3A10-CDAC-5412-B2EE-EC9A3DBE9053`
     */
    RequestId: string;
    /**
     * 本次查询的最大记录条数。
     * @example `30`
     */
    MaxResults: number;
    /**
     * 用来标记当前调用返回读取到的位置。
     * > 该参数返回为空，表示数据已读取完毕。
     * @example `1`
     */
    NextToken: string;
    /**
     * 本次请求返回的全部记录条数。
     * @example `40`
     */
    TotalCount: number;
    /**
     * 配额模板列表。
     */
    QuotaApplicationTemplates: {
        /**
         * 配额模板ID。
         * @example `1****`
         */
        Id: string;
        /**
         * 云服务名称缩写。
         * @example `ecs`
         */
        ProductCode: string;
        /**
         * 配额维度。
         * 格式：{"regionId":"地域"}。
         * @example `{"regionId":"cn-hangzhou"}`
         */
        Dimensions: any;
        /**
         * 配额申请值。
         * @example `802`
         */
        DesireValue: number;
        /**
         * 配额提升申请结果是否通知。取值：
         * - 0：否。
         * - 3：是。
         * @example `0`
         */
        NoticeType: number;
        /**
         * 配额ID。
         * @example `q_security-groups`
         */
        QuotaActionCode: string;
        /**
         * 配额调整类型。取值：
         * - continuous：连续。
         * - discontinuous：间断。
         * @example `continuous`
         */
        ApplicableType: string;
        /**
         * 无
         */
        ApplicableRange: number[];
        /**
         * 配额告警通知的语言。取值：
         * - zh：中文。
         * - en：英文。
         * @example `zh`
         */
        EnvLanguage: string;
        /**
         * 配额名称。
         * @example `安全组总数量上限`
         */
        QuotaName: string;
        /**
         * 配额描述信息。
         * @example `当前账号可拥有的安全组的最大数量。`
         */
        QuotaDescription: string;
        /**
         * 配额生效的UTC时间。
         * @example `2022-09-28T06:07:00Z`
         */
        EffectiveTime: string;
        /**
         * 配额失效的UTC时间。
         * @example `2022-09-29T06:07:00Z`
         */
        ExpireTime: string;
        /**
         * 配额类型。
         * - CommonQuota：通用配额。
         * - FlowControl：API速率配额
         * - WhiteListLabel：权益配额。
         * @example `CommonQuota`
         */
        QuotaCategory: string;
        /**
         * 配额计算周期。
         */
        Period: {
            /**
             * 配额计算周期的取值。
             * @example `1`
             */
            PeriodValue: number;
            /**
             * 配额计算周期的单位。取值：
             * - second：秒。
             * - minute：分钟。
             * - hour：小时。
             * - day：天。
             * - week：周
             * @example `day`
             */
            PeriodUnit: string;
        };
    }[];
}
