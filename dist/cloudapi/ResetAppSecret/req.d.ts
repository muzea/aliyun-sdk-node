export interface ResetAppSecretRequest {
    /**
     * App的Key，用于调用API时使用
     * @example `60030986`
     */
    "AppKey": string;
    /**
     * 设置的新的AppKey，需要全局唯一
     * @example `testAppKey`
     */
    "NewAppKey"?: string;
    /**
     * 新的应用密钥。为提高兼容性，建议您尽量使用其他参数。
     * 该参数不填，默认系统会自动生成一个新的AppSecret值
     * @example `test***`
     */
    "NewAppSecret"?: string;
}
