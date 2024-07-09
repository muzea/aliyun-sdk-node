export interface GetPhysicalConnectionServiceStatusResponse {
    /**
     * 请求ID。
     * @example `54B48E3D-DF70-471B-AA93-08E683A1B45`
     */
    RequestId: string;
    /**
     * 是否已开通出方向流量服务。
     * - **true**：已开通。
     * - **false**：未开通。
     * @example `true`
     */
    Enabled: boolean;
}
