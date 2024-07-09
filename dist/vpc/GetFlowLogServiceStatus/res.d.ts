export interface GetFlowLogServiceStatusResponse {
    /**
     * 请求ID。
     * @example `54B48E3D-DF70-471B-AA93-06F83A1B457`
     */
    RequestId: string;
    /**
     * 流日志功能是否开通。取值：
     * - **true**：已开通。
     * - **false**：未开通。您可以调用[OpenFlowLogService](~~449637~~)接口开通流日志功能。
     * @example `true`
     */
    Enabled: boolean;
}
