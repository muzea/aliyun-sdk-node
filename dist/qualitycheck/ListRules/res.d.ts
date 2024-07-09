export interface ListRulesResponse {
    /**
     * 请求ID。
     * @example `82C91484-B2D5-4D2A-A21F-A6D73F**	`
     */
    RequestId: string;
    /**
     * 请求是否成功，调用方可根据此字段来判断请求是否成功：true表示成功；false/null表示失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 结果代码，200表示成功，若为别的值则表示失败，调用方可根据此字段判断失败原因。
     * @example `200`
     */
    Code: string;
    /**
     * 出错时表示出错详情，成功时为successful。
     * @example `successful`
     */
    Message: string;
    /**
     * 规则列表页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 每页行数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 总条数。
     * @example `20`
     */
    Count: number;
    /**
     * 规则列表
     */
    Data: {
        /**
         * 规则所属的规则类型的type值。
         * @example `1`
         */
        Type: number;
        /**
         * 规则类别，可能值：
         * - 1：自定义创建的规则
         * - 0：系统预置规则
         * @example `1`
         */
        RuleType: number;
        /**
         * 规则的创建时间。
         * @example `2020-04-20T20:10Z`
         */
        CreateTime: string;
        /**
         * 规则的备注信息。
         * @example `检测是否出现了禁用语`
         */
        Comments: string;
        /**
         * 规则所属的规则类型的名称。
         * @example `服务规范`
         */
        TypeName: string;
        /**
         * 规则名称。
         * @example `禁用语检测`
         */
        Name: string;
        /**
         * 规则ID。
         * @example `1234567`
         */
        Rid: number;
        /**
         * 规则所关联的适用业务名称。
         */
        BusinessCategoryNameList: string[];
    }[];
}
