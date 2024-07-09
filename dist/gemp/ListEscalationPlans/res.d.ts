export interface ListEscalationPlansResponse {
    /**
     * Id of the request
     * @example `A5A1FEAE-9C47-011C-9C73-A376BC2REQUEST`
     */
    requestId: string;
    /**
     * data
     */
    data: {
        /**
         * 升级计划id
         * @example `43`
         */
        escalationPlanId: number;
        /**
         * 升级计划名称
         * @example `升级计划2345`
         */
        escalationPlanName: string;
        /**
         * 升级计划范围对象
         */
        escalationPlanScopeObjects: {
            /**
             * 范围对象id（服务id）
             * @example `23`
             */
            scopeObjectId: number;
            /**
             * 范围对象名称
             * @example `某服务1`
             */
            scopeObjectName: string;
            /**
             * 范围对象类型
             * @example `SERVICE`
             */
            scope: string;
            scopeObjectDeletedType: number;
        }[];
        /**
         * 启用ENABLE 禁用DISABLE
         * @example `ENABLE`
         */
        status: string;
        /**
         * 修改时间
         * @example `2021-09-09 09:09:09`
         */
        modifyTime: string;
        isGlobal: boolean;
    }[];
    /**
     * 总条数
     * @example `878`
     */
    totalCount: number;
    /**
     * 分页参数
     * @example `1`
     */
    pageNumber: number;
    /**
     * 分页参数
     * @example `10`
     */
    pageSize: number;
}
