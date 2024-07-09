export interface EditRoutineConfRequest {
    /**
     * 边缘函数名, 同一个账号下命名唯一。
     * @example `test-slc`
     */
    "Name": string;
    /**
     * 边缘函数描述。
     * @example `the description of this routine`
     */
    "Description"?: string;
    /**
     * Env环境配置。
     * @example `{"staging":{"SpecName":"50ms","AllowedHosts":["test-a.alicdn.com","test-b.alicdn.com"]},"production":{"SpecName":"50ms","AllowedHosts":["test-c.alicdn.com","test-d.alicdn.com"]},"presetCanaryZhejiang":{"SpecName":"100ms","AllowedHosts":["test-e.alicdn.com","test-f.alicdn.com"]},"presetCanaryBeijing":{"SpecName":"5ms","AllowedHosts":["test-g.alicdn.com","test-h.alicdn.com"]},"presetCanaryNotExist":{"SpecName":"5ms","CodeRev":"1622446907645949975","AllowedHosts":["error hosts"]}}`
     */
    "EnvConf"?: any;
}
