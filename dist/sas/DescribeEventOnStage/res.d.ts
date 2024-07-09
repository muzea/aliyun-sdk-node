export interface DescribeEventOnStageResponse {
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `24A20733-10A0-4AF6-BE6B-E332241XXXXX`
     */
    RequestId: string;
    /**
     * 威胁检测支持的平台。
     */
    SecurityEventStageResponse: {
        /**
         * 威胁检测支持的平台。
         * - **container**: 容器
         * - **linux**: linux
         * - **windows**: windows
         */
        SecurityEventOnStag: any;
    };
}
