export interface DeleteCustomLinesRequest {
    /**
     * 语言。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 自定义线路唯一ID列表，用 “,” 号隔开唯一ID。
     * @example `1234,1235`
     */
    "LineIds": string;
}
