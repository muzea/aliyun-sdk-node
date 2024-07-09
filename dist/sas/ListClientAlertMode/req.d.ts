export interface ListClientAlertModeRequest {
    /**
     * 指定防护模式。取值：
     * - **strict**：严格模式，有一定的误报风险，建议在重保期间使用。
     * - **balance**：均衡模式，在减少误报的情况下检出更多可疑风险。
     * @example `strict`
     */
    "Mode"?: string;
}
