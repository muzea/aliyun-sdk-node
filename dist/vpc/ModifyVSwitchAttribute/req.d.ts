interface ModifyVSwitchAttributeRequest {
    /**
    * 交换机所属的地域ID。
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    "OwnerId"?: number;
    /**
    *  交换机的名称。  长度为 2-128个字符，必须以字母或中文开头，可包含数字，点号（.），下划线（_）和短横线（-）。但不能以`http:// `或`https://`开头。
    * @example `VSwitch-1`
    */ "VSwitchName"?: string;
    /**
    *  交换机的ID。
    * @example `vsw-25naue4gz`
    */ "VSwitchId": string;
    /**
    * 交换机的描述信息。
    * 长度为 2-256个字符，必须以字母或中文开头，但不能以`http://` 或`https://`开头。
    * @example `This is my vswitch.`
    */ "Description"?: string;
    /**
    * 交换机的IPv6网段，支持自定义IPv6网段的最后8位。取值：0-255（十进制）。
    * 交换机的IPv6网段掩码默认为64 位。
    * @example `0`
    */ "Ipv6CidrBlock"?: number;
}
export { ModifyVSwitchAttributeRequest };