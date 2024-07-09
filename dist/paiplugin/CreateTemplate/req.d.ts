export interface CreateTemplateRequest {
    /**
     * 请求参数的主体信息。
     */
    "body"?: {
        /**
         * 模板内容，请注意控制总字数在70个字以内，超出部分按长短信收费，按67个字为单位记一条短信，必须在结尾添加”回T退订“。
         * @example `模板内容`
         */
        Content: string;
        /**
         * 申请说明。
         * @example `申请说明`
         */
        Description: string;
        /**
         * 模板名称。
         * @example `模板召回-20220101`
         */
        Name: string;
        /**
         * 签名名称。
         * @example `PAI`
         */
        Signature: string;
        /**
         * 签名ID，可通过ListSignatures获取审核状态为已通过的签名列表，获取签名ID。
         * @example `5480e3e7-f578-42d2-8ce8-217dec75f2e6`
         */
        SignatureId: string;
        /**
         * 模板类型。
         * - 0：验证码。
         * - 1：短信通知。
         * - 2：推广短信。
         * @example `2`
         */
        Type: number;
    };
}
