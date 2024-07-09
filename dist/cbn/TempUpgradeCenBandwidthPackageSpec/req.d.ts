export interface TempUpgradeCenBandwidthPackageSpecRequest {
    /**
     * 带宽包实例ID。
     * @example `cenbwp-y08yosedeqlpua****`
     */
    "CenBandwidthPackageId": string;
    /**
     * 临时提升的带宽峰值。单位：Mbps。
     * 取值范围：**2**~**10000**。
     * @example `20`
     */
    "Bandwidth": number;
    /**
     * 临时提升带宽的到期时间。
     * 时间按照ISO8601标准表示，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。
     * @example `2022-07-24T13:00:52Z`
     */
    "EndTime": string;
}
