export interface DescribeDcdnIpInfoResponse {
    /**
     * 请求ID。
     * @example `1B1D0EE7-9559-489D-BC4E-279495EB8FB8`
     */
    RequestId: string;
    /**
     * 所属地区英文名称。
     * @example `China-Guizhou-guiyang`
     */
    RegionEname: string;
    /**
     * 所属地区。
     * @example `中国-贵州省-贵阳市`
     */
    Region: string;
    /**
     * 所属运营商英文名称。
     * @example `telecom`
     */
    IspEname: string;
    /**
     * 是否属于阿里云DCDN节点。
     * - True：属于阿里云DCDN节点。
     * - False：不属于阿里云DCDN节点。
     * @example `True`
     */
    DcdnIp: string;
    /**
     * 所属运营商。
     * @example `电信`
     */
    ISP: string;
}
