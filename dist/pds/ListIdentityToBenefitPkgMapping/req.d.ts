export interface ListIdentityToBenefitPkgMappingRequest {
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
         * 是否返回已经超期的权益包，默认为false
         * @example `false`
         */
        include_expired: boolean;
    };
}
