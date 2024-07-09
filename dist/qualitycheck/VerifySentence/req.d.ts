export interface VerifySentenceRequest {
    /**
     * 完整JSON字符串信息，具体内容参见以下详细信息。
     * @example `"{"taskId":"EA701F66-8CA2-4A79-8E3C-A6F2F****","fileName":"人工校验测试-订购茶叶.wav","dialogueId":1,"roleCorrect":false,"sourceRole":0,"textCorrect":false,"sourceText":"我要订购大量的信阳毛尖。","oldIncorrectWords":3,"targetText":"我要订购大大的南阳毛巾。","targetRole":1}"`
     */
    "JsonStr": string;
    /**
     * 业务空间Id
     */
    "BaseMeAgentId"?: number;
}
