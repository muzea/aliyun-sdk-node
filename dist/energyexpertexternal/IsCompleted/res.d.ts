export interface IsCompletedResponse {
    /**
     * 请求id，每次请求都是唯一值，便于后续排查问题。
     * @example `83A5A7DD-8974-5769-952E-590A97BEA34E`
     */
    requestId: string;
    /**
     * 返回数据。
     */
    data: {
        /**
         * 状态更新时间，毫秒时间戳，例如：1711438780000。
         * @example `1711438780000`
         */
        modifiedTime: number;
        /**
         * 本次生成任务的唯一键。
         * @example `550c2b7b-f2e0-4176-ab0a-53ea4b355721`
         */
        taskKey: string;
        /**
         * 暂未使用，为空。
         * @example `null`
         */
        taskShortResult: string;
        /**
         * 生成报告任务状态：可能值为running、success、error，含义分别为生成中、生成成功、生成失败。如果遇到结果生成失败，请检查模型并修正模型，而后再次生成结果页。
         * @example `running`
         */
        taskStatus: string;
    };
}
