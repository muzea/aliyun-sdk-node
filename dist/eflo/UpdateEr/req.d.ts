export interface UpdateErRequest {
    /**
     * 描述
     * @example `描述`
     */
    "Description"?: string;
    /**
     * 名称
     * @example `er-wulanchabu-main`
     */
    "ErName"?: string;
    /**
     * 地域ID
     * @example `cn-wulanchabu`
     */
    "RegionId": string;
    /**
     * 灵骏HUB实例ID
     * @example `er-kkopgtne`
     */
    "ErId": string;
}
