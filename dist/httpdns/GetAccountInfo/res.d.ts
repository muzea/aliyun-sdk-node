export interface GetAccountInfoResponse {
    /**
     * 请求ID。
     * @example `50F9C40E-188D-4208-BE2C-74271337****`
     */
    RequestId: string;
    /**
     * 当前账户信息。
     */
    AccountInfo: {
        /**
         * 签名密钥。
         * @example `50F9C40E****`
         */
        SignSecret: string;
        /**
         * 鉴权接口请求数。
         * @example `611523`
         */
        SignedCount: number;
        /**
         * 资源包数（历史遗留字段，当前恒为0）
         * @example `0`
         */
        PackageCount: number;
        /**
         * 本月HTTP类型解析总量。
         * @example `9927326`
         */
        MonthResolveCount: number;
        /**
         * 账户ID。
         * @example `1337****`
         */
        AccountId: string;
        /**
         * 非鉴权接口是否开启。
         * @example `true`
         */
        UnsignedEnabled: boolean;
        /**
         * HTTPDNS账号状态编码，1-账号正常，2-账号欠费，3-账号停服
         * @example `1`
         */
        UserStatus: number;
        /**
         * 非鉴权接口请求数。
         * @example `1523`
         */
        UnsignedCount: number;
        /**
         * 本月HTTPS类型解析总量。
         * @example `3`
         */
        MonthHttpsResolveCount: number;
        /**
         * 每月免费解析量。
         * 即您每个自然月可以免费调用HTTPDNS服务进行域名解析的次数。
         * @example `1500000`
         */
        MonthFreeCount: number;
    };
}
