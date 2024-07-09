export interface GetNextResultToVerifyResponse {
    /**
     * 结果代码，**200**表示成功，若为别的值则表示失败，调用方可根据此字段判断失败原因。
     * @example `200`
     */
    Code: string;
    /**
     * 出错时表示出错详情，成功时为successful。
     * @example `successful`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `106C6CA0-282D-4AF7-85F0-D2D24F4CE647`
     */
    RequestId: string;
    /**
     * 请求是否成功，调用方可根据此字段来判断请求是否成功：true表示成功；false/null表示失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 文件详情信息。
     */
    Data: {
        /**
         * 当前文件的索引，人工校验取下一条数据时传入此值；从1开始，即第一条的值为1。
         * @example `2`
         */
        Index: number;
        /**
         * 文件状态，可能值：0：未完成；1：未完成；2：已完成；3：已完成。
         * @example `3`
         */
        Status: number;
        /**
         * 音频URL的协议，可能值：http、https。
         * @example `http`
         */
        AudioScheme: string;
        /**
         * 音频URL，不含http/https。
         * @example `sca-bucket.oss-cn-hangzhou.aliyuncs.com/upload_1173636551461420/dateset_1584674455133_SzC/%E4%BA%BA%E5%B7%A5%E6%A0%A1%E9%AA%8C%E6%B5%8B%E8%AF%95-%E6%9F%A5%E5%8C%97%E4%BA%AC%E5%A4%A9%E6%B0%94.wav?Expires=1584847372&amp;OSSAccessKeyId=*****&amp;Signature=HccAKnLOJwoYvzE*********`
         */
        AudioURL: string;
        /**
         * 最后更新时间。
         * @example `2020-03-20T11:26Z`
         */
        UpdateTime: string;
        /**
         * 转写错误的字数。
         * @example `23`
         */
        IncorrectWords: number;
        /**
         * 已校验过的文件总数。
         * @example `2`
         */
        VerifiedCount: number;
        /**
         * 是否进行了人工校验，可能值：false：还未校验过；true：已经校验过。
         * @example `true`
         */
        Verified: boolean;
        /**
         * 文件名称。
         * @example `xxx.wav`
         */
        FileName: string;
        /**
         * 该任务下文件总数。
         * @example `3`
         */
        TotalCount: number;
        /**
         * 当前识别准确率。
         * @example `0.97079998`
         */
        Precision: number;
        /**
         * 文件ID。
         * @example `e790e6c919d84b82b64ee*****`
         */
        FileId: string;
        /**
         * 当前任务中文件总时长，单位：秒。
         * @example `23421`
         */
        Duration: number;
        Dialogues: {
            /**
             * 对话数据，status=2/3时有值。
             */
            Dialogue: {
                /**
                 * 这句话转写内容。
                 * @example `你好有什么可以帮您`
                 */
                Words: string;
                /**
                 * 角色标识。
                 * @example `某客服`
                 */
                Identity: string;
                /**
                 * 这句话转写的错误字数，只有当这句话已经完成校验后才会返回。
                 * @example `2`
                 */
                IncorrectWords: number;
                /**
                 * 弃用字段，请忽略。
                 * @example `XXX`
                 */
                BeginTime: string;
                /**
                 * 这句话正确内容，只有当这句话已经完成校验后才会返回。
                 * @example `您好有什么可以帮您`
                 */
                SourceWords: string;
                /**
                 * 这句话的结束时间相对对话整体开始时间的偏移量，毫秒级别。
                 * @example `3422`
                 */
                End: number;
                /**
                 * 语速值，单位：字/分钟。
                 * @example `332`
                 */
                SpeechRate: number;
                /**
                 * 这句话的时分秒格式的开始时间，格式：HH:mm:ss。
                 * @example `00:00:07`
                 */
                HourMinSec: string;
                /**
                 * 人工校验后正确的角色。
                 * @example `客服`
                 */
                SourceRole: string;
                /**
                 * 这句话的开始时间相对对话整体开始时间的偏移量，毫秒级别。
                 * @example `980`
                 */
                Begin: number;
                /**
                 * 情绪能量值，取值范围：1-10，值越高情绪越强烈。
                 * @example `6`
                 */
                EmotionValue: number;
                /**
                 * 该句话的角色，可能值：客服、客户。
                 * @example `客户`
                 */
                Role: string;
                /**
                 * 弃用字段，请忽略。
                 * @example `1`
                 */
                SilenceDuration: number;
                Deltas: {
                    /**
                     * 人工校验后对话文字的错误之处。
                     */
                    Delta: {
                        /**
                         * 错误的不同类型，可能值：CHANGE：错误，INSERT：多字，DELETE：少字。
                         * @example `CHANGE`
                         */
                        Type: string;
                        /**
                         * 人工校验后正确的对话内容。
                         */
                        Source: {
                            /**
                             * 字所处的位置。
                             * @example `5`
                             */
                            Position: number;
                            Line: {
                                /**
                                 * 具体的字。
                                 */
                                Line: string[];
                            };
                        };
                        /**
                         * 原始转写对话内容。
                         */
                        Target: {
                            /**
                             * 字所处的位置。
                             * @example `5`
                             */
                            Position: number;
                            Line: {
                                /**
                                 * 具体的字。
                                 */
                                Line: string[];
                            };
                        };
                    }[];
                };
            }[];
        };
    };
}
