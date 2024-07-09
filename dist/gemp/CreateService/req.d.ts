export interface CreateServiceRequest {
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
         * 服务名字
         * @example `服务名字`
         */
        serviceName: string;
        /**
         * 幂等号
         * @example `C4BE3837-1A13-413B-A225-2C88188E8A43`
         */
        clientToken: string;
        escalationPlanId: number;
        serviceGroupIdList: number[];
    };
}
