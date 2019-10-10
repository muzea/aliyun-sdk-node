interface CreateNetworkOptimizationRequest {
    /**
    * 网络优化实例所在的地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 要绑定的云连接网ID，该云连接网必须属于某个云企业网。
    * @example `ccn-wfrxakqrppq********`
    */ "CcnId": string;
    "OwnerId"?: number;
    /**
    * 网络优化实例名称。
    * 长度为2-128个字符，必须以字母或中文开头，可包含数字，点号（.），下划线（_）和短横线（-）。但不能以`http://`或`https://`开头。
    * @example `doctest`
    */ "Name"?: string;
}
export { CreateNetworkOptimizationRequest };