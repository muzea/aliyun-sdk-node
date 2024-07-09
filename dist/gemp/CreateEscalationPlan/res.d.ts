export interface CreateEscalationPlanResponse {
    /**
     * Id of the request
     * @example `A5A1FEAE-9C47-011C-9C73-A376BC21925D`
     */
    requestId: string;
    /**
     * data
     */
    data: {
        /**
         * 升级计划id
         * @example `234532`
         */
        escalationPlanId: number;
    };
}
