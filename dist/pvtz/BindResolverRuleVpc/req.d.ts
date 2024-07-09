export interface BindResolverRuleVpcRequest {
    /**
     * 语言。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 转发规则ID。
     * @example `hra0**`
     */
    "RuleId": string;
    /**
     * VPC列表。
     */
    "Vpc"?: {
        /**
         * VPC ID。
         * @example `vpc-kqk1i2o2ajsksl-vpc-test`
         */
        VpcId: string;
        /**
         * 地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * VPC类型。
         * - STANDARD：标准VPC。
         * - EDS：无影工作区VPC。
         * @example `STANDARD`
         */
        VpcType: string;
    }[];
}
