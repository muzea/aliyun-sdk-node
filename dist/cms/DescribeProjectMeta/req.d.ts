export interface DescribeProjectMetaRequest {
    /**
     * 标签。根据标签过滤，标签为每个报警增加特殊标记。
     * 目前仅支持按照产品过滤，即`name`为`product`的过滤方式，例如：{"name":"product","value":"ECS"}。
     * >对于阿里云中云监控控制台的特殊标签，不建议您使用。
     * @example `[{"name":"product","value":"ECS"}]`
     */
    "Labels"?: string;
    /**
     * 页码。
     * 取值范围：1~100。
     * 默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页大小。
     * 取值范围：1~10000。
     * 默认值：30。
     * >目前阿里云未限制该参数，如果您需要获取所有结果，则将分页大小设置为较大的值即可。
     * @example `30`
     */
    "PageSize"?: number;
}
