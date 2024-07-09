export interface EnableHighDefinationMonitorRequest {
    /**
     * 日志标签。其结构是一个JSON dictionary，包含标签键和标签值。
     * @example `[{"tagKey":"Key1","tagValue":"Value1"}]`
     */
    "Tags"?: string;
    /**
     * 传统型负载均衡的地域ID。
     * 您可以通过调用[DescribeRegions](~~27584~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 日志服务LogProject的名称。长度为4~63个字符，支持数字、小写字母，可包含短划线（-），开头和结尾必须为数字或字母。
     * @example `my-project`
     */
    "LogProject": string;
    /**
     * 日志服务LogStore的名称。长度为2~64个字符，支持数字、小写字母，可包含短划线（-）和下划线（_），开头和结尾必须为数字或字母。
     * @example `my-log-store`
     */
    "LogStore": string;
}
