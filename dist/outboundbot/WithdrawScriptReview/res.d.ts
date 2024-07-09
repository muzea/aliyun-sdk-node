export interface WithdrawScriptReviewResponse {
    /**
     * Http状态码
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 响应码
     * @example `OK`
     */
    Code: string;
    /**
     * 响应信息
     * @example `Success`
     */
    Message: string;
    /**
     * 请求ID
     * @example `254EB995-DEDF-48A4-9101-9CA5B72FFBCC`
     */
    RequestId: string;
    /**
     * 是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 话术信息
     */
    Script: {
        /**
         * 应用版本的状态
         * @example `PUBLISHED`
         */
        Status: string;
        /**
         * 更新时间
         * @example `1578881227000`
         */
        UpdateTime: number;
        /**
         * 行业
         * @example `金融`
         */
        Industry: string;
        /**
         * 话术描述
         * @example `销售话术`
         */
        ScriptDescription: string;
        /**
         * 应用版本是否为草稿态
         * @example `false`
         */
        IsDrafted: boolean;
        /**
         * 调试状态
         * @example `PUBLISHED`
         */
        DebugStatus: string;
        /**
         * 话术ID
         * @example `e4e2a770-b97b-465a-80d8-06dca008c503`
         */
        ScriptId: string;
        /**
         * 调试版本是否为草稿态
         * @example `false`
         */
        IsDebugDrafted: boolean;
        /**
         * 话术名称
         * @example `销售话术`
         */
        ScriptName: string;
        /**
         * 场景
         * @example `电销`
         */
        Scene: string;
    };
}
