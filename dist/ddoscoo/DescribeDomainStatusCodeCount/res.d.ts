export interface DescribeDomainStatusCodeCountResponse {
    /**
     * 查询时间段内502状态码的数量。
     * @example `0`
     */
    Status502: number;
    /**
     * 查询时间段内405状态码的数量。
     * @example `0`
     */
    Status405: number;
    /**
     * 查询时间段内3XX状态码的数量。
     * @example `133209`
     */
    Status3XX: number;
    /**
     * 查询时间段内503状态码的数量。
     * @example `0`
     */
    Status503: number;
    /**
     * 查询时间段内4XX状态码的数量。
     * @example `5653`
     */
    Status4XX: number;
    /**
     * 查询时间段内2XX类状态码的数量。
     * @example `951472`
     */
    Status2XX: number;
    /**
     * 查询时间段内5XX状态码的数量。
     * @example `14`
     */
    Status5XX: number;
    /**
     * 查询时间段内504状态码的数量。
     * @example `0`
     */
    Status504: number;
    /**
     * 本次请求的ID。
     * @example `C33EB3D5-AF96-43CA-9C7E-37A81BC06A1E`
     */
    RequestId: string;
    /**
     * 查询时间段内200状态码的数量。
     * @example `951159`
     */
    Status200: number;
    /**
     * 查询时间段内403状态码的数量。
     * @example `0`
     */
    Status403: number;
    /**
     * 查询时间段内404状态码的数量。
     * @example `897`
     */
    Status404: number;
    /**
     * 查询时间段内501状态码的数量。
     * @example `0`
     */
    Status501: number;
}
