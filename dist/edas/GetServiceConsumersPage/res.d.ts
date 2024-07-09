export interface GetServiceConsumersPageResponse {
    /**
     * 接口请求的状态码。
     * @example `200`
     */
    Code: number;
    /**
     * 接口请求返回的信息。
     * @example `success`
     */
    Message: string;
    /**
     * 调用是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 数据结构体。
     */
    Data: {
        /**
         * 总页数。
         * @example `1`
         */
        TotalPages: number;
        /**
         * 总数据量。
         * @example `3`
         */
        TotalElements: number;
        /**
         * 页大小。
         * @example `5`
         */
        Size: number;
        /**
         * 组数据。
         */
        Content: {
            /**
             * 服务消费者IP。
             * @example `10.20.x.xx`
             */
            Ip: string;
            /**
             * 服务消费者名称。
             * @example `k8s-lq-cartservice`
             */
            EdasAppName: string;
            /**
             * 服务消费者ID。
             * @example `efbda488-7b33-432f-a40d-****0047****`
             */
            EdassAppId: string;
        }[];
    };
}
