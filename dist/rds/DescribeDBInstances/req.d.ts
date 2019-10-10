interface DescribeDBInstancesRequest {
    /**
    * 地域ID，可以通过接口[DescribeRegions](~~26243~~)查看。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    "OwnerId"?: number;
    /**
    * 用于保证请求的幂等性，防止重复提交请求。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符，且该参数值中不能包含非ASCII字符。
    * @example `ETnLKlblzczshOTUbOCzxxxxxxx`
    */ "ClientToken"?: string;
    /**
    * 代理模式ID。
    * @example `API`
    */ "proxyId"?: string;
    /**
    * 数据库类型，取值：
    * * **MySQL**；
    * * **SQLServer**；
    * * **PostgreSQL**；
    * * **PPAS**；
    * * **MariaDB**。
    * 默认返回所有数据库类型。
    * @example `MySQL`
    */ "Engine"?: string;
    /**
    * 可用区ID。
    * @example `cn-hangzhou-a`
    */ "ZoneId"?: string;
    /**
    * 资源组ID。
    * @example `rg-acfmyxxxxx`
    */ "ResourceGroupId"?: string;
    /**
    * 实例状态，详情请参见[实例状态表](~~26315~~)。
    * @example `Running`
    */ "DBInstanceStatus"?: string;
    /**
    * 实例的过期状态，取值：
    * * **True**：已过期。
    * *  **False**：未过期。
    * @example `True`
    */ "Expired"?: string;
    /**
    * 可基于实例ID或者实例备注模糊搜索。
    * @example `rm-uf6w`
    */ "SearchKey"?: string;
    /**
    * 实例ID。
    * @example `rm-uf6wjk5xxxxxxx`
    */ "DBInstanceId"?: string;
    /**
    * 实例类型，取值：
    * * **Primary**：主实例；
    * * **Readonly**：只读实例；
    * * **Guard**：灾备实例；
    * * **Temp**：临时实例。
    * 默认返回所有实例类型。
    * @example `Primary`
    */ "DBInstanceType"?: string;
    /**
    * 每页记录数，取值：
    * * **30**；
    * * **50**；
    * * **100**。
    * 默认值：**30**。
    * @example `30`
    */ "PageSize"?: number;
    /**
    * 页码，取值：大于0且不超过Integer的最大值。
    * 默认值：**1**。
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 实例的网络类型，取值：
    * * **VPC**：专有网络下的实例；
    * * **Classic**：经典网络下的实例。
    * 默认返回所有网络类型下的实例。
    * @example `Classic`
    */ "InstanceNetworkType"?: string;
    /**
    * VPC ID。
    * @example `vpc-uf6f7l4fg90xxxxxxxxxx`
    */ "VpcId"?: string;
    /**
    * 交换机ID。
    * @example `vsw-uf6adz52c2pxxxxxxxxxx`
    */ "VSwitchId"?: string;
    /**
    * 实例规格，详见[实例规格表](~~26312~~)。
    * @example `rds.mys2.small`
    */ "DBInstanceClass"?: string;
    /**
    * 数据库版本。
    * @example `5.7`
    */ "EngineVersion"?: string;
    /**
    * 付费类型，取值：
    * * **Postpaid**：按量付费；
    * * **Prepaid**：包年包月。
    * @example `Postpaid`
    */ "PayType"?: string;
    /**
    * 实例的访问模式，取值：
    * * **Standard**：标准访问模式；
    * * **Safe**：数据库代理模式。
    * 默认返回所有访问模式下的实例。
    * @example `Standard`
    */ "ConnectionMode"?: string;
    /**
    * 当前第一组key。需要绑定的Tag，包括TagKey和TagValue，单次最多支持传入5组值。TagKey不能为空，TagValue可以为空。
    * @example `Tagkey1`
    */ "Tag.1.key"?: string;
    /**
    * 当前第二组key。需要绑定的Tag，包括TagKey和TagValue，单次最多支持传入5组值。TagKey不能为空，TagValue可以为空。
    * @example `Tagkey2`
    */ "Tag.2.key"?: string;
    /**
    * 当前第三组key。需要绑定的Tag，包括TagKey和TagValue，单次最多支持传入5组值。TagKey不能为空，TagValue可以为空。
    * @example `Tagkey3`
    */ "Tag.3.key"?: string;
    /**
    * 当前第四组key。需要绑定的Tag，包括TagKey和TagValue，单次最多支持传入5组值。TagKey不能为空，TagValue可以为空。
    * @example `Tagkey4`
    */ "Tag.4.key"?: string;
    /**
    * 当前第五组key。需要绑定的Tag，包括TagKey和TagValue，单次最多支持传入5组值。TagKey不能为空，TagValue可以为空。
    * @example `Tagkey5`
    */ "Tag.5.key"?: string;
    /**
    * 当前第一组value。需要绑定的Tag，包括TagKey和TagValue，单次最多支持传入5组值。TagKey不能为空，TagValue可以为空。
    * @example `Tagvalue1`
    */ "Tag.1.value"?: string;
    /**
    * 当前第二组value。需要绑定的Tag，包括TagKey和TagValue，单次最多支持传入5组值。TagKey不能为空，TagValue可以为空。
    * @example `Tagvalue2`
    */ "Tag.2.value"?: string;
    /**
    * 当前第三组value。需要绑定的Tag，包括TagKey和TagValue，单次最多支持传入5组值。TagKey不能为空，TagValue可以为空。
    * @example `Tagvalue3`
    */ "Tag.3.value"?: string;
    /**
    * 当前第四组value。需要绑定的Tag，包括TagKey和TagValue，单次最多支持传入5组值。TagKey不能为空，TagValue可以为空。
    * @example `Tagvalue4`
    */ "Tag.4.value"?: string;
    /**
    * 当前第五组value。需要绑定的Tag，包括TagKey和TagValue，单次最多支持传入5组值。TagKey不能为空，TagValue可以为空。
    * @example `Tagvalue5`
    */ "Tag.5.value"?: string;
    /**
    * 查询绑定有该标签的实例，包括TagKey和TagValue。单次最多支持传入5组值，格式：{"key1":"value1","key2":"value2"...}。
    * @example `{“key1”:”value1”}`
    */ "Tags"?: string;
}
export { DescribeDBInstancesRequest };