export interface ListLgfResponse {
    /**
     * 请求ID
     * @example `34fg57h2gh5783`
     */
    RequestId: string;
    /**
     * LGF列表
     */
    Lgfs: {
        /**
         * 意图ID
         * @example `256756734345`
         */
        IntentId: number;
        /**
         * LGF ID
         * @example `123`
         */
        LgfId: number;
        /**
         * LGF规则
         * @example `.{0,5}北京天气`
         */
        RuleText: string;
        /**
         * 创建时间(UTC时间）
         * @example `2021-08-12T16:00:01Z`
         */
        CreateTime: string;
        /**
         * 修改时间（UTC时间）
         * @example `2021-08-12T16:00:01Z`
         */
        ModifyTime: string;
    }[];
    /**
     * 总条数
     * @example `1`
     */
    TotalCount: number;
    /**
     * 当前页，默认1
     * @example `1`
     */
    PageNumber: number;
    /**
     * 页面大小，默认10
     * @example `10`
     */
    PageSize: number;
}
