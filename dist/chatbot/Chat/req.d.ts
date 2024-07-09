export interface ChatRequest {
    /**
     * 机器人唯一标识（机器人ID）。登录云小蜜控制台，机器人详情->会话接口，查看机器人实例信息，可获得该实例ID。
     * @example `chatbot-cn-mp90s2lrk00050`
     */
    "InstanceId"?: string;
    /**
     * 机器人访问者的输入
     * @example `今天天气怎么样？`
     */
    "Utterance"?: string;
    /**
     * 会话ID，用于标识一个访问者的会话和保持上下文信息。对于一个新的访问者，首次调用Chat接口时无需传递此字段，机器人会开启一个会话，并在Chat接口的响应中返回该会话的SessionId。对于该访问者的后续轮次的会话，调用Chat接口时传递当前会话的SessionId，机器人即可基于SessionId继续该轮次会话。长度限制是64个字符
     * @example `9c6ebdc6e66f46ecadab3434314f6959`
     */
    "SessionId"?: string;
    /**
     * 知识库中知识标题的ID。若指定此ID，那么机器人会直接返回指定知识标题的答案
     * @example `30002406051`
     */
    "KnowledgeId"?: string;
    /**
     * 访问者ID。用于识别当前会话中的用户
     * @example `custumer_123456`
     */
    "SenderId"?: string;
    /**
     * 当前会话中访问的昵称
     * @example `用户123456`
     */
    "SenderNick"?: string;
    /**
     * 对话流中意图名称。 若指定此名称，机器人会直接进入此意图做问答
     * @example `查天气意图`
     */
    "IntentName"?: string;
    /**
     * 视角编码数组，用于调用同一知识标题下不同视角的答案。如：Perspective=["FZJBY3raWr"]。使用SDK时以SDK中定义的参数为准
     */
    "Perspective"?: string[];
    /**
     * 是一个JSON格式的用户自定义参数集，可以传入用户自定义的参数到各对话引擎
     * @example `{"phone":123456789}`
     */
    "VendorParam"?: string;
    /**
     * 测试、正式环境标识，默认为正式环境。
     * - true：测试环境，仅限测试使用，生产使用有不稳定、QPS限制等风险。
     * - false：正式环境
     * @example `true`
     */
    "SandBox"?: boolean;
    /**
     * 业务空间key，不设置则访问默认业务空间，key值在主账号业务管理页面获取
     * @example `ac627989eb4f8a98ed05fd098bbae5_p_beebot_public`
     */
    "AgentKey"?: string;
}
