interface ModifyACLRuleRequest {
    /**
    * 地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 需要修改的访问控制ID。
    * @example `acl-xhwhyuo43l0n*******`
    */ "AclId": string;
    /**
    * 需要修改的访问控制规则ID。
    * @example `acr-u98qztgtgvhb********`
    */ "AcrId": string;
    "OwnerId"?: number;
    /**
    * 规则描述信息，长度为1~512个字符。
    * @example `test`
    */ "Description"?: string;
    /**
    * 规则方向。
    * 取值：**in|out**
    * @example `in`
    */ "Direction"?: string;
    /**
    * 源地址，CIDR格式和IPv4格式的IP地址范围。
    * 默认值：**0.0.0.0/0 **
    * @example `0.0.0.0/0`
    */ "SourceCidr"?: string;
    /**
    * 目的地址，CIDR格式和IPv4格式的IP地址范围。
    * 默认值：**0.0.0.0/0**
    * @example `0.0.0.0/0`
    */ "DestCidr"?: string;
    /**
    * 协议，不区分大小写。
    * @example `tcp`
    */ "IpProtocol"?: string;
    /**
    * 源端口范围，80/80。
    * @example `80/80`
    */ "SourcePortRange"?: string;
    /**
    * 目的端口范围，80/80。
    * @example `80/80`
    */ "DestPortRange"?: string;
    /**
    * 访问权限：**accept|drop**
    * @example `accept`
    */ "Policy"?: string;
    /**
    * 优先级，取值范围：1~100
    * 默认值：1
    * @example `2`
    */ "Priority"?: number;
    "Type"?: string;
}
export { ModifyACLRuleRequest };