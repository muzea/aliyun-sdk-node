export interface ScanSensitiveDataResponse {
    /**
     * 识别出的敏感数据信息。
     * sensDatas表示识别出的敏感数据规则列表，包括：
     * - hitCount：命中率，该数据命中规则的次数。
     * - ruleName：规则名称。
     * @example `{     "sensDatas": [       {         "hitCount": 1,         "ruleName": "手机号"       }     ]   }`
     */
    Sensitives: any;
    /**
     * 请求ID，一次请求的唯一标识。
     * @example `0000-ABCD-EFG****`
     */
    RequestId: string;
}
