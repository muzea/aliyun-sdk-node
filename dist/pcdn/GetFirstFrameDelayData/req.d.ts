export interface GetFirstFrameDelayDataRequest {
    /**
     * 版本号。
     * @example `2017-04-11`
     */
    "Version": string;
    /**
     * 待查询的域名列表，以竖线分割，不传查询全部。
     * @example `all`
     */
    "Domain"?: string;
    /**
     * 地区，竖线分隔，全部填all。
     * @example `all`
     */
    "Region": string;
    /**
     * 运营商，竖线分隔，全部填all。
     * @example `all`
     */
    "IspName": string;
    /**
     * 终端，竖线分隔，全部填all。
     * @example `all`
     */
    "PlatformType": string;
    /**
     * 业务类型，竖线分隔，全部填all。
     * @example `all`
     */
    "BusinessType": string;
    /**
     * 开始时间。
     * @example `2017-05-01`
     */
    "StartDate": string;
    /**
     * 结束时间。
     * @example `2017-05-10`
     */
    "EndDate": string;
}
