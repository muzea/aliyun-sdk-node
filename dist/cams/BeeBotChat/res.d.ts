export interface BeeBotChatResponse {
    /**
     * 请求ID。
     * @example `90E63D28-E31D-1EB2-8939-A94866411B2O`
     */
    RequestId: string;
    /**
     * 返回结果，OK 为正常。
     * @example `OK`
     */
    Code: string;
    /**
     * 提示信息，当返回异常时有值。
     * @example `none`
     */
    Message: string;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 本条会话应答消息的ID。
         * @example `ab6be8af-cee4-40c3-9919-2ac7461d7d98`
         */
        MessageId: string;
        /**
         * 本次会话的ID。
         * @example `1234`
         */
        SessionId: string;
        /**
         * 消息的列表
         */
        Messages: {
            /**
             * 当AnswerType为Knowledge时，此字段包含机器人返回的Knowledge对象。
             */
            Knowledge: {
                /**
                 * 命中语句。
                 * @example `公积金`
                 */
                HitStatement: string;
                /**
                 * 命中问题的简介。
                 * @example `公积金提取`
                 */
                Summary: string;
                /**
                 * 关联知识列表。
                 */
                RelatedKnowledges: {
                    /**
                     * 知识关联知识的ID。
                     * @example `735899`
                     */
                    KnowledgeId: string;
                    /**
                     * 知识的关联知识的标题。
                     * @example `公积金提取`
                     */
                    Title: string;
                }[];
                /**
                 * 知识类目。
                 * @example `公积金`
                 */
                Category: string;
                /**
                 * 命中问题的标题。
                 * @example `公积金提取`
                 */
                Title: string;
                /**
                 * 命中问题的内容。
                 * @example `公积金提取，请在首页搜索公积金提取，提交办事的表单`
                 */
                Content: string;
                /**
                 * 区分答案类型。
                 * @example `KnowledgeBase`
                 */
                AnswerSource: string;
                /**
                 * 命中问题在知识库中的ID。
                 * @example `735898`
                 */
                Id: string;
                /**
                 * 纯文本/富文本答案的标示。
                 * @example `PLAIN_TEXT`
                 */
                ContentType: string;
            };
            /**
             * 当AnswerType为Text时，此字段包含机器人返回的Text对象。
             */
            Text: {
                /**
                 * 命中语句。
                 * @example `查天气`
                 */
                HitStatement: string;
                /**
                 * 当AnswerSource为BotFramework时，此字段返回对话单元名称。
                 * @example `示例_查天气`
                 */
                DialogName: string;
                /**
                 * 区分答案类型。
                 * @example `BotFramework`
                 */
                AnswerSource: string;
                /**
                 * 槽位信息列表。
                 */
                Slots: {
                    /**
                     * 具体值。
                     * @example `北京`
                     */
                    Value: string;
                    /**
                     * 原始值。
                     * @example `北京`
                     */
                    Origin: string;
                    /**
                     * 名称。
                     * @example `查天气意图.city`
                     */
                    Name: string;
                    /**
                     * 是否命中。
                     * @example `false`
                     */
                    Hit: boolean;
                }[];
                /**
                 * 当AnswerSource为BotFramework时，此字段返回节点名称。
                 * @example `示例_查天气.查天气填槽.__city`
                 */
                NodeName: string;
                /**
                 * 当AnswerSource为BotFramework时，此字段返回意图名称。
                 * @example `查天气意图`
                 */
                IntentName: string;
                /**
                 * 元数据。
                 * @example `[[{\"columnName\":\"姓名\",\"stringValue\":\"王珊珊\"}]]`
                 */
                MetaData: string;
                /**
                 * 当AnswerSource为BotFramework时，此字段返回透传参数。
                 */
                ExternalFlags: any;
                /**
                 * 此字段返回透传参数。
                 */
                Ext: any;
                /**
                 * 自定义闲聊主题title
                 * @example `问候`
                 */
                UserDefinedChatTitle: string;
                /**
                 * 文本消息的内容。
                 * @example `请问您要查哪里的天气？`
                 */
                Content: string;
                /**
                 * 当AnswerSource为BotFramework时，此字段返回节点Id。
                 * @example `1410-c7a72a78.__city`
                 */
                NodeId: string;
                /**
                 * 纯文本/富文本答案的标示。
                 * @example `PLAIN_TEXT`
                 */
                ContentType: string;
            };
            /**
             * 当AnswerType为Recommend时，此字段包含机器人返回的Recommend的列表。
             */
            Recommends: {
                /**
                 * 澄清的知识id。
                 * @example `4548`
                 */
                KnowledgeId: string;
                /**
                 * 澄清内容，可能是图谱问答的实体、知识问答的知识标题、
                 * 表格问答的列值。
                 * @example `测试纯文本`
                 */
                Title: string;
                /**
                 * 澄清来源的标识。
                 * @example `KNOWLEDGE`
                 */
                AnswerSource: string;
            }[];
            /**
             * 本条消息的类型。
             * @example `Text`
             */
            AnswerType: string;
            /**
             * 当AnswerType为Recommend时，此字段表示推荐的答案来源。
             * @example `KNOWLEDGE`
             */
            AnswerSource: string;
        }[];
    };
    /**
     * 访问被拒绝详细信息。
     * @example `无`
     */
    AccessDeniedDetail: string;
}
