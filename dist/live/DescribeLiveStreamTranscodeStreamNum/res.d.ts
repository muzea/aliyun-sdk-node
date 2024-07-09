export interface DescribeLiveStreamTranscodeStreamNumResponse {
    /**
     * 未转码流数。
     * @example `27`
     */
    UntranscodeNumber: number;
    /**
     * 触发转码流数。
     * @example `10`
     */
    LazyTranscodedNumber: number;
    /**
     * 转码流数。
     * @example `30`
     */
    TranscodedNumber: number;
    /**
     * 请求ID。
     * @example `150191A4-DD88-5941-B48C-9DF59E0A8B1F`
     */
    RequestId: string;
    /**
     * 转码流数量总和。
     * @example `57`
     */
    Total: number;
}
