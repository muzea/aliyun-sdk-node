export interface GetErRouteMapRequest {
    /**
     * 灵骏HUB ID
     * @example `er-kkopgtne`
     */
    "ErId": string;
    /**
     * 地域ID
     * @example `cn-wulanchabu`
     */
    "RegionId"?: string;
    /**
     * 路由策略ID
     * @example `er-rmap-uwglhzom`
     */
    "ErRouteMapId": string;
}
