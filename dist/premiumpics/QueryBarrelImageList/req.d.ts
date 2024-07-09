export interface QueryBarrelImageListRequest {
    /**
     * Barrel
     * @example `caipin`
     */
    "Barrel": string;
    /**
     * 查询范围起始位置
     * @example `110941`
     */
    "StartId"?: number;
    /**
     * 分页数。
     * @example `10`
     */
    "PageSize": number;
}
