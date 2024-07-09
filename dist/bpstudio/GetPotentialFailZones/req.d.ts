export interface GetPotentialFailZonesRequest {
    /**
     * 是否为容灾集ID
     * @example `true`
     */
    "IsPlanId"?: boolean;
    /**
     * IsPlanId选择false传入ApplicationId（应用ID），IsPlanId选择true传入PlanId（容灾集ID）
     * @example `FS3ATPTOSC4SE1GG`
     */
    "ObjectId"?: string;
}
