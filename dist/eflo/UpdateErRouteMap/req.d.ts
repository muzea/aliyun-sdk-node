export interface UpdateErRouteMapRequest {
    /**
     * 路由策略ID
     * @example `er-rmap-uwglhzom`
     */
    "ErRouteMapId": string;
    /**
     * 描述
     * @example `描述`
     */
    "Description"?: string;
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
