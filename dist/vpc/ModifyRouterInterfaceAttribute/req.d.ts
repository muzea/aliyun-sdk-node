interface ModifyRouterInterfaceAttributeRequest {
    /**
    *  路由器接口所在的地域。 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
    * @example `cn-shanghai`
    */ "RegionId": string;
    /**
    *  路由器接口的ID。
    * @example `ri-2zeo3xzyf38r4urz****`
    */ "RouterInterfaceId": string;
    "OwnerId"?: number;
    /**
    * 路由器接口的名称。
    * 长度为 2-128个字符，必须以字母或中文开头，可包含数字，点号（.），下划线（_）和短横线（-）。但不能以`http:// `或`https://`开头。
    * @example `TEST`
    */ "Name"?: string;
    /**
    * 路由器接口的描述信息。
    * 长度为 2-256个字符，必须以字母或中文开头，但不能以`http:// `或`https://`开头。
    * @example `路由器接口`
    */ "Description"?: string;
    /**
    *  对端路由器接口ID。
    * @example `ri-2zeo3xzyf38r4urz****`
    */ "OppositeInterfaceId"?: string;
    /**
    *  对端的路由器的ID。
    * @example `vrt-bp1jcg5cmxjbl9xgc****`
    */ "OppositeRouterId"?: string;
    /**
    * 要连接的对端路由器接口所属的路由器类型。默认值为**VBR**。
    * 取值：**VRouter|VBR**
    * @example `VRouter`
    */ "OppositeRouterType"?: string;
    /**
    *  对端路由器接口的所有者ID。
    * @example `10`
    */ "OppositeInterfaceOwnerId"?: number;
    /**
    *  健康检查源IP地址，必须是本端VPC内的一个未被使用的IP。
    *
    * > 物理专线接入场景下可指定该参数。
    * @example `116.62.222.XX`
    */ "HealthCheckSourceIp"?: string;
    /**
    *  健康检查目的IP地址。
    * > 当指定了**HealthCheckSourceIp**后，该参数为必选。
    * @example `116.62.222.XX`
    */ "HealthCheckTargetIp"?: string;
    "HcThreshold"?: number;
    "HcRate"?: number;
    /**
    *  是否删除该路由器接口上配置的健康检查IP。取值：
    * - **true**：删除健康检查IP。
    * - **false**（默认值）：不删除健康检查IP。
    * @example `true`
    */ "DeleteHealthCheckIp"?: boolean;
}
export { ModifyRouterInterfaceAttributeRequest };