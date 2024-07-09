export interface CreateOAuthTokenRequest {
    /**
     * 请求结构。
     */
    "body"?: {
        /**
         * clientId
         * @example `dc7e0b3c00a3e58f46`
         */
        clientId: string;
        /**
         * client_secret
         * @example `a433294edea39cae7e7870`
         */
        clientSecret: string;
        /**
         * 授权类型：code，token
         * @example `code`
         */
        grantType: string;
        /**
         * 授权范围
         * 例如：
         * - 用户相关： read:user
         * - 代码库相关：read:repo，write:repo
         * - 代码库合并请求相关：repo:cr，read:repo:cr，write:repo:cr
         * - 代码库分支相关：repo:branch，read:repo:branch，write:repo:branch
         * ><notice>更多的授权可通过地址
         * https://account-devops.aliyun.com/settings/personalAccessToken 查看></notice>
         * @example `read:repo`
         */
        scope: string;
        /**
         * 授权码，当前grantType=code时必传
         * @example `86df532f74454e189740d100ac97f4b9`
         */
        code: string;
        /**
         * 用户的登录账号，code = token时必传
         * @example `username`
         */
        login: string;
    };
}
