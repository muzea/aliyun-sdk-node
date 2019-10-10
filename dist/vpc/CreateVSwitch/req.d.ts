interface CreateVSwitchRequest {
    /**
    * 交换机的地域ID。
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    /**
    * 交换机的网段。交换机网段要求如下：
    * - 交换机网段的掩码长度范围为16-29位。
    * - 交换机的网段必须从属于所在VPC的网段。
    * - 交换机的网段不能与所在VPC中路由条目的目标网段相同，但可以是目标网段的子集。
    * - 如果交换机的网段与所在VPC的网段相同时，VPC只能有一个交换机。
    * @example `172.16.0.0/24`
    */ "CidrBlock": string;
    /**
    *  交换机所属的VPC ID。
    * @example `vpc-257gq6n****`
    */ "VpcId": string;
    "OwnerId"?: number;
    /**
    *  交换机所属区的ID。 您可以通过调用[DescribeZones](https://help.aliyun.com/document_detail/36063.html?spm=a2c4g.11186623.2.13.672255b1Ti4hEp)接口获取地域ID。
    * @example `cn-hangzhou-b`
    */ "ZoneId": string;
    /**
    * 交换机的IPv6网段，支持自定义VPC IPv6网段的最后8bit。取值：**0-255（十进制）**。
    * 交换机的IPv6网段掩码默认为64位。
    * @example `0`
    */ "Ipv6CidrBlock"?: number;
    /**
    * 交换机的名称。
    * 长度为 2-128个字符，必须以字母或中文开头，但不能以`http:// `或`https://`开头。
    * @example `VSwitch-1`
    */ "VSwitchName"?: string;
    /**
    * 交换机的描述信息。
    * 长度为 2-256个字符，必须以字母或中文开头，但不能以`http://` 或`https://`开头。
    * @example `This is my vswitch.`
    */ "Description"?: string;
    /**
    * 客户端token，用于保证请求的幂等性。
    * 由客户端生成该参数值，要保证在不同请求间唯一，最大不值过64个 ASCII 字符。
    * @example `dhueeuxxxxxxdde`
    */ "ClientToken"?: string;
}
export { CreateVSwitchRequest };