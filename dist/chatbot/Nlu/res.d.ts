export interface NluResponse {
    /**
     * 消息的列表
     */
    Messages: {
        /**
         * 对话中控的nlu信息
         */
        DialogHubNluInfo: {
            /**
             * 全局名词列表
             */
            GlobalDictList: {
                /**
                 * 名词
                 * @example `天气`
                 */
                StandardWord: string;
                /**
                 * 同义词
                 * @example `天气`
                 */
                Word: string;
            }[];
            /**
             * 全局敏感词列表
             */
            GlobalSensitiveWordList: {
                /**
                 * 名词
                 * @example `天气`
                 */
                StandardWord: string;
                /**
                 * 同义词
                 * @example `天气`
                 */
                Word: string;
            }[];
        };
        /**
         * 对话工厂的nlu信息
         */
        DsNluInfo: {
            /**
             * 实体列表
             */
            EntityList: {
                /**
                 * 实体名称
                 * @example `@城市`
                 */
                Name: string;
                /**
                 * 实体原词（实体成员）
                 * @example `北京`
                 */
                Origin: string;
                /**
                 * 实体类型，当前只有text类型
                 * @example `text`
                 */
                Type: string;
                /**
                 * 实体同义词
                 * @example `首都`
                 */
                Value: string;
            }[];
            /**
             * 意图列表
             */
            IntentList: {
                /**
                 * 意图ID
                 * @example `724387`
                 */
                IntentId: number;
                /**
                 * 匹配详情（匹配过程）
                 * @example `classifierType=Fewshot,from=Fewshot,content=[我要查北京的天气, 帮我查北京的天气, 北京天气怎么样, 北京今天下雨吗, 北京今天多少度]`
                 */
                MatchDetail: string;
                /**
                 * 匹配类型，其枚举值含义如下：  Similarity：query与意图通过意图话术相似度匹配 Lgf：query与意图通过LGF匹配 Classify：query与意图通过模型训练匹配 FewShotLearning：query与意图通过系统内置fewshot模型匹配 BuildIn： query与系统内置意图匹配
                 * @example `FewShotLearning`
                 */
                MatchType: string;
                /**
                 * 意图名称
                 * @example `查天气意图`
                 */
                Name: string;
                /**
                 * 分数
                 * @example `0.995`
                 */
                Score: number;
                /**
                 * 命中意图的槽位列表
                 */
                SlotList: {
                    /**
                     * 实体名称
                     * @example `@城市`
                     */
                    Name: string;
                    /**
                     * 实体原词（实体成员）
                     * @example `北京`
                     */
                    Origin: string;
                    /**
                     * 实体类型，当前只有text类型
                     * @example `text`
                     */
                    Type: string;
                    /**
                     * 实体同义词
                     * @example `首都`
                     */
                    Value: string;
                }[];
            }[];
        };
    }[];
    /**
     * 请求ID
     * @example `A6357C1B-1D79-1382-B259-BD9E80751B42`
     */
    RequestId: string;
    /**
     * 本条语言理解应答消息的ID
     * @example `2828708A-2C7A-1BAE-B810-87DB9DA9C661`
     */
    MessageId: string;
}
