export interface ModifyScriptResponse {
    /**
     * http状态码
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 请求id
     * @example `254EB995-DEDF-48A4-9101-9CA5B72FFBCC`
     */
    RequestId: string;
    /**
     * 是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 接口状态
     * @example `OK`
     */
    Code: string;
    /**
     * 响应信息
     * @example `Success`
     */
    Message: string;
    /**
     * 话术信息
     */
    Script: {
        /**
         * 话术状态
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
         * @example `政务`
         */
        Industry: string;
        /**
         * 话术描述
         * @example `返工回访话术`
         */
        ScriptDescription: string;
        /**
         * 是否是草稿
         * @example `true`
         */
        IsDrafted: boolean;
        /**
         * 话术调试状态
         * @example `DRAFTED`
         */
        DebugStatus: string;
        /**
         * 话术id
         * @example `c153d0d8-ba04-41c0-8632-453944c9dd0b`
         */
        ScriptId: string;
        /**
         * 是否是调试的草稿
         * @example `true`
         */
        IsDebugDrafted: boolean;
        /**
         * 话术名字
         * @example `回访话术`
         */
        ScriptName: string;
        /**
         * 场景
         * @example `回访`
         */
        Scene: string;
    };
}
