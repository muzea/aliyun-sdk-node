export interface CreateRuleRequest {
    /**
     * 规则名称
     * @example `default`
     */
    "Name": string;
    /**
     * 检测规则内容，格式请参考示例值
     * @example `[{"sequence":1,"actions":[{"name":"id_card_recognize"}]},{"sequence":2,"actions":[{"name":"document_title_recognize"},{"name":"flip_action_recognize"},{"name":"sign_action_recognize"}]},{"sequence":3,"actions":[{"name":"sign_recognize"}]},{"sequence":0,"actions":[{"name":"face_track"},{"name":"speech_to_text"}]}]`
     */
    "Content": string;
    /**
     * 幂等校验参数
     * @example `无`
     */
    "ClientToken"?: string;
}
