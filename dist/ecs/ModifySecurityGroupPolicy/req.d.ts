interface ModifySecurityGroupPolicyRequest {
    /**
    * 安全组所属地域 ID。您可以调用 [DescribeRegions](~~25609~~) 查看最新的阿里云地域列表。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 安全组的 ID。
    * @example `sg-securitygroupid1`
    */ "SecurityGroupId": string;
    /**
    * 当前安全组内网连通策略。取值范围：
    * - Accept：安全组内的实例之间的网络是互通的。
    * - Drop：安全组内的实例之间的网络是隔离的。
    * 以上取值，不区分大小写。
    * @example `Accept`
    */ "InnerAccessPolicy": string;
    "SourceRegionId"?: string;
    /**
    * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多详情，请参见[如何保证幂等性](~~25693~~)。
    * @example `123e4567-e89b-12d3-a456-426655440000`
    */ "ClientToken"?: string;
    /**
    * RAM用户的虚拟账号ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
}
export { ModifySecurityGroupPolicyRequest };