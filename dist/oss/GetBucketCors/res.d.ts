export interface GetBucketCorsResponse {
    /**
     * 保存CORS规则配置的容器。
     */
    CORSConfiguration: {
        /**
         * 保存CORS规则的列表。
         */
        CORSRule: any[];
        /**
         * 是否返回Vary: Origin头。
         * true：不管发送的是否是跨域请求或跨域请求是否成功，均会返回Vary: Origin头。
         * false：任何情况下均不返回Vary: Origin头。
         * @example `true`
         */
        ResponseVary: boolean;
    };
}
