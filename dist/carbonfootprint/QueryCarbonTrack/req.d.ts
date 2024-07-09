export interface QueryCarbonTrackRequest {
    /**
     * 查数据开始时间，格式：2023-01-01 00:00:00
     * @example `2023-01-01 00:00:00
    
    `
     */
    "StartTime"?: string;
    /**
     * 查数据结束时间，格式：2023-02-01 23:59:59
     * @example `2023-02-01 23:59:59`
     */
    "EndTime"?: string;
    /**
     * 统计维度，productCode：按云产品统计；region：按区域维度统计；subUid按RAM子用户统计，不传按主账号维度统计
     * @example `productCode`
     */
    "Group"?: string;
    /**
     * 需要查询数据的主账号id的list，开通多账号管理后传入
     */
    "Uids"?: string[];
    /**
     * 是否统计多账号的碳排放明细，开通多账号管理可后传入，不传默认否，0：否，1：是
     * @example `0`
     */
    "FilterRDAccount"?: number;
    /**
     * 按照返回值的数据值倒序排序后，只返回前TopNum条数据，不传默认返回全部数据
     * @example `10`
     */
    "TopNum"?: number;
    /**
     * 返回值是否使用code作为标识，不传默认使用code，0：不使用，1：使用。
     * 例如返回值为按照云产品维度汇总碳排放时，云服务器的标识在传0时为“ecs”，传1时为“弹性计算ECS”。
     * @example `0`
     */
    "UseCode"?: number;
}
