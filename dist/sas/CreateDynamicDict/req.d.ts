export interface CreateDynamicDictRequest {
    /**
     * 访问源的ip地址。
     * @example `123.103.9.***`
     */
    "SourceIp"?: string;
    /**
     * 是否覆盖。取值范围：
     * - true：覆盖。
     * - false：不覆盖。
     * @example `false`
     */
    "Override"?: boolean;
}
