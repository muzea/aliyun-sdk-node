export interface CrossAccountVerifyTokenResponse {
    /**
     * 返回结果对象
     */
    Result: {
        /**
         * 用户展示名称
         * @example `marketplace_wangxiao_test`
         */
        Name: string;
        /**
         * 用户阿里云uid
         * @example `1744526877246715`
         */
        Uid: string;
        /**
         * 授权时间
         * @example `1676974108866`
         */
        AuthTime: number;
        /**
         * 授权角色
         */
        AuthRoles: string[];
    };
    /**
     * 接口返回成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 状态码，200表示成功
     * @example `200`
     */
    Code: string;
    /**
     * 错误信息
     * @example `successful`
     */
    Message: string;
    /**
     * RequestId
     * @example `C19D103F-EA2D-50A5-8441-0267CE9FBA56`
     */
    RequestId: string;
}
