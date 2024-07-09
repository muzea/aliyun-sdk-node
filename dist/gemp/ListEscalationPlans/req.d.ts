export interface ListEscalationPlansRequest {
    /**
     * A short description of struct
     */
    "body"?: {
        /**
         * 升级计划名
         * @example `xxx`
         */
        escalationPlanName: string;
        /**
         * 服务名称
         * @example `ssxx`
         */
        serviceName: string;
        /**
         * 幂等标识
         * @example `A5A1FEAE-9C47-011C-9C73-A376BC2REQUEST`
         */
        clientToken: string;
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
        isGlobal: boolean;
        status: string;
    };
}
