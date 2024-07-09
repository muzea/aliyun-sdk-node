export interface DescribeMeterLiveInteractionDauRequest {
    /**
     * 查询的开始时间，使用UNIX时间戳表示，单位：秒。
     * @example `1655654400`
     */
    "StartTs"?: number;
    /**
     * 查询的结束时间，使用UNIX时间戳表示，单位：秒。
     * @example `1654358399`
     */
    "EndTs"?: number;
    /**
     * 服务区域，CN：中国（默认值）。
     * @example `cn`
     */
    "ServiceArea"?: string;
    /**
     * 查询数据的时间粒度。单位：秒。取值：300（默认值）。                                 3600。                                 86400。                                 说明 不传或传值不支持时，使用默认值300秒。
     * @example `86400`
     */
    "Interval"?: number;
    /**
     * 业务方App ID。
     * @example `live-app`
     */
    "AppId"?: string;
}
