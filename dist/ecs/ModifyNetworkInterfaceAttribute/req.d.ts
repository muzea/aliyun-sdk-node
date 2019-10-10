interface ModifyNetworkInterfaceAttributeRequest {
    /**
    * 弹性网卡所在地域 ID。您可以调用 [DescribeRegions](~~25609~~) 查看最新的阿里云地域列表。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 弹性网卡 ID。
    * @example `eni-myeni`
    */ "NetworkInterfaceId": string;
    "SourceRegionId"?: string;
    /**
    * RAM 用户的虚拟账号 ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
    "SecurityGroupId"?: string[];
    /**
    * 弹性网卡的名称。
    * - 字符长度为2~128个英文或中文字符，必须以大小字母或中文开头，可包含数字、下划线（_） 或连字符（-）。
    * - 弹性网卡名称会展示在控制台。
    * - 不能以 http:// 和 https:// 开头。
    * - 不填则为空，默认值为空。
    *
    * @example `my-eni-name`
    */ "NetworkInterfaceName"?: string;
    /**
    * 弹性网卡的描述信息。
    * - 字符长度为2~256个英文或中文字符。
    * - 不能以 http:// 和 https:// 开头。
    * - 不填则为空，默认值为空。
    *
    * @example `test`
    */ "Description"?: string;
}
export { ModifyNetworkInterfaceAttributeRequest };