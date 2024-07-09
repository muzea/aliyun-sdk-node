export interface GetServiceListPageResponse {
    /**
     * 接口状态或POP错误码。
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
     *
     * 数据。
     */
    Data: {
        /**
         * 总页数。
         * @example `1`
         */
        TotalPages: number;
        /**
         * 总数据量。
         * @example `6`
         */
        TotalElements: number;
        /**
         * 页大小。
         * @example `8`
         */
        Size: number;
        /**
         * 组数据。
         */
        Content: {
            /**
             * 应用名。
             * @example `k8s-lq-cartservice`
             */
            EdasAppName: string;
            /**
             * 实例数量。
             * @example `1`
             */
            InstanceNum: number;
            /**
             * 版本号。
             * @example `1.0.0`
             */
            Version: string;
            /**
             * 服务ID。
             * @example `xx`
             */
            ServiceId: string;
            /**
             * 应用ID。
             * @example `efbda488-7b33-432f-****-36530047****`
             */
            EdasAppId: string;
            /**
             * 服务名。
             * @example `com.alibabacloud.hipstershop.CartService`
             */
            ServiceName: string;
            /**
             * 注册类型。
             * @example `xx`
             */
            RegisterType: string;
            /**
             * 分组。
             * @example `DUBBO`
             */
            Group: string;
        }[];
    };
}
