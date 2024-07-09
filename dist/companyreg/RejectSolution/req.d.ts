export interface RejectSolutionRequest {
    /**
     * 方案ID
     * @example `S20200512114050000001`
     */
    "SolutionBizId": string;
    /**
     * 驳回原因
     * @example `方案错误`
     */
    "Note": string;
    "BizType"?: string;
}
