export interface PutDcdnKvWithHighCapacityResponse {
    /**
     * 键值对中的值的长度。
     * @example `4`
     */
    Length: number;
    /**
     * 键的内容， 超过256个字符长度，将取前100及后100字符并省略中间。
     * @example `test`
     */
    Value: string;
    /**
     * 请求ID。
     * @example `EEEBE525-F576-1196-8DAF-2D70CA3F4D2F`
     */
    RequestId: string;
}
