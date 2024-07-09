export interface GetTrafficDataRequest {
    /**
     * 版本号。
     * @example `2017-04-11`
     */
    "Version": string;
    /**
     * 域名，多个用竖线（|）分割，不传该参数查询全部。
     * @example `all`
     */
    "Domain"?: string;
    /**
     * 地区，多个用竖线（|）分隔，全部填all。
     * @example `all`
     */
    "Region": string;
    /**
     * 运营商，多个用竖线（|）分隔，全部填all。
     * @example `all`
     */
    "IspName": string;
    /**
     * 终端，多个用竖线（|）分隔，全部填all。
     * @example `all`
     */
    "PlatformType": string;
    /**
     * 业务类型，多个用竖线（|）分隔，全部填all。
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
