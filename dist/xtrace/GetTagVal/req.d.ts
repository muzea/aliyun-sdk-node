export interface GetTagValRequest {
    /**
     * 地域ID。
     * @example `cn-beijing`
     */
    "RegionId"?: string;
    /**
     * 服务名称，又称为应用名称。
     * @example `appTest`
     */
    "ServiceName"?: string;
    /**
     * Span名称，又称为Operation名称。
     * @example `createOrder`
     */
    "SpanName"?: string;
    /**
     * 标签键。
     * 获取TagKey，请参见[GetTagKey](~~2399667~~)。
     * @example `span.kind`
     */
    "TagKey": string;
    /**
     * 开始时间，精确到毫秒（ms）。
     * ><notice>该字段类型为 Long，在序列化/反序列化的过程中可能导致精度丢失，请注意数值不得大于 9007199254740991。></notice>
     * @example `1575561600000`
     */
    "StartTime"?: number;
    /**
     * 结束时间，精确到毫秒（ms）。
     * ><notice>该字段类型为 Long，在序列化/反序列化的过程中可能导致精度丢失，请注意数值不得大于 9007199254740991。></notice>
     * @example `1575622455686`
     */
    "EndTime"?: number;
}
