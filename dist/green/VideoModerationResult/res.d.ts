export interface VideoModerationResultResponse {
    /**
     * Id of the request
     * @example `6CF2815C-C8C7-4A01-B52E-FF6E24F53492`
     */
    RequestId: string;
    /**
     * 返回码。返回200代表成功。
     * @example `200`
     */
    Code: number;
    /**
     * 返回信息。
     * @example `success finished`
     */
    Message: string;
    /**
     * 审核结果数据。
     */
    Data: {
        /**
         * 直播的唯一标识ID。
         * @example `liveId`
         */
        LiveId: string;
        /**
         * API请求时传入的dataId 的值，如请求时未传入，则没有该字段。
         * @example `product_content-2055763`
         */
        DataId: string;
        /**
         * 视频语音审核分段结果。
         */
        AudioResult: {
            /**
             * 语音分段列表
             */
            SliceDetails: {
                /**
                 * 分段开始时间(秒)
                 * @example `0`
                 */
                StartTime: number;
                /**
                 * 分段结束时间(秒)
                 * @example `30`
                 */
                EndTime: number;
                /**
                 * 开始时间戳，精确到毫秒
                 * @example `1659935002123`
                 */
                StartTimestamp: number;
                /**
                 * 结束时间戳
                 * @example `1685245261939`
                 */
                EndTimestamp: number;
                /**
                 * 分段语音文件临时地址
                 * @example `http://xxxx.abc.img`
                 */
                Url: string;
                /**
                 * 分段语音转写文本
                 * @example `今天天气真不错`
                 */
                Text: string;
                /**
                 * 命中违规标签
                 * @example `porn`
                 */
                Labels: string;
                /**
                 * 风险分数，默认范围 0-99
                 * @example `5`
                 */
                Score: number;
                /**
                 * 扩展字段
                 * @example `{\"consoleProduct\":\"slbnext\"}`
                 */
                Extend: string;
                /**
                 * 命中风险详情
                 * @example `""`
                 */
                RiskTips: string;
                /**
                 * 命中风险关键词
                 * @example `""`
                 */
                RiskWords: string;
            }[];
            /**
             * 语音标签汇总。
             */
            AudioSummarys: {
                /**
                 * 视频语音标签。
                 * @example `profanity`
                 */
                Label: string;
                /**
                 * 标签出现次数。
                 * @example `8`
                 */
                LabelSum: number;
            }[];
        };
        /**
         * 视频截帧结果列表
         */
        FrameResult: {
            /**
             * 结果帧数量
             * @example `10`
             */
            FrameNum: number;
            /**
             * 包含命中标签的视频截帧的信息。
             */
            Frames: {
                /**
                 * 截帧图片临时访问地址
                 * @example `http://xxxx.abc.jpg`
                 */
                TempUrl: string;
                /**
                 * 截帧偏移值。
                 * @example `338`
                 */
                Offset: number;
                /**
                 * 帧检测结果详情
                 */
                Results: {
                    /**
                     * 图片审核服务类型
                     * @example `tonalityImprove`
                     */
                    Service: string;
                    /**
                     * 命中结果详情
                     */
                    Result: {
                        /**
                         * 置信分值，0到100分，保留到小数点后2位。
                         * @example `50`
                         */
                        Confidence: number;
                        /**
                         * 检测结果的分类
                         * @example `bloody`
                         */
                        Label: string;
                    }[];
                    /**
                     * 返回命中的图片中文字信息。
                     */
                    TextInImage: any;
                    /**
                     * 如果命中自定义图库，返回命中的自定义图库信息。
                     */
                    CustomImage: {
                        /**
                         * 命中的自定义图库ID。
                         * @example `12345678`
                         */
                        LibId: string;
                        /**
                         * 命中的自定义图片ID。
                         * @example `1234`
                         */
                        ImageId: string;
                    }[];
                    /**
                     * 视频中包含特定人物时，返回识别出来的人物编码。
                     */
                    PublicFigure: {
                        /**
                         * 识别出的人物编码信息。
                         * @example `xxx001`
                         */
                        FigureId: string;
                    }[];
                }[];
                /**
                 * 绝对时间戳，单位：毫秒。
                 * @example `1684559739000`
                 */
                Timestamp: number;
            }[];
            /**
             * 视频截帧标签汇总。
             */
            FrameSummarys: {
                /**
                 * 视频截帧标签。
                 * @example `violent_armedForces`
                 */
                Label: string;
                /**
                 * 标签出现次数。
                 * @example `8`
                 */
                LabelSum: number;
            }[];
        };
        /**
         * 任务ID
         * @example `xxxxx-xxxxx`
         */
        TaskId: string;
    };
}
