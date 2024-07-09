export interface DescribePoliciesResponse {
    /**
     * 请求ID。
     * @example `9439169C-64C1-5849-9F7C-E3E60BDDEF7A`
     */
    RequestId: string;
    /**
     * 策略治理规则库列表。
     */
    Policies: {
        /**
         * 策略类型。
         * @example `psp`
         */
        Category: string;
        /**
         * 策略名称列表。
         */
        Names: string[];
    }[];
}
