interface DescribeGrantRulesRequest {
    /**
    * 云企业网实例所在的地域ID。
    * @example `cn-shanghai`
    */ "RegionId": string;
    "OwnerId"?: number;
    /**
    * 绑定的云连接网ID
    * @example `ccn-n2935s1mnwv8i*****`
    */ "AssociatedCcnId"?: string;
    /**
    * 每页行数，默认值为**10**，最大值为**50**.
    * @example `10`
    */ "PageSize"?: number;
    /**
    * 请求页码，默认值是**1**。
    * @example `1`
    */ "PageNumber"?: number;
}
export { DescribeGrantRulesRequest };