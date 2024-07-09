export interface DescribeMeterImpWatchLiveTimeByLiveIdRequest {
    /**
     * 用户的应用ID，在控制台创建应用时生成。包含小写字母、数字，长度为6个字符。
     * @example `7m***q`
     */
    "AppId": string;
    /**
     * 直播资源的唯一标识ID，传空值时，系统自动生成36位随机UUID字符串。
     * @example `b7f2****ebb3`
     */
    "LiveId": string;
}
