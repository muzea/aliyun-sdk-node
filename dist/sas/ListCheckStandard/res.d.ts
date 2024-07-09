export interface ListCheckStandardResponse {
    /**
     * 检查项信息列表。
     */
    Standards: {
        /**
         * 检查项ID。
         * @example `1`
         */
        Id: number;
        /**
         * 展示名称。
         * @example `身份权限管理`
         */
        ShowName: string;
        /**
         * 条件列表。
         */
        Requirements: {
            /**
             * 条件ID。
             * @example `11`
             */
            Id: number;
            /**
             * 展示名称。
             * @example `RAM身份认证`
             */
            ShowName: string;
            /**
             * 本条件检查项数量。
             * @example `10`
             */
            RiskCheckCount: number;
            ShowPriorityLevel: number;
        }[];
        /**
         * 检查项类型。
         * @example `IDENTITY_PERMISSION`
         */
        Type: string;
        ShowPriorityLevel: number;
    }[];
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `FA91FBDA-***`
     */
    RequestId: string;
}
