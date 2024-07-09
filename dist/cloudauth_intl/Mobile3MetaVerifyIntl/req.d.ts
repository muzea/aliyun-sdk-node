export interface Mobile3MetaVerifyIntlRequest {
    /**
     * 接入的产品方案，固定值：MOBILE_3META
     * @example `MOBILE_3META`
     */
    "ProductCode"?: string;
    /**
     * 参数类型：
     * - normal：不加密
     * - md5：md5加密
     * @example `normal`
     */
    "ParamType"?: string;
    /**
     * 身份证号
     * - 当paramType取值normal时，输入明文
     * - 当paramType取值md5时，输入32位小写md5字符串
     * @example `429001********8211
    `
     */
    "IdentifyNum"?: string;
    /**
     * 姓名
     * - 当paramType取值normal时，输入明文
     * - 当paramType取值md5时，输入32位小写md5字符串
     * @example `张*
    `
     */
    "UserName"?: string;
    /**
     * 手机号码。
     * - 当paramType取值normal时，输入明文
     * - 当paramType取值md5时，输入32位小写md5字符串
     * @example `186****1234`
     */
    "Mobile"?: string;
}
