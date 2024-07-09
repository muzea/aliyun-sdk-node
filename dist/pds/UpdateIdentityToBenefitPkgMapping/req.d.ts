export interface UpdateIdentityToBenefitPkgMappingRequest {
    "domain_id": string;
    /**
     * 请求体参数
     */
    "body"?: {
        /**
         * 实体的类型
         * 管理用户权益，传user
         * @example `user`
         */
        identity_type: string;
        /**
         * 实体的唯一标识
         * 管理用户权益时，传user_id
         * @example `user123`
         */
        identity_id: string;
        /**
         * 权益包的唯一标识
         * @example `40cb7794c9294`
         */
        benefit_pkg_id: string;
        /**
         * 权益包数量
         * 对资源类权益包生效，非必填参数，默认为1
         * @example `1`
         */
        amount: number;
        /**
         * 权益包超期时间的时间戳，格林威治时间1970年01月01日00时00分00秒起至现在的毫秒数
         * 默认永不过期
         * @example `1633167071000`
         */
        expire_time: number;
    };
}
