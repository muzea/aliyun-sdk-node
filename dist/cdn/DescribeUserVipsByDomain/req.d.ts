interface DescribeUserVipsByDomainRequest {
    "RegionId"?: string;
    /**
    * 域名，只支持单个域名。
    * @example `example.com`
    */ "DomainName": string;
    "OwnerId"?: number;
    /**
    * 取值：
    * - **on**：健康vip。
    * - **off**：全部vip。
    * @example `on`
    */ "Available"?: string;
}
export { DescribeUserVipsByDomainRequest };