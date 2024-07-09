export interface GetSimilarIncidentStatisticsResponse {
    /**
     * id of the request
     * @example `7C56D225-7C34-40BB-9624-C8BA449260E6`
     */
    requestId: string;
    /**
     * data
     */
    data: {
        /**
         * topFiveIncidents
         */
        topFiveIncidents: {
            /**
             * 事件id
             * @example `32`
             */
            incidentId: number;
            /**
             * 事件编号
             * @example `I34324`
             */
            incidentNumber: string;
            /**
             * 事件标题
             * @example `xxx事件`
             */
            incidentTitle: string;
            /**
             * 流转规则id
             * @example `4343`
             */
            relatedRouteRuleId: number;
            /**
             * 流转规则名称
             * @example `xxx`
             */
            relatedRouteRuleName: string;
            /**
             * 触发原因
             * @example `2`
             */
            finishReason: number;
            /**
             * 触发原因描述
             * @example `xxxx原因`
             */
            finishReasonDescription: string;
            /**
             * 解决方案
             * @example `5`
             */
            incidentFinishSolution: number;
            /**
             * 解决方案描述
             * @example `xxx方案`
             */
            finishSolutionDescription: string;
            /**
             * 触发时间
             * @example `2021-09-09 09:09:09`
             */
            createTime: string;
            /**
             * 分派人id
             * @example `43`
             */
            assignUserId: string;
            /**
             * 分派人
             * @example `张老三`
             */
            assignUserName: string;
            /**
             * 持续时间
             * @example `6787678767`
             */
            durationTime: number;
            /**
             * 相似度
             * @example `1992.21`
             */
            similarScore: string;
        }[];
        /**
         * 6月内相似事件数量
         * @example `43`
         */
        countInSixMonths: number;
        /**
         * 7天内相似事件数量
         * @example `8`
         */
        countInSevenDays: number;
        /**
         * 根据日期分类
         * @example `{}`
         */
        dailySimilarIncidents: {
            /**
             * 日期
             * @example `2021-03-07`
             */
            date: string;
            /**
             * 数量
             * @example `0`
             */
            commitment: number;
            /**
             * 月份
             * @example `2`
             */
            month: number;
            /**
             * 周
             * @example `1`
             */
            week: string;
            /**
             * 星期几
             * @example `1`
             */
            day: number;
            /**
             * 相似事件列表
             */
            similarIncidents: {
                /**
                 * 事件id
                 * @example `5435`
                 */
                incidentId: number;
                /**
                 * 事件编号
                 * @example `I234432`
                 */
                incidentNumber: string;
                /**
                 * 事件名称
                 * @example `线性代数发多少`
                 */
                incidentTitle: string;
                /**
                 * 流转规则id
                 * @example `334`
                 */
                relatedRouteRuleId: number;
                /**
                 * 流转规则名称
                 * @example `xxx规则`
                 */
                relatedRouteRuleName: string;
                /**
                 * 触发原因
                 * @example `1`
                 */
                finishReason: number;
                /**
                 * 触发原因描述
                 * @example `xx原因`
                 */
                finishReasonDescription: string;
                /**
                 * 解决方案
                 * @example `5`
                 */
                incidentFinishSolution: number;
                /**
                 * 解决方案描述
                 * @example `xxx方案`
                 */
                finishSolutionDescription: string;
                /**
                 * 触发时间
                 * @example `2021-09-09 09:09:09`
                 */
                createTime: string;
                /**
                 * 分派人
                 * @example `张老三`
                 */
                assignUserName: string;
                /**
                 * 分派人id
                 * @example `433`
                 */
                assignUserId: number;
                /**
                 * 持续时间
                 * @example `6789765678`
                 */
                durationTime: number;
                /**
                 * 相似度
                 * @example `1003.567`
                 */
                similarScore: string;
            }[];
        }[];
        /**
         * id of the request
         * @example `uyihg6789`
         */
        requestId: string;
    };
}
