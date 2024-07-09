export interface DescribeDcdnUserConfigsRequest {
    /**
     * 需要查询的配置，支持查询的配置如下：
     * - domain\_business\_control：用户配置。
     * - bot_basic：机器流量管理基础版 （合法爬虫，威胁情报）。
     * - bot_Advance：机器流量管理高级版（合法爬虫，威胁情报，AI智能防护）。
     * @example `domain_business_control`
     */
    "FunctionName": string;
}
