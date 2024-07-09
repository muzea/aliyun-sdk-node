export interface ModifyInstanceAutoReleaseTimeRequest {
    /**
     * 实例所属的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 需要自动释放的ECS实例ID。
     * @example `i-bp1env7nl3mijm2t****`
     */
    "InstanceId": string;
    /**
     * 自动释放时间。按照[ISO 8601](~~25696~~)标准表示，并使用UTC+0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * - 如果秒（`ss`）取值不是`00`，则自动取为当前分钟（`mm`）开始时。
     * - 最短释放时间为当前时间半小时之后。
     * - 最长释放时间不能超过当前时间三年。
     * 如果不传入参数`AutoReleaseTime`，表示自动释放功能已取消，ECS实例不再自动释放。
     * @example `2018-01-01T01:02:03Z`
     */
    "AutoReleaseTime"?: string;
}
