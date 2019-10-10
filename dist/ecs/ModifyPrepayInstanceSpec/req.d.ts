interface ModifyPrepayInstanceSpecRequest {
    /**
    * 实例所属的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 实例ID。
    * @example `i-xxxxx1`
    */ "InstanceId": string;
    /**
    * 需要变配的目标实例规格。更多详情，请参见[实例规格族](~~25378~~)，也可以调用[DescribeInstanceTypes](~~25620~~)接口获得最新的规格表。
    * @example `ecs.s1.large`
    */ "InstanceType": string;
    /**
    * @example `hide`
    */ "SourceRegionId"?: string;
    /**
    * RAM用户的虚拟账号ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
    /**
    * 操作类型。取值范围：
    * -   upgrade（默认）：升级实例规格。当参数`OperatorType`被置为`upgrade`时，请确保您的账户支付方式余额充足。
    * -   downgrade：降配实例规格。
    * @example `upgrade`
    */ "OperatorType"?: string;
    /**
    * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多详情，请参见[如何保证幂等性](~~25693~~)。
    * @example `123e4567-e89b-12d3-a456-426655440000`
    */ "ClientToken"?: string;
    /**
    * 是否自动支付。当参数OperatorType被置为downgrade时，将忽略参数AutoPay。取值范围：
    * -  true（默认）：自动支付。您需要确保账户余额充足，如果账户余额不足会生成异常订单，只能作废订单。
    * -  false：只生成订单不扣费。更换计费方式后，默认自动扣费。您需要确保账户余额充足，否则会生成异常订单，此时只能作废订单。如果您的账户余额不足，可以将参数**AutoPay**置为**false**，此时会生成正常的未支付订单，您可以登录ECS管理控制台支付。
    * @example `true`
    */ "AutoPay"?: boolean;
    /**
    * 是否支持跨集群升级实例规格。默认值：False
    * 当参数MigrateAcrossZone取值为True时，一旦您根据返回信息升级了云服务器，请留意以下注意事项：
    * 经典网络类型实例：
    *
    * * 对于[已停售的实例规格](~~55263~~)，非I/O优化实例变配到I/O优化实例时，实例私网IP地址、磁盘设备名和软件授权码会发生变化。对于Linux实例，普通云盘（cloud）会被识别为xvda或者xvdb等，高效云盘（cloud_efficiency）和SSD云盘（cloud_ssd）会被识别为vda或者vdb等。
    *
    * * 对于[正常售卖的实例规格族](~~25378~~)，实例的私网IP地址会发生变化。
    * 专有网络VPC类型实例：对于已停售的实例规格]，非I/O优化实例变配到I/O优化实例时，云服务器磁盘设备名和软件授权码会发生变化。Linux实例的普通云盘（cloud）会被识别为xvda或者xvdb等，高效云盘（cloud_efficiency）和SSD云盘（cloud_ssd）会被识别为vda或者vdb等。
    * @example `false`
    */ "MigrateAcrossZone"?: boolean;
    /**
    * 更换系统盘类型。该参数只有在从[已停售的实例规格](~~55263~~)升级到[正常售卖的实例规格族](~~25378~~)，并将非I/O优化实例规格升级为I/O优化实例规格时有效。取值范围：
    * - cloud_efficiency：高效云盘
    * - cloud_ssd：SSD云盘
    * @example `cloud_efficiency`
    */ "SystemDisk.Category"?: string;
    /**
    * @example `hide-query from心牧-for 聚石塔 project`
    */ "RebootTime"?: string;
    /**
    * @example `hide-query from心牧-for 聚石塔 project`
    */ "EndTime"?: string;
}
export { ModifyPrepayInstanceSpecRequest };