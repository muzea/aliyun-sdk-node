export interface SaveAnnotationMissionSessionListRequest {
    /**
     * 会话列表JSON
     * @example `[]`
     */
    "AnnotationMissionSessionListJsonString"?: string;
    /**
     * 用户昵称
     * @example `用户`
     */
    "UserNick"?: string;
    /**
     * 会话列表
     */
    "AnnotationMissionSessionList"?: {
        /**
         * 会话id
         * @example `c88cc004-de69-4eee-aa5f-2efed533a54e
        `
         */
        AnnotationMissionSessionId: string;
        /**
         * 创建时间
         * @example `2023-04-14T02:01:23Z`
         */
        CreateTime: number;
        /**
         * 修改时间
         * @example `1683858248778`
         */
        ModifiedTime: number;
        /**
         * 标注任务id
         * @example `c88cc004-de69-4eee-aa5f-2efed533a54e`
         */
        AnnotationMissionId: string;
        /**
         * 实例id
         * @example `77343553-cbc2-4487-a35c-869f1e86c573`
         */
        InstanceId: string;
        /**
         * 场景id
         * @example `e4f32632-2e56-4399-9fec-47bdbaeefdf6`
         */
        ScriptId: string;
        /**
         * 任务组ID
         * @example `29e669bd-a9d1-4529-98cd-c2b0549bcf53`
         */
        JobGroupId: string;
        /**
         * 任务ID
         * @example `593aaf5e-1275-4add-9990-22696385dc6e`
         */
        JobId: string;
        /**
         * 外呼系统为taskId，导航为conversationId
         * @example `e6271044-b4b2-4ad8-ade4-c720be023538`
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
             * @example `ddce607f-f537-4ebd-9914-cf45671defb9
            `
             */
            AnnotationMissionChatId: string;
            /**
             * 创建时间
             * @example `1679629770336`
             */
            CreateTime: number;
            /**
             * 修改时间
             * @example `1629360780000`
             */
            ModifiedTime: number;
            /**
             * 标注任务id
             * @example `ddce607f-f537-4ebd-9914-cf45671defb9`
             */
            AnnotationMissionId: string;
            /**
             * 会话id
             * @example `c88cc004-de69-4eee-aa5f-2efed533a54e
            `
             */
            AnnotationMissionSessionId: string;
            /**
             * 实例id
             * @example `5ec263fa-c8de-46f4-b844-6fb8275bb645`
             */
            InstanceId: string;
            /**
             * 本轮次会话交互的序列号
             * @example `1475140522`
             */
            SequenceId: string;
            /**
             * 触发时间
             * @example `1682493047418`
             */
            OccurTime: number;
            /**
             * 机器人答复内容
             * @example `{'Answer': u'\u53c2\u8003\u6587\u6863\uff1ahttps://help.aliyun.com/document_detail/181325.html', 'QuestionId': 372858, 'Uuid': 'ac14000516762684770197536d0044'}`
             */
            Answer: string;
            /**
             * 标注状态
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
             * 列表
             */
            AnnotationMissionChatIntentUserSayInfoList: {
                /**
                 * Id
                 * @example `ddce607f-f537-4ebd-9914-cf45671defb9
                `
                 */
                AnnotationMissionChatIntentUserSayInfoId: string;
                /**
                 * 创建时间
                 * @example `1683858248778`
                 */
                CreateTime: number;
                /**
                 * 修改时间
                 * @example `1683858248778`
                 */
                ModifiedTime: number;
                /**
                 * 实例id
                 * @example `ddce607f-f537-4ebd-9914-cf45671defb9
                `
                 */
                InstanceId: string;
                /**
                 * 标注任务id
                 * @example `ddce607f-f537-4ebd-9914-cf45671defb9
                `
                 */
                AnnotationMissionId: string;
                /**
                 * 会话id
                 * @example `ddce607f-f537-4ebd-9914-cf45671defb9
                `
                 */
                AnnotationMissionSessionId: string;
                /**
                 * chat id
                 * @example `ddce607f-f537-4ebd-9914-cf45671defb9
                `
                 */
                AnnotationMissionChatId: string;
                /**
                 * 内容
                 * @example `[]`
                 */
                Content: string;
                /**
                 * 意图id
                 * @example `ddce607f-f537-4ebd-9914-cf45671defb9
                `
                 */
                IntentId: number;
                /**
                 * 对话id
                 * @example `ddce607f-f537-4ebd-9914-cf45671defb9
                `
                 */
                DialogId: number;
                /**
                 * 机器人id
                 * @example `ddce607f-f537-4ebd-9914-cf45671defb9
                `
                 */
                BotId: string;
                /**
                 * 删除
                 * @example `false`
                 */
                Delete: boolean;
                /**
                 * 创建
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
                 * @example `77343553-cbc2-4487-a35c-869f1e86c573
                `
                 */
                AnnotationMissionChatVocabularyInfoId: string;
                /**
                 * 创建时间
                 * @example `1677552860720`
                 */
                CreateTime: number;
                /**
                 * 修改时间
                 * @example `1679283408230`
                 */
                ModifiedTime: number;
                /**
                 * 实例id
                 * @example `77343553-cbc2-4487-a35c-869f1e86c573`
                 */
                InstanceId: string;
                /**
                 * 标注任务id
                 * @example `977a45dc-b636-4407-9e98-9f572c709ada`
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
                 * 处理场景名称
                 * @example `咨询`
                 */
                VocabularyName: string;
                /**
                 * 描述
                 * @example `售后咨询`
                 */
                VocabularyDescription: string;
                /**
                 * 热词权重[-6,5]
                 * @example `0`
                 */
                VocabularyWeight: number;
                /**
                 * 删除
                 * @example `true`
                 */
                Delete: boolean;
                /**
                 * 创建
                 * @example `false`
                 */
                Create: boolean;
            }[];
            /**
             * 标注任务chat语言模型标注信息表
             */
            AnnotationMissionChatCustomizationDataInfoList: {
                /**
                 * id
                 * @example `b598a47a-7c03-45fb-af6b-343950dd9512
                `
                 */
                AnnotationMissionChatCustomizationDataInfoId: string;
                /**
                 * 创建时间
                 * @example `1682316909210`
                 */
                CreateTime: number;
                /**
                 * 修改时间
                 * @example `1673438100000`
                 */
                ModifiedTime: number;
                /**
                 * 实例id
                 * @example `b598a47a-7c03-45fb-af6b-343950dd9512`
                 */
                InstanceId: string;
                /**
                 * 标注任务id
                 * @example `03f56192-fa8a-40dc-9558-39b357f0618f`
                 */
                AnnotationMissionId: string;
                /**
                 * 会话id
                 * @example `977a45dc-b636-4407-9e98-9f572c709ada
                `
                 */
                AnnotationMissionSessionId: string;
                /**
                 * chat id
                 * @example `977a45dc-b636-4407-9e98-9f572c709ada
                `
                 */
                AnnotationMissionChatId: string;
                /**
                 * id
                 * @example `977a45dc-b636-4407-9e98-9f572c709ada
                `
                 */
                CustomizationDataId: string;
                /**
                 * 内容
                 * @example `现在呢主动邀请到您，机会非常难得，而且额度放着不用，也是不收费的，可以当作咱们的备用金，最快5分钟就能到账，建议您可以先把额度免费领取下来呢。   `
                 */
                Content: string;
                /**
                 * 名称
                 * @example `默认数据`
                 */
                CustomizationDataName: string;
                /**
                 * 描述
                 * @example `默认数据描述`
                 */
                CustomizationDataDescription: string;
                /**
                 * 语言模型数据权重
                 * @example `1`
                 */
                CustomizationDataWeight: number;
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
            /**
             * 标注信息chat绑定标签映射关系列表
             */
            AnnotationMissionChatTagInfoList: {
                /**
                 * id
                 * @example `id`
                 */
                AnnotationMissionChatTagInfoId: string;
                /**
                 * annotationmissiongroup结束时间
                 * @example `1679710866060`
                 */
                CreateTime: number;
                /**
                 * 修改时间
                 * @example `1679710866060`
                 */
                ModifiedTime: number;
                /**
                 * 实例id
                 * @example `32be9d94-1346-4c4a-a4d0-ccd379f87013`
                 */
                InstanceId: string;
                /**
                 * 任务ID
                 * @example `977a45dc-b636-4407-9e98-9f572c709ada`
                 */
                AnnotationMissionId: string;
                /**
                 * 会话id
                 * @example `977a45dc-b636-4407-9e98-9f572c709ada
                `
                 */
                AnnotationMissionSessionId: string;
                /**
                 * chat id
                 * @example `977a45dc-b636-4407-9e98-9f572c709ada
                `
                 */
                AnnotationMissionChatId: string;
                /**
                 * tag id
                 * @example `977a45dc-b636-4407-9e98-9f572c709ada
                `
                 */
                AnnotationMissionTagInfoId: string;
                /**
                 * tag名称
                 * @example `-`
                 */
                AnnotationMissionTagInfoName: string;
                /**
                 * 删除
                 * @example `false`
                 */
                Delete: boolean;
                /**
                 * 创建
                 * @example `true`
                 */
                Create: boolean;
            }[];
        }[];
    }[];
    /**
     * 环境
     * @example `0`
     */
    "Environment"?: number;
    /**
     * 标注数据来源，1:外呼、2：导航
     * @example `1`
     */
    "AnnotationMissionDataSourceType"?: number;
    /**
     * 坐席ID。
     * @example `1198938`
     */
    "AgentId"?: string;
    /**
     * 业务空间key，不传时访问默认业务空间，key值在主账号业务管理页面获取
     * @example `9137ab9c27044921860030adf8590ec4_p_outbound_public`
     */
    "AgentKey"?: string;
}
