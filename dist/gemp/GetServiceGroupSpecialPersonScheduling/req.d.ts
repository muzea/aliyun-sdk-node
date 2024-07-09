export interface GetServiceGroupSpecialPersonSchedulingRequest {
    /**
     * A short description of struct
     */
    "body"?: {
        /**
         * 用户ID
         * @example `66666`
         */
        userId: number;
        /**
         * 服务组ID
         * @example `77777`
         */
        serviceGroupId: number;
        /**
         * 幂等号
         * @example `C4BE3837-1A13-413B-A225-2C88188E8A43`
         */
        clientToken: string;
    };
}
