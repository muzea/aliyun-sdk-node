export interface ModifyCapacityReservationRequest {
    /**
     * 容量预定服务所属地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 容量预定服务ID。
     * @example `crp-bp67acfmxazb4****`
     */
    "PrivatePoolOptions.Id": string;
    /**
     * 容量预定服务的名称。长度为2~128个英文或中文字符。必须以大小写字母或中文开头，不能以`http://`和`https://`开头。可以包含数字、半角冒号（:）、下划线（_）或者连字符（-）。
     * @example `eapTestName`
     */
    "PrivatePoolOptions.Name"?: string;
    /**
     * 容量预定服务的描述信息。长度为2~256个英文或中文字符，不能以`http://`和`https://`开头。
     * @example `This is description.`
     */
    "Description"?: string;
    /**
     * 容量预定服务的生效方式。目前仅支持设置为立即生效，且参数无需传值。
     * > 该参数不传值即表示设置为立即生效。
     * @example `Now`
     */
    "StartTime"?: string;
    /**
     * 容量预定服务的失效时间，仅`EndTimeType=Limited`时该参数生效。时间格式以ISO8601为标准，并需要使用UTC +0时间，格式为`yyyy-MM-ddTHH:mm:ssZ`。更多信息，请参见[ISO8601](~~25696~~)。
     * @example `2021-10-30T06:32:00Z`
     */
    "EndTime"?: string;
    /**
     * 容量预定服务的失效方式。取值范围：
     * - Limited：指定时间释放。必须同时指定`EndTime`参数。
     * - Unlimited：手动释放。不限制时间。
     * @example `Unlimited`
     */
    "EndTimeType"?: string;
    /**
     * 实例使用的镜像的操作系统类型。取值范围：
     * - Windows：Windows Server类型的操作系统。
     * - Linux：Linux及类Unix类型的操作系统。
     * > 该参数暂未开放使用。
     * @example `Linux`
     */
    "Platform"?: string;
    /**
     * 容量预定服务需要预留的实例总数量。取值范围：已使用的实例数量~1000
     * > 扩充实例总数量时，可能因库存不足导致扩充失败。
     * @example `100`
     */
    "InstanceAmount"?: number;
}
