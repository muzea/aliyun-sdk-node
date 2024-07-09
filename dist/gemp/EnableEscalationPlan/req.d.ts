export interface EnableEscalationPlanRequest {
    /**
     * A short description of struct
     */
    "body"?: {
        /**
         * 升级计划ID
         * @example `234534`
         */
        escalationPlanId: number;
        /**
         * 幂等标识
         * @example `A5A1FEAE-9C47-011C-9C73-A376BC2REQUEST`
         */
        clientToken: string;
    };
}
