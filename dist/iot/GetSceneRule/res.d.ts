export interface GetSceneRuleResponse {
    /**
     * 接口返回码。Success表示成功，其它表示错误码。详情请参见[错误码](~~135200~~)。
     * @example `Success`
     */
    Code: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `1B6D50A7-F160-4D47-863C-EDEE25E26495`
     */
    RequestId: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `request parameter error`
     */
    ErrorMessage: string;
    /**
     * 表示是否调用成功。true表示调用成功，false表示调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 调用成功时返回的数据。
     */
    Data: {
        /**
         * 场景联动规则在云端的状态。
         * - 0：表示停止。
         * - 1：表示启动。
         * @example `0`
         */
        RuleStatus: number;
        /**
         * 场景联动规则内容。
         * @example `{\"action\":[{\"params\":{\"productKey\":\"a19luLB****\",\"propertyItems\":{\"LightAdjustLevel\":10},\"deviceName\":\"test01\"},\"uri\":\"action/device/setProperty\"}],\"trigger\":{\"params\":{\"cron\":\"22 13 20 1 *\",\"cronType\":\"linux\"},\"uri\":\"trigger/timer\"},\"type\":\"IFTTT\",\"sid\":\"9df954b33c854d469a507ef8d6******\"}`
         */
        RuleContent: string;
        /**
         * 场景联动规则的创建时间。
         * @example `1584085921000`
         */
        GmtCreate: number;
        /**
         * 场景联动规则最后一次更新的时间。
         * @example `1579493552000`
         */
        GmtModified: number;
        /**
         * 场景联动规则描述。
         * @example `测试`
         */
        RuleDescription: string;
        /**
         * 场景联动规则的名称。
         * @example `test`
         */
        RuleName: string;
    };
}
