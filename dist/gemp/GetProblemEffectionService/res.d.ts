export interface GetProblemEffectionServiceResponse {
    /**
     * requestId
     * @example `e2d4306a-bf4d-4345-9ae6-158223c85dbd`
     */
    requestId: string;
    /**
     * data
     */
    data: {
        /**
         * 影响服务id
         * @example `6442430`
         */
        effectionServiceId: number;
        /**
         * 服务名称
         * @example `哈哈`
         */
        serviceName: string;
        /**
         * 服务id
         * @example `170000000`
         */
        serviceId: number;
        /**
         * 影响等级
         * @example `P2`
         */
        level: number;
        /**
         * 影响状态 0 未恢复 1已恢复
         * @example `UN_RECOVERED`
         */
        status: number;
        /**
         * 影响描述
         * @example `ew`
         */
        description: string;
        /**
         * 图片链接
         */
        picUrl: string[];
    };
}
