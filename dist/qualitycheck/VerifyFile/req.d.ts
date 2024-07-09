export interface VerifyFileRequest {
    /**
     * 完整JSON字符串信息，具体内容参见以下详细信息。
     * @example `"{"taskId":"EA701F66-8CA2-4A79-8E3C-A6F2****","fileName":"人工校验测试-订购茶叶.wav"}"`
     */
    "JsonStr": string;
    /**
     * 业务空间Id
     */
    "BaseMeAgentId"?: number;
}
