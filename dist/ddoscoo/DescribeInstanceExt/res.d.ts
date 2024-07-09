export interface DescribeInstanceExtResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `CF33B4C3-196E-4015-AADD-5CAD00057B80`
     */
    RequestId: string;
    /**
     * DDoS高防实例的扩展信息。
     */
    InstanceExtSpecs: {
        /**
         * 实例ID。
         * @example `ddoscoo-cn-i7m25564****
        `
         */
        InstanceId: string;
        /**
         * 业务带宽。单位：Mbps。
         * @example `100`
         */
        NormalBandwidth: number;
        /**
         * 功能版本，取值：
         * - **0**：标准版
         * - **1**：增强版
         * @example `0`
         */
        FunctionVersion: number;
        /**
         * 中国内地实例的线路资源。
         * @example `coop-line-001`
         */
        ServicePartner: string;
        /**
         * 要查询的DDoS高防实例的类型。取值：
         * - **0**：表示DDoS高防（非中国内地）保险版。
         * - **1**：表示DDoS高防（非中国内地）无忧版。
         * - **2**：表示DDoS高防（非中国内地）加速线路。
         * - **3**：表示DDoS高防（非中国内地）安全加速线路。
         * - **9**：表示DDoS高防（中国内地）专业版。
         * @example `0`
         */
        ProductPlan: number;
    }[];
    /**
     * 实例总个数。
     * @example `10`
     */
    TotalCount: number;
}
