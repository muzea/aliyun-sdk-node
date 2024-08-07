export interface AssociateFlowLogRequest {
    /**
     * 流日志的地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 流日志实例ID。
     * @example `fl-l934tsa5504yuc****`
     */
    "FlowLogId": string;
    /**
     * 智能接入网关实例ID。
     * @example `sag-39u6j9a49i03wk****`
     */
    "SmartAGId": string;
}
