export interface DescribeDomainTopAttackListRequest {
    /**
     * DDoS高防实例在资源管理产品中所属的资源组ID。默认为空，即属于默认资源组。
     * @example `default`
     */
    "ResourceGroupId"?: string;
    /**
     * 查询开始时间。时间戳格式，单位：秒。
     * > 必须为整点分钟。
     * @example `1582992000`
     */
    "StartTime": number;
    /**
     * 查询结束时间。时间戳格式，单位：秒。
     * > 必须为整点分钟。
     * @example `1583683200`
     */
    "EndTime": number;
}
