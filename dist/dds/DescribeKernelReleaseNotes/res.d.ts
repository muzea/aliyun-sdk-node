export interface DescribeKernelReleaseNotesResponse {
    /**
     * 请求ID。
     * @example `F01D4DDA-CB72-4083-B399-AF4642294FE6`
     */
    RequestId: string;
    ReleaseNotes: {
        /**
         * 版本发布日志信息列表。
         */
        ReleaseNote: {
            /**
             * 发布日志。
             * @example `放开sharding某集合开关balancer的限制`
             */
            ReleaseNote: string;
            /**
             * 版本号。
             * @example `mongodb_20180619_0.4.9`
             */
            KernelVersion: string;
        }[];
    };
}
