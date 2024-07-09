export interface RenewInstanceRequest {
    /**
     * 实例id。
     * @example `hgprecn-cn-i7m2v08uu00a`
     */
    "instanceId": string;
    /**
     * 请求体。
     */
    "body"?: {
        /**
         * 续费周期。单位：月。
         * @example `2`
         */
        duration: number;
        /**
         * 是否开启按月自动续费，默认不开启。取值：
         * - true：开启。
         * - false：不开启
         * > 已开启自动续费的实例，再次开启会报错。
         * @example `true`
         */
        autoRenew: boolean;
    };
}
