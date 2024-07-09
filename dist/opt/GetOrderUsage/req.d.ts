export interface GetOrderUsageRequest {
    /**
     * 指定购买的优化求解器License类别信息，包含一种类别：
     * - `MP`：数学规划
     * @example `MP`
     */
    "RelService": string;
    /**
     * 指定购买的求解器版本信息，目前仅支持一种：
     * - `1`：本地运行版
     * @example `1`
     */
    "ResourceType": number;
    /**
     * 求解器LicenseKey
     * @example `eya5169y2bg96zef03s7`
     */
    "LicenseKey": string;
    /**
     * * `1`：前后一天
     * * `2`：前后一周
     * * `3`：前后一月
     * @example `1`
     */
    "TimeRange"?: number;
}
