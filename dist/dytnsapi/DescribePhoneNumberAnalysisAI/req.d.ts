export interface DescribePhoneNumberAnalysisAIRequest {
    /**
     * 待查询的号码。
     * @example `187****5620`
     */
    "InputNumber": string;
    /**
     * 号码分数阈值。取值范围：**0~100**。
     * > 是否接受指定的分数阈值由服务端决定。当不接受指定分数阈值时，此字段输入的数据无效。
     * @example `96`
     */
    "Rate"?: number;
    /**
     * 授权码。
     * > 在**号码分析服务**->[**标签广场**](https://dytns.console.aliyun.com/analysis/square)选择标签，提交使用申请，申请通过后，会获得该授权码。
     * @example `HwD***nG`
     */
    "AuthCode": string;
    /**
     * 模型参数配置（部分标签能力需要）
     * @example `{"trainingJobId": "17**********48"}`
     */
    "ModelConfig"?: string;
}
