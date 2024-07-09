export interface ModifyDedicatedHostAutoReleaseTimeRequest {
    /**
     * 专有宿主机所属的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 需要自动释放的专有宿主机ID。
     * @example `dh-bp165p6xk2tlw61e****`
     */
    "DedicatedHostId": string;
    /**
     * 专有宿主机的自动释放时间。按照ISO 8601标准表示，并使用UTC+0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * - 必须晚于当前时间起算的半小时及以后。
     * - 必须早于当前时间起算的三年及以前。
     * - 如果参数值中的秒（ss）不是00，则自动取为00。
     * - 如果不输入`AutoReleaseTime`参数，表示取消自动释放，专有宿主机在预约时间点不再自动释放。
     * @example `2019-06-04T13:35:00Z`
     */
    "AutoReleaseTime"?: string;
}
