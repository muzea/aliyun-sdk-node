export interface GetServiceTrailResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `C699E4E4-F2F4-58FC-A949-457FFE59****`
     */
    RequestId: string;
    /**
     * 服务跟踪配置信息。
     */
    ServiceTrail: {
        /**
         * 服务跟踪开启状态。取值为：
         * - **on：**  开启
         * - **off：**  关闭
         * @example `on`
         */
        Config: string;
        /**
         * 服务跟踪创建时间戳，单位毫秒。
         * @example `1687250241000`
         */
        CreateTime: number;
        /**
         * 服务最近更新时间戳，单位毫秒。
         * @example `1687250241000`
         */
        UpdateTime: number;
    };
}
