export interface GetBandwidthDataRequest {
    /**
     * 版本号。
     * @example `2017-04-11`
     */
    "Version": string;
    /**
     * 待查询的域名列表。支持批量域名查询，多个域名用竖线（|）分隔。
     * 不传该参数将查询全部。
     * @example `all`
     */
    "Domain"?: string;
    /**
     * 地域代码，多个用竖线（|）分隔，全部填all。
     * 查询请参见[通用字段参考](~~151572~~)。
     * @example `all`
     */
    "Region": string;
    /**
     * 运营商代码，多个用竖线（|）分隔，全部填all。
     * 查询请参见[通用字段参考](~~151572~~)。
     * @example `all`
     */
    "IspName": string;
    /**
     * 终端代码，多个用竖线（|）分隔，全部填all。
     * 查询请参见[通用字段参考](~~151572~~)。
     * @example `all`
     */
    "PlatformType": string;
    /**
     * 业务类型，多个用竖线（|）分隔。取值：
     * - **live**：直播流媒体。
     * - **download**：大文件下载。
     * - **vod**：视视频点播。
     * - **all**：全部业务类型。
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
