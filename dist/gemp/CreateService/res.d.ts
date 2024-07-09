export interface CreateServiceResponse {
    /**
     * Id of the request
     * @example `C4BE3837-1A13-413B-A225-2C88188E8A43`
     */
    requestId: string;
    /**
     * 服务ID
     * @example `1`
     */
    data: {
        /**
         * 服务ID
         * @example `1`
         */
        serviceId: number;
    };
}
