export interface CreateCollectorResponse {
    /**
     * 请求ID。
     * @example `8466BDFB-C513-4B8D-B4E3-5AB256AB****`
     */
    RequestId: string;
    /**
     * 返回结果。
     */
    Result: {
        /**
         * 创建成功的采集器ID。
         * @example `ct-cn-4135is2tj194p****`
         */
        resId: string;
    };
}
