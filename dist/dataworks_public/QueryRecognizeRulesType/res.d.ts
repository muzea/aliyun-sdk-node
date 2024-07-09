export interface QueryRecognizeRulesTypeResponse {
    /**
     * 调用是否成功。
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误码。
     * @example `9990030003`
     */
    ErrorCode: string;
    /**
     * 错误信息。
     * @example `缺少参数`
     */
    ErrorMessage: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 返回的敏感字段内置识别规则类型，JSON格式。
     * @example `{   "HttpStatusCode": 200,   "Data": [     {       "Regular Expression": "1"     },     {       "Recognize Rule": "2"     },     {       "Sample Library": "3"     },     {       "Model": "4"     }   ],   "Success": true }`
     */
    Data: any;
    /**
     * 请求ID，一次请求的唯一标识。
     * @example `10000001`
     */
    RequestId: string;
}
