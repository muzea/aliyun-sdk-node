export interface RejectUserSolutionRequest {
    /**
     * 方案ID
     * @example `S20211227151912000001`
     */
    "SolutionBizId": string;
    /**
     * 驳回原因
     * @example `不符合`
     */
    "Note": string;
    /**
     * 业务类型
     * @example `esp.companyreg`
     */
    "BizType": string;
}
