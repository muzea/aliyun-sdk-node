export interface UpdateJvmConfigurationResponse {
    /**
     * 接口状态码
     * @example `200`
     */
    Code: number;
    /**
     * 附加信息
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID
     * @example `D16979DC-4D42-********************`
     */
    RequestId: string;
    /**
     * JVM参数
     */
    JvmConfiguration: {
        /**
         * 持久代内存大小，单位MB。
         * @example `1000`
         */
        MaxPermSize: number;
        /**
         * 可选参数
         * @example `”“`
         */
        Options: string;
        /**
         * 最大堆内存大小，单位MB。
         * @example `500`
         */
        MaxHeapSize: number;
        /**
         * 初始化堆内存大小，单位MB。
         * @example `500`
         */
        MinHeapSize: number;
    };
}
