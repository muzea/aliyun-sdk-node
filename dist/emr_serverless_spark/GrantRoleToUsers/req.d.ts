export interface GrantRoleToUsersRequest {
    /**
     * 请求体参数。
     */
    "body"?: {
        /**
         * 角色Arn。
         * @example `acs:emr::w-975bcfda9625****:role/Owner`
         */
        roleArn: string;
        userArns: string[];
    };
    /**
     * 区域ID。
     * @example `cn-hangzhou`
     */
    "regionId"?: string;
}
