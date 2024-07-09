export interface GetRandomPasswordRequest {
    /**
     * 生成口令的字节数。
     * 取值：8~128。
     * 默认值：32。
     * @example `32`
     */
    "PasswordLength"?: string;
    /**
     * 生成口令时排除的字符。
     * 有效值：
     * `0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!\"#$%&'()*+,-./:;<=>?@[\\]^_{|}~`。
     * 默认值：空。
     * @example `ABCabc`
     */
    "ExcludeCharacters"?: string;
    /**
     * 生成口令时是否排除小写字母。
     * 取值：
     * - true
     * - false（默认值）
     * @example `false`
     */
    "ExcludeLowercase"?: string;
    /**
     * 生成口令时是否排除大写字母。
     * 取值：
     * - true
     * - false（默认值）
     * @example `false`
     */
    "ExcludeUppercase"?: string;
    /**
     * 生成口令时是否排除数字。
     * 取值：
     * - true
     * - false（默认值）
     * @example `false`
     */
    "ExcludeNumbers"?: string;
    /**
     * 生成口令时是否排除特殊字符。
     * 取值：
     * - true
     * - false（默认值）
     * @example `false`
     */
    "ExcludePunctuation"?: string;
    /**
     * 生成口令时是否上述每种类型都包含。
     * 取值：
     * - true
     * - false（默认值）
     * @example `true`
     */
    "RequireEachIncludedType"?: string;
}
