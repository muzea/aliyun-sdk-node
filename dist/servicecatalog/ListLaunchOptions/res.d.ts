export interface ListLaunchOptionsResponse {
    /**
     * 请求ID。
     * @example `0FEEF92D-4052-5202-87D0-3D8EC16F81BF`
     */
    RequestId: string;
    /**
     * 启动选项列表。
     */
    LaunchOptionSummaries: {
        /**
         * 产品组合ID。
         * @example `port-bp1yt7582g****`
         */
        PortfolioId: string;
        /**
         * 产品组合名称。
         * @example `DEMO-IT服务`
         */
        PortfolioName: string;
        /**
         * 约束列表。
         */
        ConstraintSummaries: {
            /**
             * 约束类型。取值：
             * 1. Launch：启动约束。
             * 2. Template：模板约束。
             * 3. Approval：审批约束。
             * 4. StackRegion：地域约束。
             * @example `Launch`
             */
            ConstraintType: string;
            /**
             * 约束描述。
             * @example `Launch as local role TestRole`
             */
            Description: string;
            /**
             * 需被审批的操作类型列表，当约束类型为审批约束时不为空。
             */
            OperationTypes: string[];
            /**
             * 终端用户可启动的地域列表，当约束类型为地域约束时不为空。
             */
            StackRegions: string[];
        }[];
    }[];
}
