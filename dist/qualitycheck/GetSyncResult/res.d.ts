export interface GetSyncResultResponse {
    /**
     * 请求id
     * @example `76DB5D8C-5BD9-42A7-B527-5AF3A5F****`
     */
    RequestId: string;
    /**
     * 请求是否成功，调用方可根据此字段来判断请求是否成功：true表示成功；false/null表示失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 内部字段，请忽略。
     * @example `xxx`
     */
    ResultCountId: string;
    /**
     * 结果代码，200表示成功，若为别的值则表示失败，调用方可根据此字段判断失败原因。
     * @example `200`
     */
    Code: string;
    /**
     * 出错时表示出错详情，成功时为successful。
     * @example `successful`
     */
    Message: string;
    /**
     * 页码
     * @example `1`
     */
    PageNumber: number;
    /**
     * 每页条数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 总条数。
     * @example `1`
     */
    Count: number;
    /**
     * 查询结果。
     */
    Data: {
        /**
         * 任务当前状态，可能值：0（未完成）；1（已完成），调用方可根据此字段判断任务是否完成；非0、1表示出错，错误详情可查看errorMessage字段。
         * @example `1`
         */
        Status: number;
        /**
         * 当status是非0、1时表示错误详情。
         * @example `xxxx`
         */
        ErrorMessage: string;
        /**
         * 分配的质检员的用户名。
         * @example `张三`
         */
        Reviewer: string;
        /**
         * 任务创建时间。
         * @example `2019-07-24T19:31Z	`
         */
        CreateTime: string;
        /**
         * 复核状态；可能值：0（未复核）；1（已复核）。
         * @example `1`
         */
        ReviewStatus: number;
        /**
         * 内部字段，请忽略。
         * @example `xxx`
         */
        TaskName: string;
        /**
         * 复核意见。
         * @example `xxx`
         */
        Comments: string;
        /**
         * 复核准确性，可能值：0（错误）；1（正确）；2（部分正确）；3（待复核）。
         * @example `3`
         */
        ReviewResult: number;
        /**
         * 质检得分，满分100。
         * @example `100`
         */
        Score: number;
        /**
         * 任务ID。
         * @example `20201231de3d34ec-40fa-4a55-8d27-76ea*****`
         */
        TaskId: string;
        /**
         * 实际复核的质检员。
         * @example `张三`
         */
        Resolver: string;
        /**
         * 转写结果（对话文本）
         */
        AsrResult: {
            /**
             * 对话内容。
             * @example `您好，很高兴为您服务`
             */
            Words: string;
            /**
             * 本句话的开始时间，是相对起始点的开始时间偏移，单位ms。
             * @example `340`
             */
            Begin: number;
            /**
             * 情绪能量值1-10，值越高情绪越强烈。
             * @example `6`
             */
            EmotionValue: number;
            /**
             * 本句话的结束时间，是相对起始点的结束时间偏移，单位ms。
             * @example `3000`
             */
            End: number;
            /**
             * 本句平均语速，单位：字/分钟。
             * @example `221`
             */
            SpeechRate: number;
            /**
             * 对话内容角色，可能值：客服、客户。
             * @example `客服`
             */
            Role: string;
            /**
             * 内部字段，请忽略。
             * @example `11`
             */
            SilenceDuration: number;
        }[];
        /**
         * 规则命中结果
         */
        HitResult: {
            /**
             * 命中规则所关联的规则类型。
             * @example `2`
             */
            Type: string;
            /**
             * 复核准确性；可能值：0（错误）；1（正确）。
             * @example `1`
             */
            ReviewResult: number;
            /**
             * 命中的规则名称。
             * @example `测试规则`
             */
            Name: string;
            /**
             * 命中的规则ID。
             * @example `1211`
             */
            Rid: string;
            /**
             * 具体命中位置信息，以句子维度，返回命中句子中具体命中了规则中哪个条件，是哪几个字命中的
             */
            Hits: {
                /**
                 * 返回当前句中是哪几个字命中了规则，也就是需要高亮展示的关键字
                 */
                KeyWords: {
                    /**
                     * 需要高亮展示的关键字从第几个字符开始，取值范围从0开始，最大值为当句话字符总数减1。高亮的字包含from。
                     * @example `2`
                     */
                    From: number;
                    /**
                     * 需要高亮展示的关键字到第几个字符结束，最大值为当句话字符总数减1。高亮的字不包含to，例如一句话为“不可能给你退货的”，from=0，to=3，那么需要高亮的关键字就是“不可能”三个字。
                     * @example `5`
                     */
                    To: number;
                    /**
                     * 具体的关键字内容。
                     * @example `投诉`
                     */
                    Val: string;
                    /**
                     * 命中的条件ID。
                     * @example `66666`
                     */
                    Cid: string;
                }[];
                /**
                 * 命中的条件ID列表。
                 */
                Cid: string[];
                /**
                 * 当前命中规则的句子详情
                 */
                Phrase: {
                    /**
                     * 这个角色说的一句话。
                     * @example `我要投诉`
                     */
                    Words: string;
                    /**
                     * 本句话的开始时间，是相对起始点的开始时间偏移，单位ms。
                     * @example `440`
                     */
                    Begin: number;
                    /**
                     * 情绪能量值1-10，值越高情绪越强烈。
                     * @example `6`
                     */
                    EmotionValue: number;
                    /**
                     * 本句话的结束时间，是相对起始点的结束时间偏移，单位ms。
                     * @example `4000`
                     */
                    End: number;
                    /**
                     * 当句话的语速
                     * @example `234`
                     */
                    SpeechRate: number;
                    /**
                     * 对话内容角色，可能值：客服、客户、系统。
                     * @example `客服`
                     */
                    Role: string;
                    /**
                     * 内部字段，请忽略。
                     * @example `1`
                     */
                    SilenceDuration: number;
                };
            }[];
        }[];
        /**
         * 录音文件信息
         */
        Recording: {
            /**
             * 被叫号码。
             * @example `1888888***`
             */
            Callee: string;
            /**
             * 自定义数据3。
             * @example `xxx`
             */
            Remark3: string;
            /**
             * 业务线名称。
             * @example `客服部`
             */
            Business: string;
            /**
             * 录音文件地址，用于录音播放。
             * @example `http://aliyun.com/xxx.wav	`
             */
            Url: string;
            /**
             * 内部字段，请忽略
             * @example `xxxx`
             */
            PrimaryId: string;
            /**
             * 自定义数据1。
             * @example `xxx`
             */
            Remark1: string;
            /**
             * 自定义数据2。
             * @example `xxx`
             */
            Remark2: string;
            /**
             * 呼叫类型：
             * - 1：呼出
             * - 3：呼入
             * @example `1`
             */
            CallType: number;
            /**
             * 主叫号码
             * @example `0108888****	`
             */
            Caller: string;
            /**
             * 通话ID。
             * @example `xxx`
             */
            CallId: string;
            /**
             * 内部字段，请忽略。
             * @example `xxx`
             */
            DataSetName: string;
            /**
             * 对话总字数
             * @example `232`
             */
            Duration: number;
            /**
             * 通话时长。
             * @example `120`
             */
            DurationAudio: number;
            /**
             * 录音文件名称。
             * @example `123123.wav`
             */
            Name: string;
            /**
             * 文件ID，即请求参数中的callId，若未指定则会随机生成一个。
             * @example `xxxx`
             */
            Id: string;
            /**
             * 录音生成时间戳，精确到毫秒。
             * @example `1563967699000`
             */
            CallTime: string;
        };
        /**
         * 客服信息
         */
        Agent: {
            /**
             * 客服姓名
             * @example `李四`
             */
            Name: string;
            /**
             * 技能组名称
             * @example `客服组`
             */
            SkillGroup: string;
            /**
             * 客服ID。
             * @example `12221`
             */
            Id: string;
        };
    }[];
}
