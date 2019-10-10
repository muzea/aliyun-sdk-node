interface CreateRouterInterfaceRequest {
    /**
    * 路由器接口所在的地域。
    * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 路由器接口的角色，取值：
    *
    * - **InitiatingSide**：连接发起端。
    * - **AcceptingSide**：连接接收端。
    * @example `InitiatingSide`
    */ "Role": string;
    /**
    *  连接接收端所在的地域ID。
    * @example `cn-shanghai`
    */ "OppositeRegionId": string;
    /**
    * 路由器接口的规格。可用的规格和对应的带宽如下：
    *
    * - **Mini.2**：2Mbps
    * - **Mini.5**：5Mbps
    * - **Small.1**：10Mbps
    * - **Small.2**：20Mbps
    *
    * - **Small.5**：50Mbps
    * - **Middle.1**：100Mbps
    * - **Middle.2**：200Mbps
    * - **Middle.5**：500Mbps
    * - **Large.1**：1000 Mbps
    * - **Large.2**：2000Mbps
    * - **Large.5**：5000 Mbps
    * - **Xlarge.1**：10000Mbps
    * > 当**Role**为**AcceptingSide**(连接接收端)时，**Spec**取值为**Negative**。
    * @example `Large`
    */ "Spec": string;
    /**
    * 路由器接口关联的路由器类型。取值：
    * - **VRouter**：VPC路由器
    * - **VBR**：边界路由器
    *
    * @example `VRouter`
    */ "RouterType": string;
    /**
    *  路由器接口关联的路由器ID。
    * @example `cn-hangzhou`
    */ "RouterId": string;
    /**
    *  对端路由器接口ID。
    * @example `ri-2zeo3xzyf38r4urzd****`
    */ "OppositeInterfaceId"?: string;
    /**
    *  对端的路由器的ID。
    * @example `vrt-bp1lhl0taikrteen8****`
    */ "OppositeRouterId"?: string;
    /**
    * 对端路由器接口关联的路由器类型。取值：
    * - **VRouter**：VPC路由器
    * - **VBR**：边界路由器
    * @example `VRouter`
    */ "OppositeRouterType"?: string;
    /**
    *  对端路由器接口的所有者ID。
    * @example `fffsf`
    */ "OppositeInterfaceOwnerId"?: string;
    /**
    * 健康检查源IP地址，必须是本端VPC内的一个未被使用的IP。
    * > 物理专线接入场景下可指定该参数。
    *
    * @example `116.62.222.XX`
    */ "HealthCheckSourceIp"?: string;
    /**
    * 健康检查目的IP地址。
    * > 当指定了**HealthCheckSourceIp**后，该参数为必选。
    * @example `116.62.222.XX`
    */ "HealthCheckTargetIp"?: string;
    /**
    *  VBR所属的接入点ID。 您可以通过调用[DescribeAccessPoints](~~36062~~)接口获取物理专线接入点ID。
    *
    * > 物理专线接入场景下需指定该参数。
    * @example `ap-cn-shanghaiSZ-****`
    */ "AccessPointId"?: string;
    /**
    * 对端所属的接入点ID。
    * > 对端路由器接口位于VBR上时需指定该参数，创建路由器接口后无法修改。
    * @example `ap-cn-shanghaiSZ-****`
    */ "OppositeAccessPointId"?: string;
    /**
    * 路由器接口的描述信息。
    * 长度为 2-256个字符，必须以字母或中文开头，但不能以``http:// ``或`https://`开头。
    * @example `路由器接口描述。`
    */ "Description"?: string;
    /**
    * 路由器接口的名称。
    * 长度为 2-128个字符，必须以字母或中文开头，可包含数字，点号（.），下划线（_）和短横线（-）。但不能以`http://` 或`https://`开头。
    * @example `接口名称`
    */ "Name"?: string;
    /**
    * 购买时长。取值：
    * - 当选择按月付费时，取值范围为**1-9**
    * - 当选择按年付费时，取值范围为**1-3**
    * > **InstanceChargeType**参数的值为**PrePaid**时，该参数必选。
    * @example `3`
    */ "Period"?: number;
    /**
    * 路由器接口的付费方式。取值：
    * - **PrePaid**：预付费
    * - **PostPaid（默认值）**：后付费。
    * @example `PrePaid`
    */ "InstanceChargeType"?: string;
    /**
    * 是否自动付费，取值：
    *
    * - **false**：不开启自动付费，生成订单后需要到订单中心完成支付。
    * - **true**：开启自动付费，自动支付订单。
    * > **InstanceChargeType**参数的值为**PrePaid**时，该参数必选。
    * @example `false`
    */ "AutoPay"?: boolean;
    /**
    * 预付费的计费周期，取值：
    *
    * - **Month（默认值）**：按月付费
    * - **Year**：按年付费。
    *
    * > **InstanceChargeType**参数的值为**PrePaid**时，该参数必选。
    *
    * @example `Month`
    */ "PricingCycle"?: string;
    /**
    * 客户端token，用于保证请求的幂等性。
    * 由客户端生成该参数值，要保证在不同请求间唯一，最大不值过64个 ASCII 字符。
    * @example `sjffha123334`
    */ "ClientToken"?: string;
    "OwnerId"?: number;
}
export { CreateRouterInterfaceRequest };