export interface DescribeWebAccessLogStatusResponse {
    /**
     * DDoS高防服务对接的日志库。
     * @example `ddoscoo-logstore`
     */
    SlsLogstore: string;
    /**
     * 网站业务是否开启全量日志。取值：
     * - **true**：已开启
     * - **false**：未开启
     * @example `true`
     */
    SlsStatus: boolean;
    /**
     * DDoS高防服务对接的日志服务项目。
     * @example `ddoscoo-project-128965410602****-cn-hangzhou`
     */
    SlsProject: string;
    /**
     * 本次请求的ID。
     * @example `CF33B4C3-196E-4015-AADD-5CAD00057B80`
     */
    RequestId: string;
}
