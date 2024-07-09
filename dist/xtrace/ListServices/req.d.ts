export interface ListServicesRequest {
    /**
     * 地域ID。
     * @example `cn-beijing`
     */
    "RegionId": string;
    /**
     * 应用类型，取值为空或`XTRACE`，推荐设置为空。
     * - 空：查询XTRACE和ARMS调用链。
     * - `XTRACE`：只查询XTRACE调用链。
     * @example `XTRACE`
     */
    "AppType"?: string;
}
