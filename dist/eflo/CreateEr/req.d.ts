export interface CreateErRequest {
    /**
     * 灵骏HUB名称
     * @example `er-wulanchabu-main`
     */
    "ErName": string;
    /**
     * 主可用区
     * @example `cn-wulanchabu-b`
     */
    "MasterZoneId": string;
    /**
     * 描述
     * @example `er-乌兰察布实例`
     */
    "Description"?: string;
    /**
     * 地域ID
     * @example `cn-wulanchabu`
     */
    "RegionId": string;
    /**
     * 资源组实例ID
     */
    "ResourceGroupId"?: string;
}
