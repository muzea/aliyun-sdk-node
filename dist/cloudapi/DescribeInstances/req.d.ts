export interface DescribeInstancesRequest {
    /**
     * 实例id
     * 不填写默认查询所有实例
     * @example `api-shared-vpc-001`
     */
    "InstanceId"?: string;
    /**
     * 语言类型。系统权限策略的描述将以此语言返回。
     * - en：英文。
     * - zh：中文。
     * - ja：日文。
     * @example `zh`
     */
    "Language"?: string;
    /**
     * 是否开启了Tag授权
     * @example `false`
     */
    "EnableTagAuthorization"?: boolean;
    /**
     * 实例所绑定的标签
     */
    "Tag"?: {
        /**
         * 标签键。
         * @example `key1`
         */
        Key: string;
        /**
         * 标签的值。
         * @example `value`
         */
        Value: string;
    }[];
}
