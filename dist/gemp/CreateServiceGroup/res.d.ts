export interface CreateServiceGroupResponse {
    /**
     * Id of the request
     * @example `C4BE3837-1A13-413B-A225-2C88188E8A43`
     */
    requestId: string;
    /**
     * 服务组ID
     * @example `1`
     */
    data: {
        /**
         * 服务组ID
         * @example `1000`
         */
        serviceGroupId: number;
    };
}
