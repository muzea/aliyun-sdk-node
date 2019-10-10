interface ModifyBgpGroupAttributeRequest {
    /**
    * BGP组所在的地域。
    * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
    * @example `cn-shanghai`
    */ "RegionId": string;
    /**
    * 指定BGP组的ID。
    * @example `bgpg-wz9f62v4fbg2gxxxxxxxx`
    */ "BgpGroupId": string;
    "OwnerId"?: number;
    /**
    *  BGP组的名称。  长度为 2-128个字符，必须以字母或中文开头，可包含数字，点号（.），下划线（_）和短横线（-）。但不能以`http://` 或`https://`开头。
    * @example `test`
    */ "Name"?: string;
    /**
    *  BGP组的描述信息。  长度为 2-256个字符，必须以字母或中文开头，但不能以`http://` 或`https://`开头。
    * @example `BGP`
    */ "Description"?: string;
    "LocalAsn"?: number;
    /**
    * 侧设备的AS号。
    * @example `1111`
    */ "PeerAsn"?: number;
    /**
    * BGP组的认证密钥。
    * @example `!PWZ2wsq`
    */ "AuthKey"?: string;
    /**
    * 运行BGP的路由器一般情况下只能属于一个AS，某些情况下，比如AS需要迁移或者和其他AS进行合并，要用新的AS替代原有的AS号码。
    * @example `true`
    */ "IsFakeAsn"?: boolean;
    /**
    * 用于保证请求的幂等性。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过 64 个 ASCII 字符。
    * @example `02fb3da4-130e-11e9-8e44-0016e04115b`
    */ "ClientToken"?: string;
}
export { ModifyBgpGroupAttributeRequest };