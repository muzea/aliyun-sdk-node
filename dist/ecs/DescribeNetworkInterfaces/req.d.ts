interface DescribeNetworkInterfacesRequest {
    /**
    * 所在地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * @example `cn-hangzhou`
    */ "SourceRegionId"?: string;
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
    * VPC的虚拟交换机ID。
    * @example `vsw-bp16usj2p27htro3*****`
    */ "VSwitchId"?: string;
    /**
    * 网卡所属的专有网络VPC ID。
    * @example `vsw-bp16usj2p27htro3*****`
    */ "VpcId"?: string;
    /**
    * 弹性网卡主私有IP地址。
    * @example `172.17.**.***`
    */ "PrimaryIpAddress"?: string;
    "PrivateIpAddress"?: string[];
    /**
    * 安全组ID。
    * @example `sg-bp144yr32sx6ndw*****`
    */ "SecurityGroupId"?: string;
    /**
    * 弹性网卡的名称。
    * @example `my-eni-name`
    */ "NetworkInterfaceName"?: string;
    /**
    * 弹性网卡类型。取值范围：
    * - Primary
    * - Secondary
    *
    * @example `Secondary`
    */ "Type"?: string;
    /**
    * 弹性网卡当前关联的实例ID。
    * @example `i-bpm21018033933ea*****`
    */ "InstanceId"?: string;
    "NetworkInterfaceId"?: string[];
    /**
    * @example `true`
    */ "ServiceManaged"?: boolean;
    /**
    * 查询结果的页码。取值为正整数。
    * 默认值：1
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 查询结果的分页大小。取值范围：1~100
    * 默认值：10
    * @example `100`
    */ "PageSize"?: number;
}
export { DescribeNetworkInterfacesRequest };