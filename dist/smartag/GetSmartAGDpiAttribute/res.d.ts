export interface GetSmartAGDpiAttributeResponse {
    /**
     * 智能接入网关实例DPI功能关联的Logstore实例名称。
     * @example `test1`
     */
    LogstoreName: string;
    /**
     * 请求ID。
     * @example `B2997DC4-F1A2-418B-81FC-C8892CD31CFF`
     */
    RequestId: string;
    /**
     * 智能接入网关实例DPI功能关联的Project实例名称。
     * @example `test2`
     */
    ProjectName: string;
    /**
     * 智能接入网关实例DPI功能关联的日志服务的地域。
     * @example `cn-shanghai`
     */
    SlsRegion: string;
    /**
     * 智能接入网关实例DPI监控功能开启状态。
     * - **Active**：已开启。
     * - **Inactive**：未开启。
     * @example `Inactive`
     */
    DpiMonitorStatus: string;
    /**
     * 智能接入网关实例DPI功能开启状态。
     * - **On**：已开启。
     * - **Off**：未开启。
     * @example `On`
     */
    DpiStatus: string;
}
