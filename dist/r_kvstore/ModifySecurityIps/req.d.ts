interface ModifySecurityIpsRequest {
    /**
    * 地域ID。
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    /**
    * IP白名单分组下的IP列表，最多1000个。IP之间以逗号隔开，格式如下：0.0.0.0/0,10.23.12.24，或者10.23.12.24/24（CIDR模式，无类域间路由，/24表示地址中前缀的长度，范围1-32）。
    * @example `100.xxx.xxx.xxx/24,10.xxx.xxx.xxx`
    */ "SecurityIps": string;
    "OwnerId"?: number;
    /**
    * 需要修改设置的实例的ID。
    * @example `r-bp1xxxxxxxxxxxxx`
    */ "InstanceId": string;
    /**
    * IP白名单分组的名称。
    * @example `default`
    */ "SecurityIpGroupName"?: string;
    /**
    * 默认为空。用于区分不同的属性值，控制台将不显示该值为hidden的白名单分组。
    * @example `hidden`
    */ "SecurityIpGroupAttribute"?: string;
    /**
    * 修改方式：
    * * Cover（覆盖原白名单）
    * * Append（追加白名单）
    * * Delete（删除该白名单 ）
    * @example `Append`
    */ "ModifyMode"?: string;
}
export { ModifySecurityIpsRequest };