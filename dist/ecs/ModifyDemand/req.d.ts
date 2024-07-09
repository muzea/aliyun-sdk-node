export interface ModifyDemandRequest {
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](~~25693~~)。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    "ClientToken"?: string;
    /**
     * 报备实例所属的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 报备实例所属的可用区ID。更多详情，请参见[DescribeZones](~~25610~~)获取可用区列表。
     * 默认值：空，表示随机选择。
     * @example `cn-hangzhou-g`
     */
    "ZoneId"?: string;
    /**
     * 需要修改的报备ID。
     * @example `ed-bp11n21kq00sl71p****`
     */
    "DemandId": string;
    /**
     * 报备名称。长度为2~128个字符，必须以大小字母或中文开头，不能以http://和https:// 开头。可以包含中文、英文、数字、半角冒号（:）、下划线（_）、点号（.）或者连字符（-）。
     * 默认值：实例规格名称。
     * @example `testDemandName`
     */
    "DemandName"?: string;
    /**
     * 报备的描述。长度为2~256个英文或中文字符，不能以 http:// 和 https:// 开头。
     * @example `testDemandDescription`
     */
    "DemandDescription"?: string;
    /**
     * 报备实例的资源规格。参见[实例规格族](~~25378~~)或调用[DescribeInstanceTypes](~~25620~~)查看报备实例规格的性能参数，或者参见[选型配置](~~58291~~)了解如何选择实例规格。
     * @example `ecs.c6.large`
     */
    "InstanceType"?: string;
    /**
     * 报备需求规格数量。取值范围：1～100000
     * @example `1`
     */
    "Amount"?: number;
    /**
     * 报备实例的付费方式。取值范围：
     * - PrePaid：包年包月
     * - PostPaid（默认）：按量付费
     * @example `PrePaid`
     */
    "InstanceChargeType"?: string;
    /**
     * 购买资源的时长，为必选值，单位为：月。当参数`InstanceChargeType`取值为PrePaid时生效。取值范围：
     * - PeriodUnit为Week时，Period取值：{"1", "2", "3", "4"}。
     * - PeriodUnit为Month时，Period取值：{"1", "2", "3", "4", "5", "6", "7", "8", "9", "12", "24", "36", "48", "60"}。
     * @example `1`
     */
    "Period"?: number;
    /**
     * 购买资源的时长。取值范围：
     * - Day
     * - Week
     * - Month（默认）
     * @example `Month`
     */
    "PeriodUnit"?: string;
    /**
     * 最早开始购买时间。按照[ISO8601](~~25696~~)标准表示，使用UTC +0时间。格式为：yyyy-MM-dd HH:mm:ss。
     * 如果秒（ss）取值不是00，则自动取为当前分钟（mm）开始时。
     * 最晚结束购买时间晚于最早购买时间。
     * 早晚时间跨度一般不允许超过10天。
     * @example `2019-12-01 12:05:00 `
     */
    "StartTime"?: string;
    /**
     * 最晚结束购买时间。按照[ISO8601](~~25696~~)标准表示，使用UTC +0时间。格式为：yyyy-MM-dd HH:mm:ss。
     * 如果秒（ss）取值不是00，则自动取为当前分钟（mm）开始时。
     * 最晚结束购买时间晚于最早购买时间。
     * 早晚时间长度一般不允许超过10天。
     * @example `2019-12-10 12:05:00 `
     */
    "EndTime"?: string;
}
