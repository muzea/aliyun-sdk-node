export interface ListServicesResponse {
    /**
     * Id of the request
     * @example `C4BE3837-1A13-413B-A225-2C88188E8A43`
     */
    requestId: string;
    /**
     * 服务列表
     */
    data: {
        /**
         * 服务ID
         * @example `1`
         */
        serviceId: number;
        /**
         * 服务名字
         * @example `购物车`
         */
        serviceName: string;
        /**
         * 服务描述
         * @example `服务描述`
         */
        serviceDescription: string;
        /**
         * 修改时间
         * @example `2020-09-08 14:30:30`
         */
        updateTime: string;
        /**
         * 是否合法
         * @example `1`
         */
        isValid: number;
        /**
         * 升级策略名称
         */
        escalationPlanName: string;
        /**
         * 升级策略ID
         */
        escalationPlanId: number;
        /**
         * 服务组ID列表
         */
        serviceGroupIdList: number[];
    }[];
    /**
     * 当前页
     * @example `1`
     */
    pageNumber: number;
    /**
     * 页大小
     * @example `10`
     */
    pageSize: number;
    /**
     * 总条数
     * @example `100`
     */
    totalCount: number;
}
