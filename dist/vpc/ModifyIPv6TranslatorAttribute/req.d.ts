interface ModifyIPv6TranslatorAttributeRequest {
    /**
    *  IPv6转换服务实例的地域。 您可以通过调用**DescribeRegions**接口获取地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    *  IPv6转换服务实例的ID。
    * @example `ipv6trans-bp1858ysxxxxxx`
    */ "Ipv6TranslatorId": string;
    "OwnerId"?: number;
    /**
    * 客户端token用于保证请求的幂等性。要保证Client Token在不同请求间唯一，最大值不超过64个ASCII字符。
    * @example `sha1111`
    */ "ClientToken"?: string;
    /**
    *  IPv6转换服务实例的名称，默认为实例ID。  长度为 2-100个字符，必须以字母或中文开头，可包含数字，点号（.），下划线（_）和短横线（-）。但不能以http:// 或https://开头。
    * @example `instancename`
    */ "Name"?: string;
    /**
    *  IPv6转换服务的描述信息。默认值为空。  长度为 2-100个字符，必须以字母或中文开头，可包含数字，点号（.），下划线（_）和短横线（-）。但不能以http:// 或https://开头。
    * @example `instancedescription`
    */ "Description"?: string;
}
export { ModifyIPv6TranslatorAttributeRequest };