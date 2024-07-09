export interface CreateSchemeConfigRequest {
    /**
     * 方案名称，由中、英文字母构成，长度限制为10个字符。
     * @example `APP测试方案`
     */
    "SchemeName": string;
    /**
     * 方案应用平台。
     * @example `Android`
     */
    "Platform": string;
    /**
     * 应用方案的App名称，由中、英文字母构成，长度限制20个字符。
     * @example `阿里云通信`
     */
    "AppName"?: string;
    /**
     * 包名，Platform为Android时必选。由数字、字母、短划线（-）、下划线或点组成，长度限制为1~128个字符。
     * @example `com.aliyun.android`
     */
    "AndroidPackageName"?: string;
    /**
     * 包签名，Platform为Android时必选。由数字和字母组成，长度为32个字符。
     * @example `dfsfaawklll1****olkweklk***`
     */
    "AndroidPackageSign"?: string;
    /**
     * BundleID，osType为iOS时必选。由数字、字母、短划线（-）、下划线或点组成，长度限制为1~128个字符。
     * @example `com.aliyun.ios`
     */
    "IosBundleId"?: string;
    /**
     * 保留字段，暂不支持H5方案。
     * @example `-`
     */
    "H5Url"?: string;
    /**
     * 保留字段，暂不支持H5方案。
     * @example `-`
     */
    "H5Origin"?: string;
}
