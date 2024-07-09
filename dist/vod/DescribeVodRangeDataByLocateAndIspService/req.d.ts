export interface DescribeVodRangeDataByLocateAndIspServiceRequest {
    /**
     * 加速域名。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 开始时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * @example `2023-05-29T03:50:00Z`
     */
    "StartTime": string;
    /**
     * 结束时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * @example `2023-05-29T03:55:00Z`
     */
    "EndTime": string;
    /**
     * 地域英文名。不传该参数默认查询所有地域。
     * @example `beijing`
     */
    "LocationNameEn"?: string;
    /**
     * 运营商英文名。不传入该参数，默认查询所有运营商。
     * @example `unicom`
     */
    "IspNameEn"?: string;
}
