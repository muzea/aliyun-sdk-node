export interface DescribeDcdnUserSecDropResponse {
    /**
     * 是否找到信息。
     * - Found：是。
     * - Not Found：否。
     * @example `Found`
     */
    Msg: string;
    /**
     * 请求ID。
     * @example `4A1295C0-7A5C-4F27-8D70-C3A648E7037F`
     */
    RequestId: string;
    /**
     * 拦截请求数。
     * @example `233023208`
     */
    Drops: number;
    /**
     * 根据请求参数拼接的字符串，用于定位没有数据的原因。
     * @example `1day10811******6429wafDCDN`
     */
    UuidStr: string;
}
