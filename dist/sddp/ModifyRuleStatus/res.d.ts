export interface ModifyRuleStatusResponse {
    /**
     * 修改状态失败的规则ID集合。多个ID用半角逗号隔开。
     * @example `1,2,3,4`
     */
    FailedIds: string;
    /**
     * 结果的请求ID。
     * @example `7C3AC882-E5A8-4855-BE77-B6837B695EF1`
     */
    RequestId: string;
}
