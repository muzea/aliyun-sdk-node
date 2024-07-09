export interface GetTraceRequest {
    /**
     * 调用链ID，链路请求的唯一标识。
     * 可在控制台的**调用链分析**页面获取，也可通过[SearchTraces](~~2399674~~~)获取。
     * @example `1c6881aab84191a4******`
     */
    "TraceID": string;
    /**
     * 应用类型，取值为空或`XTRACE`，推荐设置为空。
     * - 空：查询XTRACE和ARMS调用链。
     * - `XTRACE`：只查询XTRACE调用链。
     * @example `XTRACE`
     */
    "AppType"?: string;
    /**
     * 地域ID。
     * @example `cn-beijing`
     */
    "RegionId": string;
}
