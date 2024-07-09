export interface GetCheckSaleResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `F5CF78A7-30AA-59DB-847F-13EE3AE7****`
     */
    RequestId: string;
    /**
     * 云产品配置检查售卖信息。
     */
    CheckSale: {
        /**
         * 购买授权数。
         * @example `1000`
         */
        PurchaseCount: number;
        /**
         * 消耗授权数。
         * @example `500`
         */
        ConsumeCount: number;
        /**
         * 是否为存量用户，售卖功能发布（2023年07月07日）之前，是否使用云产品配置检查功能的用户。取值：
         * - **true**：存量用户
         * - **false**：非存量用户
         * @example `true`
         */
        LoyalUser: boolean;
        /**
         * 售卖用户类型。取值：
         * - **1**：全功能用户，可以使用所有的检查项
         * - **2**：需要升级用户，只能使用售卖功能发布（2023年07月07日）之前的检查项
         * - **3**：需要购买用户，不能使用云产品配置检查功能
         * @example `1`
         */
        SaleUserType: number;
    };
}
