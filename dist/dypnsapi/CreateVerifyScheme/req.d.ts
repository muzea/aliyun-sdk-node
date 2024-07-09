export interface CreateVerifySchemeRequest {
    /**
     * 方案名称。
     * @example `一键登录认证方案`
     */
    "SchemeName": string;
    /**
     * App名称。
     * @example `阿里云通信`
     */
    "AppName": string;
    /**
     * 终端操作系统类型，取值：iOS、Android或Web。
     * @example `iOS`
     */
    "OsType": string;
    /**
     * 包名，osType为Android时必选。由数字、字母、短划线（-）、下划线或点组成，长度限制为1~128个字符。
     * @example `com.aliyun`
     */
    "PackName"?: string;
    /**
     * 包签名，osType为Android时必选。由数字和字母组成，长度为32个字符。
     * @example `123aliyun`
     */
    "PackSign"?: string;
    /**
     * BundleID，osType为iOS时必选。由数字、字母、短划线（-）、下划线或点组成，长度限制为1~128个字符。
     * @example `example.aliyundoc.com`
     */
    "BundleId"?: string;
    /**
     * H5方案页面源地址（建议填写域名级别）。
     * @example `https://h5.minexiot.com`
     */
    "Origin"?: string;
    /**
     * H5方案使用的页面地址。
     * @example `https://h5.minexiot.com/`
     */
    "Url"?: string;
    /**
     * IP白名单，默认可不填。
     * @example `139.9.xx.xx
    122.112.xx.xx
    139.9.xx.xx/24`
     */
    "IpWhiteList"?: string;
    /**
     * 中国移动通道Code，默认可不填。
     * @example `1`
     */
    "CmApiCode"?: number;
    /**
     * 中国联通通道Code，默认可不填。
     * @example `2`
     */
    "CuApiCode"?: number;
    /**
     * 中国电信通道Code，默认可不填。
     * @example `3`
     */
    "CtApiCode"?: number;
    /**
     * 方案类型，默认可不填。
     * @example `0`
     */
    "SceneType"?: string;
    /**
     * 密钥获取接收邮箱地址，默认可不填。
     * @example `username@aliyundoc.com`
     */
    "Email"?: string;
    /**
     * 认证类型，默认不填，只有支持号码认证时可多选，以英文逗号间隔。
     * - **1**：号码认证
     * - **2**：短信认证
     * @example `1,2`
     */
    "AuthType"?: string;
    /**
     * 绑定的短信签名，只有AuthType包含2（短信认证）时才有效，且签名必须是号码认证产品下创建的已经审核通过的。
     * @example `阿里云短信测试专用`
     */
    "SmsSignName"?: string;
}
