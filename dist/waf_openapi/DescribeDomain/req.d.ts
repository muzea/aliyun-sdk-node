export interface DescribeDomainRequest {
    /**
     * WAF实例的ID。
     * > 您可以调用[DescribeInstanceInfo](~~140857~~)查询当前WAF实例的ID。
     * @example `waf-cn-7pp26f1****`
     */
    "InstanceId": string;
    /**
     * 要查询的域名名称。
     * > 您可以调用[DescribeDomainNames](~~86373~~)查询所有已添加到WAF防护的域名。
     * @example `www.example.com`
     */
    "Domain": string;
}
