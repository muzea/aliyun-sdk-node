export interface ListEscalationPlanServicesResponse {
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
         * 范围类型
         * @example `SERVICE`
         */
        scope: string;
        /**
         * 范围对象id
         * @example `23`
         */
        scopeObjectId: number;
    }[];
}
