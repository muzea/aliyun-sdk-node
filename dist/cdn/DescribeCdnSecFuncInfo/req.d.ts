export interface DescribeCdnSecFuncInfoRequest {
    /**
     * 应用安全功能类型。
     * - CipherSuiteGroupCustomize: 自定义加密算法套件
     * - CipherSuiteGroupStrict: 默认加密算法套件
     * @example `CipherSuiteGroupCustomize`
     */
    "SecFuncType": string;
    /**
     * 语言类型。
     * - en: 英文
     * - zh: 中文
     * @example `zh`
     */
    "Lang": string;
}
