interface CheckFabricOrganizationDomainRequest {
    /**
    * 地域。
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    /**
    * 域名。
    * @example `bank`
    */ "DomainCode"?: string;
    /**
    * 域名前缀。
    * 不需要包含`DescribeRootDomain`接口获取的根域名。
    * @example `bank`
    */ "Domain"?: string;
}
export { CheckFabricOrganizationDomainRequest };