export interface GetServiceResponse {
    /**
     * Id of the request
     * @example `C4BE3837-1A13-413B-A225-2C88188E8A43`
     */
    requestId: string;
    /**
     * 服务详情
     */
    data: {
        /**
         * 服务ID
         * @example `1`
         */
        serviceId: number;
        /**
         * 服务名字
         * @example `保洁服务`
         */
        serviceName: string;
        /**
         * 服务描述
         * @example `服务描述`
         */
        serviceDescription: string;
        /**
         * 修改时间
         * @example `2020-03-08 12:53:53`
         */
        updateTime: string;
        serviceGroupIdList: number[];
        /**
         *
         * @example `1`
         */
        escalationPlanId: number;
    };
}
