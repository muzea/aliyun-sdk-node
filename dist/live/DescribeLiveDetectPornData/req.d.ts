export interface DescribeLiveDetectPornDataRequest {
    /**
     * 主播流域名。多个域名使用英文逗号（,）分隔。
     * @example `example.com`
     */
    "DomainName"?: string;
    /**
     * 起始时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * > - 最多可获取最近90天的数据。
     * - 最小数据粒度为5分钟，取值为空则默认获取最近24小时数据。
     * @example `2017-12-10T08:00:00Z`
     */
    "StartTime"?: string;
    /**
     * 结束时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * @example `2017-12-10T09:00:00Z`
     */
    "EndTime"?: string;
    /**
     * 播流所属应用名称。
     * @example `liveApp****`
     */
    "App"?: string;
    /**
     * 播流名称。
     * @example `liveStream****`
     */
    "Stream"?: string;
    /**
     * 用户每天拥有免费的图片扫描额度。取值：
     * - **free**
     * - **charge**
     * @example `free`
     */
    "Fee"?: string;
    /**
     * 检测场景。取值：
     * - **porn**（默认值）：鉴黄。
     * - **terrorism**：暴恐涉政。
     * - **ad**：图文违规。
     * - **live**：不良直播场景。
     * - **logo**：logo检测。
     * @example `porn`
     */
    "Scene"?: string;
    /**
     * 域名所属地域。
     * @example `cn-shanghai`
     */
    "Region"?: string;
    /**
     * 分组字段列表。多个字段用英文逗号（,）分隔。
     * > 当**SplitBy**为空时，仅返回**TimeStamp**和**Count**。
     * @example `liveApp****,liveStream****`
     */
    "SplitBy"?: string;
}
