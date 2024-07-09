export interface CreateErRouteMapRequest {
    /**
     * 策略编号。
     * 序号越小，优先级越低，当进行路由匹配时会优先匹配优先级高的策略。
     * **取值范围：1001~2000**
     * @example `1001`
     */
    "RouteMapNum": number;
    /**
     * 策略描述
     * @example `描述`
     */
    "Description"?: string;
    /**
     * 源实例ID
     * @example `vpd-xlsjsdvt`
     */
    "TransmissionInstanceId": string;
    /**
     * 源实例类型,可选值：
     * - **VPD**：灵骏网段。
     * - **VCC**：灵骏连接。
     * @example `VPD`
     */
    "TransmissionInstanceType": string;
    /**
     * 目的实例ID
     * @example `vpd-xlhsvdvt`
     */
    "ReceptionInstanceId": string;
    /**
     * 目的实例类型,可选值：
     * - **VPD**：灵骏网段。
     * - **VCC**：灵骏连接。
     * @example `VPD`
     */
    "ReceptionInstanceType": string;
    /**
     * 目的网段
     * @example `0.0.0.0/0`
     */
    "DestinationCidrBlock"?: string;
    /**
     * 策略行为；可选值：
     * - **permit**: 允许
     * - **deny**： 拒绝
     * @example `permit`
     */
    "RouteMapAction": string;
    /**
     * 路由发布实例所属租户
     * @example `1620939556166277`
     */
    "TransmissionInstanceOwner"?: string;
    /**
     * 路由接收实例所属租户
     * @example `1620939556166277`
     */
    "ReceptionInstanceOwner"?: string;
    /**
     * 地域ID
     * @example `cn-wulanchabu`
     */
    "RegionId": string;
    /**
     * 灵骏HUB ID
     * @example `er-aueyxxsy`
     */
    "ErId": string;
}
