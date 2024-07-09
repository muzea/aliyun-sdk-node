export interface Id2MetaVerifyIntlRequest {
    /**
     * 接入的产品方案，固定值：ID_2META
     * @example `ID_2META`
     */
    "ProductCode"?: string;
    /**
     * 参数类型：
     * - normal：原始值（明文）
     * - 说明：由于权威数据源限制，身份二要素核验不支持Md5加密方式。
     * @example `normal`
     */
    "ParamType"?: string;
    /**
     * 身份证号(输入明文)
     * @example `429001********8211
    `
     */
    "IdentifyNum"?: string;
    /**
     * 姓名(输入明文)
     * @example `张*`
     */
    "UserName"?: string;
}
