export interface QueryRelationListRequest {
    /**
     * 阿里云账号UID。
     * @example `1990699401005016`
     */
    "UserId": number;
    /**
     * 页码，默认1。
     * @example `1`
     */
    "PageNum"?: number;
    /**
     * 页大小，默认20。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 关系状态列表，状态是RelationshipStatusEnum的枚举值。默认不传值查询当前生效状态。
     * @example `RELATED`
     */
    "StatusList"?: string[];
}
