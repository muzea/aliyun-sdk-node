export interface GetAccessDataRequest {
    /**
     * 版本号。
     * @example `2017-04-11`
     */
    "Version": string;
    /**
     * 待查询的域名，多个用竖线（|）分割，不传查询全部。
     * @example `all`
     */
    "Domain"?: string;
    /**
     * 地域，使用竖线（|）分隔，查询全部地域填all。
     * @example `all`
     */
    "Region": string;
    /**
     * 运营商名称，使用竖线（|）分隔，查询全部运营商填all。
     * @example `all`
     */
    "IspName": string;
    /**
     * 终端，使用竖线（|）分隔，查询全部终端填all。
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
