export interface ListServicesRequest {
    /**
     * A short description of struct
     */
    "body"?: {
        /**
         * 服务名称
         * @example `购物车`
         */
        serviceName: string;
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
    };
}
