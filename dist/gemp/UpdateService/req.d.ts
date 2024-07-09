export interface UpdateServiceRequest {
    /**
     * A short description of struct
     */
    "body"?: {
        /**
         * 服务描述
         * @example `服务描述`
         */
        serviceDescription: string;
        /**
         * 服务名称
         * @example `服务A`
         */
        serviceName: string;
        /**
         * 服务ID
         * @example `10002000`
         */
        serviceId: number;
        /**
         * 幂等号
         * @example `C4BE3837-1A13-413B-A225-2C88188E8A43`
         */
        clientToken: string;
        escalationPlanId: number;
        serviceGroupIdList: number[];
    };
}
