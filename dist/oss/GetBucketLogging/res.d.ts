export interface GetBucketLoggingResponse {
    /**
     * 访问日志状态信息的容器。
     */
    BucketLoggingStatus: {
        /**
         * 访问日志信息的容器。此元素在开启时返回，关闭时不返回。
         */
        LoggingEnabled: any;
    };
}
