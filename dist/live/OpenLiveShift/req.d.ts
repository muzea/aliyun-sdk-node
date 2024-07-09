export interface OpenLiveShiftRequest {
    /**
     * 播流域名。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 直播流所属应用名称。支持通配符*，代表该域名下所有的AppName。
     * @example `liveApp****`
     */
    "AppName"?: string;
    /**
     * 直播流流名称。支持通配符*，代表该AppName下所有的StreamName。
     * @example `liveStream****`
     */
    "StreamName"?: string;
    /**
     * HLS的ts切片的长度。单位：秒。
     * @example `3`
     */
    "Duration"?: number;
    /**
     * 表示数据保留时长。默认保留7天，单位：天。
     * @example `10`
     */
    "Vision"?: number;
    /**
     * 是否忽略对应转码流生成时移。取值：
     * - **true**：转码流不生成时移。
     * - **false**：转码流生成时移。
     * 默认选择为true。
     * @example `true`
     */
    "IgnoreTranscode"?: boolean;
}
