export interface QueryCallDetailByCallIdRequest {
    /**
     * 通话的唯一识别ID。调用外呼接口发起通话后，返回参数中会携带CallId。
     * 示例：如果您需要查询语音通知的通话记录，请调用[SingleCallByVoice](https://help.aliyun.com/zh/vms/developer-reference/api-dyvmsapi-2017-05-25-singlecallbyvoice?spm=a2c4g.11186623.0.0.12536717GgylqF)发送语音通知后获取CallId。
     *  - 获取的CallId与**QueryDate**必须是同一天。示例：CallId的时间是2022.11.21，**QueryDate**必须也是2022.11.21内的时间。
     *  - 获取的CallId与**ProdId**参数值必须匹配。示例：CallId是在发送语音通知后获取的，那**ProdId**参数需要填写语音通知即**11000000300006**。
     * @example `116014888060^10281631****`
     */
    "CallId": string;
    /**
     * 产品ID。取值：
     * - **11000000300006**：语音通知。
     * - **11010000138001**：语音验证码。
     * - **11000000300005**：语音IVR，向指定号码发起交互式语音通话。
     * - **11000000300009**：语音SIP。
     * - **11030000180001**：智能外呼。
     * > 获取的CallId与**ProdId**参数值必须匹配。
     * @example `11000000300006`
     */
    "ProdId": number;
    /**
     * 通话发生的时间。格式为Unix时间戳，单位：毫秒。
     * 查询指定时间点之后24小时内的通话记录。
     * 例如：您输入2022.11.21 20:00:01（时间戳：1669032001000），系统会查询2022.11.21 20:00:01~2022.11.22 20:00:01时间段内指定callid的呼叫记录。
     * > 获取的CallId与**QueryDate**必须是同一天。
     * @example `1669032001000`
     */
    "QueryDate": number;
}
