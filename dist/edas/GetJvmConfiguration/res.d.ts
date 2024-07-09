export interface GetJvmConfigurationResponse {
    /**
     * 状态码。
     * @example `200`
     */
    Code: number;
    /**
     * 附加信息。
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `3F43-F34V-0VCD***********`
     */
    RequestId: string;
    /**
     * 应用或应用分组的JVM配置。
     */
    JvmConfiguration: {
        /**
         * 持久代内存大小，单位为M。
         * @example `1000`
         */
        MaxPermSize: number;
        /**
         * 最大堆内存大小，单位为M。
         * @example `1000`
         */
        MaxHeapSize: number;
        /**
         * 自定义参数。
         * @example `-XX:+UseConcMarkSweepGC -XX:-UseParNewGC`
         */
        Options: string;
        /**
         * 初始化堆内存大小，单位为M。
         * @example `500`
         */
        MinHeapSize: number;
    };
}
