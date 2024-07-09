export interface DescribeOpenAccountResponse {
    /**
     * 返回内容。
     */
    OpenAccount: {
        /**
         * 状态。
         * **0**表示正常，**1**表示禁用。
         * @example `0`
         */
        Status: number;
        /**
         * 类型。
         * **1**表示三方关联账号。
         * @example `1`
         */
        Type: number;
        /**
         * 显示名
         * @example `displaynametest`
         */
        DisplayName: string;
        /**
         * 账号创建的AK
         * @example `createaccesskeytest`
         */
        CreateAccessKey: string;
        /**
         * 三方平台账号ID
         * @example `12345`
         */
        OpenId: string;
        /**
         * 手机号
         * @example `1390000****`
         */
        Mobile: string;
        /**
         * 区域
         * @example `cn`
         */
        Region: string;
        /**
         * 账号ID
         * @example `identityidtest`
         */
        IdentityId: string;
        /**
         * 登录名
         * @example `loginidtest`
         */
        LoginId: string;
        /**
         * 三方平台标识简称呼，如ALIOS。
         * @example `ALIOS`
         */
        Idp: string;
        /**
         * 租户ID
         * @example `aliyunidtest`
         */
        AliyunId: string;
    };
    /**
     * 请求ID。
     * @example `9c7a3b09-a69a-43f5-8bf2-84f7119810eb`
     */
    RequestId: string;
}
