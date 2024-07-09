export interface DescribeDcdnFullDomainsBlockIPHistoryRequest {
    /**
     * 查询IP/IP段。
     * @example `10.XX.XX.10/24`
     */
    "IPList": string;
    /**
     * 查询获取数据起始时间点，时间格式为：YYYY-MM-DDThh:mm:ssZ。
     * @example `2023-04-24T17:00:00Z`
     */
    "StartTime": string;
    /**
     * 查询获取数据结束时间点，时间格式为：YYYY-MM-DDThh:mm:ssZ；结束时间需大于起始时间。
     * @example `2023-04-24T19:00:00Z`
     */
    "EndTime": string;
}
