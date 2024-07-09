export interface ListServiceGroupsRequest {
    /**
     * A short description of struct
     */
    "body"?: {
        /**
         * 搜索名称
         * @example `王宇`
         */
        queryName: string;
        /**
         * 搜索类型 USER用户 SERVICEGROUP服务组
         * @example `USER`
         */
        queryType: string;
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
         * 幂等号
         * @example `C4BE3837-1A13-413B-A225-2C88188E8A43`
         */
        clientToken: string;
        /**
         * 是否排过班
         * @example `false`
         */
        isScheduled: boolean;
        /**
         * 订单状态
         * @example `false`
         */
        orderByScheduleStatus: boolean;
        /**
         * 用户ID
         * @example `100000`
         */
        userId: number;
        serviceId: number;
    };
}
