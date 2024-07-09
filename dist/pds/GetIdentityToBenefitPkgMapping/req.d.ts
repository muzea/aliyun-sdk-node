export interface GetIdentityToBenefitPkgMappingRequest {
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
    };
}
