interface CreateNetworkInterfaceRequest {
    /**
    * 实例所在地域的ID。您可以调用 [DescribeRegions](~~25609~~) 查看最新的阿里云地域列表。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 指定VPC的交换机ID。
    * @example `[vswitchid]`
    */ "VSwitchId": string;
    /**
    * 所属的安全组ID必须是同一个VPC下的安全组。
    * @example `sg-c0003exxxxx`
    */ "SecurityGroupId": string;
    "SourceRegionId"?: string;
    /**
    * RAM 用户的虚拟账号 ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
    "Tag"?: string[];
    /**
    * 资源组ID。
    * @example `rg-resourcegroupid1`
    */ "ResourceGroupId"?: string;
    /**
    * 弹性网卡的主私有IP地址。指定IP必须是在所属交换机的地址段内的空闲地址，不指定则默认随机分配该交换机中的空闲地址。
    * @example `172.17.**.***`
    */ "PrimaryIpAddress"?: string;
    /**
    * 弹性网卡名称。长度为2~128个英文或中文字符。必须以大小字母或中文开头，不能以 http:// 和 https:// 开头。可以包含数字、半角冒号（:）、下划线（_）或者连字符（-）。
    * 默认值：空。
    * @example `eni-eniname1`
    */ "NetworkInterfaceName"?: string;
    /**
    * 弹性网卡的描述信息。长度为2~256个英文或中文字符，不能以 http:// 和 https:// 开头。
    * 默认值：空。
    * @example `test`
    */ "Description"?: string;
    "Visible"?: boolean;
    "BusinessType"?: string;
    /**
    * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多详情，请参见[如何保证幂等性](~~25693~~)。
    * @example `123e4567-e89b-12d3-a456-426655440000`
    */ "ClientToken"?: string;
}
export { CreateNetworkInterfaceRequest };