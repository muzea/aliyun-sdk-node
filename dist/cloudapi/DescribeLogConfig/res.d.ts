export interface DescribeLogConfigResponse {
    /**
     * 本次请求的ID。
     * @example `E3BC2706-ABDB-5B64-A12F-08DFD9E3F339`
     */
    RequestId: string;
    LogInfos: {
        /**
         * 日志信息
         */
        LogInfo: {
            /**
             * SLS 的 log store 值。
             * @example `slsstore`
             */
            SlsLogStore: string;
            /**
             * 日志类型
             * @example `PROVIDER`
             */
            LogType: string;
            /**
             * SLS 项目
             * @example `slsproject`
             */
            SlsProject: string;
            /**
             * 日志服务的区域ID
             * @example `cn-hangzhou`
             */
            RegionId: string;
        }[];
    };
}
