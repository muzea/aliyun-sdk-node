export interface DescribeAutoCcListCountResponse {
    /**
     * 本次请求的ID。
     * @example `5AC3785F-C789-4622-87A4-F58BE7F6B184`
     */
    RequestId: string;
    /**
     * 白名单IP的数量。
     * @example `2`
     */
    WhiteCount: number;
    /**
     * 黑名单IP的数量。
     * @example `0`
     */
    BlackCount: number;
}
