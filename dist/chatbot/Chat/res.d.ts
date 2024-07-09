export interface ChatResponse {
    /**
     * query的分词结果，可能为空
     */
    QuerySegList: string[];
    /**
     * 消息的列表
     */
    Messages: {
        /**
         * 当AnswerType为Knowledge时，此字段包含机器人返回的Knowledge对象
         */
        Knowledge: {
            /**
             * 命中语句
             * @example `公积金`
             */
            HitStatement: string;
            /**
             * 命中问题的简介
             * @example `公积金提取`
             */
            Summary: string;
            /**
             * 关联知识列表
             */
            RelatedKnowledges: {
                /**
                 * 知识关联知识的ID
                 * @example `735899`
                 */
                KnowledgeId: string;
                /**
                 * 知识的关联知识的标题
                 * @example `公积金查询`
                 */
                Title: string;
            }[];
            /**
             * 知识类目
             * @example `公积金`
             */
            Category: string;
            /**
             * 命中问题的标题
             * @example `公积金提取`
             */
            Title: string;
            /**
             * 命中问题的内容
             * @example `公积金提取，请在首页搜索公积金提取，提交办事的表单`
             */
            Content: string;
            /**
             * 区分答案类型。
             * KnowledgeBas：知识库；
             * @example `KnowledgeBase`
             */
            AnswerSource: string;
            /**
             * 命中问题在知识库中的ID
             * @example `735898`
             */
            Id: string;
            /**
             * 分数
             * @example `0.998`
             */
            Score: number;
            /**
             * 纯文本或富文本答案的标识
             * @example `PLAIN_TEXT`
             */
            ContentType: string;
        };
        /**
         * 当AnswerType为Text时，此字段包含机器人返回的Text对象
         */
        Text: {
            /**
             * 命中语句
             * @example `查天气`
             */
            HitStatement: string;
            /**
             * 当AnswerSource为BotFramework时，此字段返回对话单元名称
             * @example `示例_查天气`
             */
            DialogName: string;
            /**
             * 当AnswerSource为MACHINE_READ时，此字段返回命中文章标题
             * @example `备案十一`
             */
            ArticleTitle: string;
            /**
             * 区分答案类型
             * @example `BotFramework`
             */
            AnswerSource: string;
            /**
             * 当AnswerSource为BotFramework时，此字段返回专有名词列表
             */
            Slots: {
                /**
                 * 具体值
                 * @example `北京`
                 */
                Value: string;
                /**
                 * 原始值
                 * @example `北京`
                 */
                Origin: string;
                /**
                 * 名称
                 * @example `查天气意图.city`
                 */
                Name: string;
                /**
                 * 是否命中
                 * @example `false`
                 */
                Hit: boolean;
            }[];
            /**
             * 当AnswerSource为BotFramework时，此字段返回节点名称
             * @example `示例_查天气.查天气填槽.__city`
             */
            NodeName: string;
            /**
             * 当AnswerSource为BotFramework时，此字段返回意图名称
             * @example `查天气意图`
             */
            IntentName: string;
            /**
             * 元数据
             * @example `[[{\"columnName\":\"姓名\",\"stringValue\":\"王珊珊\"}]]`
             */
            MetaData: string;
            /**
             * 当AnswerSource为BotFramework时，此字段返回透传参数
             */
            ExternalFlags: any;
            /**
             * 此字段返回透传参数
             * @example `{
                "MATCHED_INTENT_SOURCE": "",
                "INTENT_ID": 724414,
                "IntentName": "查天气意图",
                "INTENT_DETAIL": "[我想|我要]查天气",
                "LGF_EXPRESSION": "[我想|我要]查天气",
                "IS_SESSION_FINISHED": false,
                "DsScore": 100.0,
                "DIALOG_ID": "299034",
                "FINISH_LABEL": false,
                "MODULE_START": false,
                "INTENT_NAME": "查天气意图",
                "INTENT_SOURCE": "Lgf",
                "DIALOG_NAME": "示例_查天气"
            }`
             */
            Ext: any;
            /**
             * 自定义闲聊主题标题
             * @example `问候`
             */
            UserDefinedChatTitle: string;
            /**
             * 文本消息的内容
             * @example `请问您要查哪里的天气？`
             */
            Content: string;
            /**
             * 当AnswerSource为BotFramework时，此字段返回节点ID
             * @example `1410-c7a72a78.__city`
             */
            NodeId: string;
            /**
             * 分数
             * @example `100.0`
             */
            Score: number;
            /**
             * 纯文本或富文本答案的标识
             * @example `PLAIN_TEXT`
             */
            ContentType: string;
            /**
             * 指令参数，如转人工指令的转人工技能组
             * @example `{
                "sysToAgent": "{\"skillGroup\":\"12\"}"
            }`
             */
            Commands: any;
            /**
             * 当AnswerSource为BotFramework，ResponseType为SSML时，表示命中对话工厂交互式填槽；否则字段不存在
             * @example `SSML`
             */
            ResponseType: string;
        };
        /**
         * 当AnswerType为Recommend时，此字段包含机器人返回的Recommend的列表
         */
        Recommends: {
            /**
             * 澄清的知识ID
             * @example `4548`
             */
            KnowledgeId: string;
            /**
             * 澄清内容，可能是
             * 图谱问答的实体、
             * 知识问答的知识标题、
             * 表格问答的列值
             * @example `测试纯文本`
             */
            Title: string;
            /**
             * 澄清来源的标识
             * @example `KNOWLEDGE`
             */
            AnswerSource: string;
            /**
             * 推荐内容的分数，当AnswerSource为KNOWLEDGE时，此字段有值
             * @example `0.46`
             */
            Score: number;
        }[];
        /**
         * 本条消息的类型
         * @example `Text`
         */
        AnswerType: string;
        /**
         * 当AnswerType为Recommend时，此字段表示推荐的答案来源
         * @example `KNOWLEDGE`
         */
        AnswerSource: string;
        /**
         * 语音场景，澄清内容
         * @example `请问你说的是公积金查询，还是公积金提取`
         */
        VoiceTitle: string;
        /**
         * 在线场景，反问标题
         * @example `请问您想咨询的是哪个投保年龄区间呢？`
         */
        Title: string;
    }[];
    /**
     * 请求ID
     * @example `A2315C4B-A872-5DEE-9DAD-D73B194A4AEC`
     */
    RequestId: string;
    /**
     * 本次会话的ID
     * @example `a6f216a0685c4c8baa0e8beb6d5ec6db`
     */
    SessionId: string;
    /**
     * 本条会话应答消息的ID
     * @example `A2315C4B-A872-5DEE-9DAD-D73B194A4AEC
    `
     */
    MessageId: string;
}
