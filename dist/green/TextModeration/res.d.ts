export interface TextModerationResponse {
    /**
     * 请求ID。
     * @example `AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****`
     */
    RequestId: string;
    /**
     * 错误码。
     * @example `200`
     */
    Code: number;
    /**
     * 请求消息的响应消息。
     * @example `OK`
     */
    Message: string;
    /**
     * 审核结果数据。
     */
    Data: {
        /**
         * 标签，多个用英文逗号分隔。包括：
         * ad：广告
         * profanity：辱骂
         * contraband：违禁品
         * sexual_content：色情
         * violence：暴恐
         * nonsense：灌水
         * spam：垃圾信息
         * negative_content：不良场景
         * cyberbullying：网络暴力
         * C_customized：用户库命中
         * @example `porn`
         */
        labels: string;
        /**
         * 原因定位的JSON字符串，包含以下字段：
         * riskTips：细分标签
         * riskWords：命中风险词
         * adNums：命中广告号
         * customizedWords：命中用户词
         * customizedLibs：命中用户词库名
         * @example `{\"riskTips\":\"色情_低俗词\",\"riskWords\":\"色情服务\"}`
         */
        reason: string;
        /**
         * 客户入参传入的accountId
         * @example `123456`
         */
        accountId: string;
        /**
         * 客户入参传入的deviceId
         * @example `xxxxxx`
         */
        deviceId: string;
    };
}
