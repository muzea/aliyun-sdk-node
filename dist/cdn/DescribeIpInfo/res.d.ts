export interface DescribeIpInfoResponse {
    /**
     * 是否属于阿里云CDN节点。
     * - **True**：属于。
     * - **False**：不属于。
     * @example `True`
     */
    CdnIp: string;
    /**
     * 请求ID。
     * @example `123847FA-9A00-4426-83B8-B4B45D475930`
     */
    RequestId: string;
    /**
     * 所属地域英文名称。
     * @example `China-Guizhou-guiyang`
     */
    RegionEname: string;
    /**
     * 所属地域中文名称。
     * @example `中国-贵州省-贵阳市`
     */
    Region: string;
    /**
     * 所属运营商英文名称。
     * @example `telecom`
     */
    IspEname: string;
    /**
     * 所属运营商中文名称。
     * @example `电信`
     */
    ISP: string;
}
