export interface DescribeClientConfSetupResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `151F6EB6-D5F3-417A-AF7B-4D84975D****`
     */
    RequestId: string;
    /**
     * 客户端资源配置信息。
     */
    ClientConf: {
        /**
         * 设置的策略值。
         * 有以下三种类型：
         * - major
         * - advanced
         * - basic
         * @example `major`
         */
        StrategyTagValue: string;
        /**
         * 客户端使用资源配置信息。
         * @example `{"mem":"200","cpu":"10","cpu_all":"0"}`
         */
        Config: string;
        /**
         * 策略标签。
         * @example `machineResource`
         */
        StrategyTag: string;
    };
}
