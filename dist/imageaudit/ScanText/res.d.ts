export interface ScanTextResponse {
    /**
     * 请求ID。
     * @example `C7CD87E3-57A5-4E2F-8A44-809F3554692C`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     */
    Data: {
        /**
         * 检测结果的各个子元素。
         */
        Elements: {
            /**
             * 任务ID。
             * @example `txt6Vh5Fv0DAFy5hgdVRt3pqf-1s82jj`
             */
            TaskId: string;
            /**
             * 检测结果。如果返回为空，表示系统识别命中了其他Label，扩大Label重新发起请求。
             */
            Results: {
                /**
                 * 建议您执行的操作，取值包括：
                 * - pass：文本正常。
                 * - review：需要人工审核。
                 * - block：文本违规，可以直接删除或者做限制处理。
                 * @example `block`
                 */
                Suggestion: string;
                /**
                 * 检测结果的分类。
                 * @example `ad`
                 */
                Label: string;
                /**
                 * 结果为该分类的概率，取值范围为`[0.00-100.00]`。值越高，表示越有可能属于该分类。
                 * @example `99.91`
                 */
                Rate: number;
                /**
                 * 文本的检测结果。
                 */
                Details: {
                    /**
                     * 命中风险文本的分类。
                     * @example `ad`
                     */
                    Label: string;
                    /**
                     * 命中该风险的信息。
                     */
                    Contexts: {
                        /**
                         * 检测文本命中的风险内容。
                         * @example `联系weixin`
                         */
                        Context: string;
                    }[];
                }[];
            }[];
        }[];
    };
}
