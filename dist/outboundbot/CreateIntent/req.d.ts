export interface CreateIntentRequest {
    /**
     * 实例id
     * @example `361c8a53-0e29-42f3-8aa7-c7752d010399`
     */
    "InstanceId": string;
    /**
     * 话术id
     * @example `b06fad9a-cc74-4ab6-b3a5-8d062adebf2c`
     */
    "ScriptId": string;
    /**
     * 意图名字
     * @example `是本人`
     */
    "IntentName": string;
    /**
     * 意图描述
     * @example `确定是本人的意图`
     */
    "IntentDescription"?: string;
    /**
     * 用户触发意图的回答文本列表
     * @example `["是","是的","是啊","嗯嗯","是我","是我，有事吗","对，是","对的","对是我",""]`
     */
    "Utterances": string;
    /**
     * 意图的关键字，在List接口可用于过滤查找的意图
     * @example `是`
     */
    "Keywords"?: string;
}
