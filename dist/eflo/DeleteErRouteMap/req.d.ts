export interface DeleteErRouteMapRequest {
    /**
     * 路由策略实例ID列表
     */
    "ErRouteMapIds": string[];
    /**
     * 地域ID
     * @example `cn-wulanchabu`
     */
    "RegionId": string;
    /**
     * 灵骏HUB ID
     * @example `er-kkopgtne`
     */
    "ErId": string;
}
