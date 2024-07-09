export interface GetTrackListByMailFromAndTagNameRequest {
    /**
     * （本字段已废弃）
     * @example `（本字段已废弃）
    `
     */
    "Total"?: string;
    /**
     * 起始时间，时间不能早于30日，格式yyyy-MM-dd。
     * @example `2019-09-29`
     */
    "StartTime": string;
    /**
     * 结束时间，和起始时间跨度不能超出15天，格式yyyy-MM-dd。
     * @example `2019-09-29`
     */
    "EndTime": string;
    /**
     * 第一次查询为0，后续固定为1。1为按照时间正序分页查询。（本字段已废弃）
     * @example `（本字段已废弃）
    `
     */
    "Offset"?: string;
    /**
     * 每页大小
     * @example `10`
     */
    "PageSize"?: string;
    /**
     * 分页用，第一次查询不设置，后续查询设置为上一次Response中sOffsetCreateTime值（本字段已废弃）
     * @example `（本字段已废弃）
    `
     */
    "OffsetCreateTime"?: string;
    /**
     * （本字段已废弃）
     * @example `（本字段已废弃）
    `
     */
    "OffsetCreateTimeDesc"?: string;
    /**
     * 当前页码
     * @example `1`
     */
    "PageNumber"?: string;
    /**
     * 发信地址。
     * > 不填，代表所有地址；若有TagName，此参数不为空。
     * @example `e-service@amegroups.cn`
     */
    "AccountName"?: string;
    /**
     * 邮件标签。不填，代表所有标签。
     * @example `Subscription`
     */
    "TagName"?: string;
}
