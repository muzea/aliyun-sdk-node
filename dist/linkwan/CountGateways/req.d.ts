export interface CountGatewaysRequest {
    "IotInstanceId"?: string;
    /**
     * 网关在离线状态过滤。
     * 若未传入此参数，则不限制在线状态。可取值为**ONLINE**和**OFFLINE**。
     * @example `ONLINE`
     */
    "OnlineState"?: string;
    /**
     * GwEUI模糊过滤。
     * @example `123456`
     */
    "FuzzyGwEui"?: string;
    /**
     * 城市名模糊过滤。
     * @example `杭州`
     */
    "FuzzyCity"?: string;
    /**
     * 网关名称模糊过滤。
     * @example `name`
     */
    "FuzzyName"?: string;
    /**
     * 网关频段ID过滤。
     * @example `123`
     */
    "FreqBandPlanGroupId"?: number;
    /**
     * 网关启停用状态过滤。
     * 若未传入此参数，则不限制启停状态。
     * @example `false`
     */
    "IsEnabled"?: boolean;
}
