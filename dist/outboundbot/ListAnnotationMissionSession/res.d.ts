export interface ListAnnotationMissionSessionResponse {
    /**
     * 是否调用成功。true：表示调用成功。false：表示调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 接口状态码
     * @example `OK`
     */
    Code: string;
    /**
     * 附加信息。取值说明如下：请求正常，返回success。请求异常，返回具体异常错误码。
     * @example `bp.java.nopowerContact`
     */
    Message: string;
    /**
     * 数据
     */
    Data: {
        /**
         * 任务ID
         * @example `b3f2c931-5180-43ca-b4aa-2baee2d73c8b`
         */
        AnnotationMissionId: string;
        /**
         * 会话列表
         */
        AnnotationMissionSessionList: {
            /**
             * ID
             * @example `64ba5ac9-a4e1-4333-b03c-9d4a588c9f6c
            `
             */
            AnnotationMissionSessionId: string;
            /**
             * 创建时间
             * @example `1691117009000`
             */
            CreateTime: number;
            /**
             * 修改时间
             * @example `1677987898384`
             */
            ModifiedTime: number;
            /**
             * 任务id
             * @example `64ba5ac9-a4e1-4333-b03c-9d4a588c9f6c`
             */
            AnnotationMissionId: string;
            /**
             * 实例id
             * @example `a4274627-265f-4e14-b2d6-4ee7d4f8593e`
             */
            InstanceId: string;
            /**
             * 场景ID
             * @example `408d6c4d-23e2-41f6-bbdd-f919a8297aa4`
             */
            ScriptId: string;
            /**
             * 任务组ID
             * @example `2f642da1-b00b-4dd6-ac7d-dcbeefd13ff3`
             */
            JobGroupId: string;
            /**
             * 任务ID
             * @example `42da7cde-a5e8-45cc-b9d2-828711d95b30`
             */
            JobId: string;
            /**
             * 外呼系统为taskId，导航为conversationId
             * @example `40669e52-c1c8-487f-9593-29749086bdc9`
             */
            SessionId: string;
            /**
             * 标注状态
             * @example `1`
             */
            AnnotationStatus: number;
            /**
             * chat列表
             */
            AnnotationMissionChatList: {
                /**
                 * chat id
                 * @example `40669e52-c1c8-487f-9593-29749086bdc9
                `
                 */
                AnnotationMissionChatId: string;
                /**
                 * 创建时间
                 * @example `1682216045619`
                 */
                CreateTime: number;
                /**
                 * 修改时间
                 * @example `1571649300000`
                 */
                ModifiedTime: number;
                /**
                 * 任务id
                 * @example `03f56192-fa8a-40dc-9558-39b357f0618f`
                 */
                AnnotationMissionId: string;
                /**
                 * 会话id
                 * @example `03f56192-fa8a-40dc-9558-39b357f0618f
                `
                 */
                AnnotationMissionSessionId: string;
                /**
                 * 实例id
                 * @example `77343553-cbc2-4487-a35c-869f1e86c573`
                 */
                InstanceId: string;
                /**
                 * 序列id
                 * @example `380578077`
                 */
                SequenceId: string;
                /**
                 * 触发时间
                 * @example `1682390676403`
                 */
                OccurTime: number;
                /**
                 * 机器人答复内容
                 * @example `{'Answer': u'\u53c2\u8003\u6587\u6863\uff1ahttps://help.aliyun.com/document_detail/215402.html', 'QuestionId': 371159, 'Uuid': 'ac14000116781568127896224d0044'}`
                 */
                Answer: string;
                /**
                 * chat标注状态
                 * @example `1`
                 */
                AnnotationStatus: number;
                /**
                 * 语义标注状态
                 * @example `1`
                 */
                IntentAnnotationStatus: number;
                /**
                 * ASR标注状态
                 * @example `1`
                 */
                AsrAnnotationStatus: number;
                /**
                 * 标签标注状态
                 * @example `1`
                 */
                TagAnnotationStatus: number;
                /**
                 * 标注动作：1正确、20匹配错误未优化 21匹配错误已优化、3未覆盖、4无效
                 * @example `1`
                 */
                SubStatus: number;
                /**
                 * 转译错误标识
                 * @example `1`
                 */
                TranslationError: number;
                /**
                 * ASR人工标注文本结果，用于字准率的计算
                 * @example `[]`
                 */
                AnnotationAsrResult: string;
                /**
                 * ASR识别结果
                 * @example `[]`
                 */
                OriginalAsrResult: string;
                /**
                 * chat意图列表
                 */
                AnnotationMissionChatIntentUserSayInfoList: {
                    /**
                     * id
                     * @example `03f56192-fa8a-40dc-9558-39b357f0618f
                    `
                     */
                    AnnotationMissionChatIntentUserSayInfoId: string;
                    /**
                     * 创建时间
                     * @example `1682216045619`
                     */
                    CreateTime: number;
                    /**
                     * 修改时间
                     * @example `1682216045619`
                     */
                    ModifiedTime: number;
                    /**
                     * 实例id
                     * @example `77343553-cbc2-4487-a35c-869f1e86c573
                    `
                     */
                    InstanceId: string;
                    /**
                     * 标注任务id
                     * @example `77343553-cbc2-4487-a35c-869f1e86c573
                    `
                     */
                    AnnotationMissionId: string;
                    /**
                     * 会话id
                     * @example `77343553-cbc2-4487-a35c-869f1e86c573
                    `
                     */
                    AnnotationMissionSessionId: string;
                    /**
                     * chat id
                     * @example `77343553-cbc2-4487-a35c-869f1e86c573
                    `
                     */
                    AnnotationMissionChatId: string;
                    /**
                     * 修改后问法
                     * @example `[]`
                     */
                    Content: string;
                    /**
                     * 意图id
                     * @example `77343553-cbc2-4487-a35c-869f1e86c573
                    `
                     */
                    IntentId: number;
                    /**
                     * 对话ID
                     * @example `77343553-cbc2-4487-a35c-869f1e86c573
                    `
                     */
                    DialogId: number;
                    /**
                     * 机器人ID
                     * @example `77343553-cbc2-4487-a35c-869f1e86c573
                    `
                     */
                    BotId: string;
                    /**
                     * 已删除
                     * @example `true`
                     */
                    Delete: boolean;
                    /**
                     * 已创建
                     * @example `false`
                     */
                    Create: boolean;
                }[];
                /**
                 * 标注任务chat热词标注信息表
                 */
                AnnotationMissionChatVocabularyInfoList: {
                    /**
                     * id
                     * @example `03f56192-fa8a-40dc-9558-39b357f0618f
                    `
                     */
                    AnnotationMissionChatVocabularyInfoId: string;
                    /**
                     * 创建时间
                     * @example `1675218421941`
                     */
                    CreateTime: number;
                    /**
                     * 修改时间
                     * @example `1676272557653`
                     */
                    ModifiedTime: number;
                    /**
                     * 实例id
                     * @example `818961ce-d9ba-4f88-89ca-2a04b24bdf01`
                     */
                    InstanceId: string;
                    /**
                     * 任务id
                     * @example `b3f2c931-5180-43ca-b4aa-2baee2d73c8b`
                     */
                    AnnotationMissionId: string;
                    /**
                     * 会话id
                     * @example `77343553-cbc2-4487-a35c-869f1e86c573
                    `
                     */
                    AnnotationMissionSessionId: string;
                    /**
                     * chat id
                     * @example `77343553-cbc2-4487-a35c-869f1e86c573
                    `
                     */
                    AnnotationMissionChatId: string;
                    /**
                     * 热词id
                     * @example `77343553-cbc2-4487-a35c-869f1e86c573
                    `
                     */
                    VocabularyId: string;
                    /**
                     * 热词标注内容
                     * @example `[]`
                     */
                    Vocabulary: string;
                    /**
                     * vocabulary名称
                     * @example `名称`
                     */
                    VocabularyName: string;
                    /**
                     * 描述
                     * @example `描述`
                     */
                    VocabularyDescription: string;
                    /**
                     * 热词权重[-6,5]
                     * @example `0`
                     */
                    VocabularyWeight: number;
                    /**
                     * 已删除
                     * @example `true`
                     */
                    Delete: boolean;
                    /**
                     * 已创建
                     * @example `true`
                     */
                    Create: boolean;
                }[];
                /**
                 * 标注任务chat语言模型标注信息表
                 */
                AnnotationMissionChatCustomizationDataInfoList: {
                    /**
                     * id
                     * @example `03f56192-fa8a-40dc-9558-39b357f0618f
                    `
                     */
                    AnnotationMissionChatCustomizationDataInfoId: string;
                    /**
                     * 创建时间
                     * @example `1682216045619`
                     */
                    CreateTime: number;
                    /**
                     * 修改时间
                     * @example `1679552585384`
                     */
                    ModifiedTime: number;
                    /**
                     * 实例id
                     * @example `d3fbfca8-4208-4d4b-a53a-c4dba5e43a66`
                     */
                    InstanceId: string;
                    /**
                     * 任务id
                     * @example `2f03b24a-fda2-4501-90ba-0a9a59f8dd9d`
                     */
                    AnnotationMissionId: string;
                    /**
                     * 会话id
                     * @example `03f56192-fa8a-40dc-9558-39b357f0618f
                    `
                     */
                    AnnotationMissionSessionId: string;
                    /**
                     * chat id
                     * @example `03f56192-fa8a-40dc-9558-39b357f0618f
                    `
                     */
                    AnnotationMissionChatId: string;
                    /**
                     * id
                     * @example `03f56192-fa8a-40dc-9558-39b357f0618f
                    `
                     */
                    CustomizationDataId: string;
                    /**
                     * 语音标注文本
                     * @example `抱歉哈，可能给您造成困扰了，这边先不打扰您，祝您生活愉快，再见`
                     */
                    Content: string;
                    /**
                     * 名称
                     * @example `默认数据`
                     */
                    CustomizationDataName: string;
                    /**
                     * 描述
                     * @example `默认数据`
                     */
                    CustomizationDataDescription: string;
                    /**
                     * 语言模型数据权重
                     * @example `1`
                     */
                    CustomizationDataWeight: number;
                    /**
                     * 是否已删除。
                     * @example `true`
                     */
                    Delete: boolean;
                    /**
                     * 是否创建
                     * @example `true`
                     */
                    Create: boolean;
                }[];
                /**
                 * 标注信息chat绑定标签映射关系列表
                 */
                AnnotationMissionChatTagInfoList: {
                    /**
                     * id
                     * @example `03f56192-fa8a-40dc-9558-39b357f0618f
                    `
                     */
                    AnnotationMissionChatTagInfoId: string;
                    /**
                     * 创建时间
                     * @example `1686797050000`
                     */
                    CreateTime: number;
                    /**
                     * 修改时间
                     * @example `1679019660000`
                     */
                    ModifiedTime: number;
                    /**
                     * 实例id
                     * @example `32be9d94-1346-4c4a-a4d0-ccd379f87013`
                     */
                    InstanceId: string;
                    /**
                     * 任务id
                     * @example `e7272cbb-a60d-4b41-b5c4-8863edc0b8f7`
                     */
                    AnnotationMissionId: string;
                    /**
                     * 会话id
                     * @example `03f56192-fa8a-40dc-9558-39b357f0618f
                    `
                     */
                    AnnotationMissionSessionId: string;
                    /**
                     * chat id
                     * @example `03f56192-fa8a-40dc-9558-39b357f0618f
                    `
                     */
                    AnnotationMissionChatId: string;
                    /**
                     * tag id
                     * @example `03f56192-fa8a-40dc-9558-39b357f0618f
                    `
                     */
                    AnnotationMissionTagInfoId: string;
                    /**
                     * tag名称
                     * @example `标签`
                     */
                    AnnotationMissionTagInfoName: string;
                    /**
                     * 删除
                     * @example `true`
                     */
                    Delete: boolean;
                    /**
                     * 创建
                     * @example `true`
                     */
                    Create: boolean;
                }[];
            }[];
            /**
             * 版本号
             * @example `1`
             */
            Version: number;
            /**
             * 调试对话
             * @example `true`
             */
            DebugConversation: boolean;
        }[];
        /**
         * 是否调用成功。true：表示调用成功。false：表示调用失败。
         * @example `true`
         */
        Success: boolean;
        /**
         * 附加信息。取值说明如下：请求正常，返回success。请求异常，返回具体异常错误码。
         * @example `bp.java.nopowerContact`
         */
        Message: string;
        /**
         * 总计个数
         * @example `30`
         */
        TotalCount: number;
    };
    /**
     * HTTP状态码
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 请求ID
     * @example `254EB995-DEDF-48A4-9101-9CA5B72FFBCC`
     */
    RequestId: string;
}
