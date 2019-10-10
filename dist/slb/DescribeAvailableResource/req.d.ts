interface DescribeAvailableResourceRequest {
    /**
    * 地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    "OwnerId"?: number;
    "access_key_id"?: string;
    /**
    * 网络类型。
    * 取值：**vpc|classic-internet|classic-intranet**。
    * @example `vpc`
    */ "AddressType"?: string;
    /**
    * IP地址类型。
    * 取值：**ipv4|ipv6**。
    * @example `ipv4`
    */ "AddressIPVersion"?: string;
}
export { DescribeAvailableResourceRequest };