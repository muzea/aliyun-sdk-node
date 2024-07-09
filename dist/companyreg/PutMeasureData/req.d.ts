export interface PutMeasureDataRequest {
    /**
     * 业务类型
     * @example `esp.sp`
     */
    "BizType": string;
    /**
     * 数据类型
     * @example `d`
     */
    "DataType": string;
    /**
     * 开始时间
     * @example `1640400574804`
     */
    "StartTime": string;
    /**
     * 结束时间
     * @example `1634019240000`
     */
    "EndTime": string;
    /**
     * 推送数据
     * @example `[]`
     */
    "Data": string;
}
