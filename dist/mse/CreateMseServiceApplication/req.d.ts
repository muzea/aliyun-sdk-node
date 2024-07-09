export interface CreateMseServiceApplicationRequest {
    /**
     * 应用名。
     * @example `bsd-xxyp-open-goods-server`
     */
    "AppName": string;
    /**
     * 集群所在地域，包括但不限于如下地域：
     * - cn-hangzhou：杭州
     * - cn-beijing：北京
     * - cn-shanghai：上海
     * - cn-zhangjiakou：张家口
     * - cn-shenzhen：深圳
     * @example `cn-shenzhen`
     */
    "Region": string;
    /**
     * 来源。
     * @example `edasmsc`
     */
    "Source"?: string;
    /**
     * 应用的编程语言。
     * @example `JAVA`
     */
    "Language"?: string;
    /**
     * 其他信息。
     * @example `{}`
     */
    "ExtraInfo"?: string;
    /**
     * 是否开启Sentinel。
     * @example `true`
     */
    "SentinelEnable"?: string;
    /**
     * 是否开始Switch
     * @example `true`
     */
    "SwitchEnable"?: string;
    /**
     * 待开通的MSE集群版本。
     * - mse_pro：表示专业版。
     * - mse_dev：表示开发版。
     * @example `mse_pro`
     */
    "MseVersion"?: string;
    /**
     * 返回信息的语言类型。
     * - zh：中文
     * - en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
