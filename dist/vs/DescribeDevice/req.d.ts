export interface DescribeDeviceRequest {
    /**
     * 设备ID。
     * @example `3238848****092996-cn-qingdao`
     */
    "Id": string;
    /**
     * 是否返回流统计信息，默认值：false。
     * @example `false`
     */
    "IncludeStats"?: boolean;
    /**
     * 是否返回目录信息，默认值：false。
     * @example `false`
     */
    "IncludeDirectory"?: boolean;
}
