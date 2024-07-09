export interface AddDomainRequest {
    /**
     * 版本号。
     * @example `2017-04-11`
     */
    "Version": string;
    /**
     * 业务类型。取值：
     * - **live**：直播流媒体。
     * - **vod**：视音频点播。
     * - **download**：大文件下载。
     * @example `live`
     */
    "BusinessType": string;
    /**
     * 域名信息，仅支持添加单个。
     * @example `example.com`
     */
    "Domain": string;
    /**
     * 直播格式，多个使用竖线（|）分割。当业务类型为live的时候必填。取值：
     * - **hls**
     * - **flv**
     * @example `hls`
     */
    "LiveFormat"?: string;
    /**
     * 切片域名，当业务类型为live、直播格式包含flv且客户集成模式为“与第三方CDN集成”时必填。
     * @example `example.com`
     */
    "SliceDomain"?: string;
    /**
     * A域名所在地域，当业务类型为live，直播格式包含flv时必填。
     * 目前合法值包括cn-beijing、cn-shanghai、ap-southeast-1。其中当区域为“ap-southeast-1”时，后端会返回错误。
     * @example `cn-beijing`
     */
    "Region"?: string;
    /**
     * 示例URL地址，多个用竖线（|）分隔。
     * @example `http://lesson-01.mp4`
     */
    "DemoUrls"?: string;
}
