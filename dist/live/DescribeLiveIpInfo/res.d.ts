export interface DescribeLiveIpInfoResponse {
    /**
     * 所属运营商英文名称。
     * @example `telecom`
     */
    IspEname: string;
    /**
     * 请求ID。
     * @example `1B1D0EE7-9559-489D-BC4E-279495EB8FB8`
     */
    RequestId: string;
    /**
     * 所属地域英文名称。
     * @example `China-Guizhou-guiyang`
     */
    RegionEname: string;
    /**
     * 所属运营商中文名称。
     * @example `电信`
     */
    ISP: string;
    /**
     * 所属地域中文名称。
     * @example `中国-贵州省-贵阳市`
     */
    Region: string;
}
