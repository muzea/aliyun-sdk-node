export interface GetSummaryDataRequest {
    /**
     * 查数据开始时间，格式：2023-01-01 00:00:00
     * @example `2023-01-01 00:00:00
    
    `
     */
    "StartTime"?: string;
    /**
     * 查数据结束时间，格式：2023-02-01 23:59:59
     * @example `2023-02-01 23:59:59
    
    `
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
}
