export interface DescribeDomainTopAttackListResponse {
    /**
     * 本次请求的ID。
     * @example `C33EB3D5-AF96-43CA-9C7E-37A81BC06A1E`
     */
    RequestId: string;
    /**
     * 网站业务的QPS峰值数据。
     */
    AttackList: {
        /**
         * 攻击QPS。单位：qps。
         * @example `0`
         */
        Attack: number;
        /**
         * 网站域名。
         * @example `www.aliyun.com`
         */
        Domain: string;
        /**
         * 全部QPS，包含正常业务请求和攻击。单位：qps。
         * @example `294`
         */
        Count: number;
    }[];
}
