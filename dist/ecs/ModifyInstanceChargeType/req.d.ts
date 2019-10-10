interface ModifyInstanceChargeTypeRequest {
    /**
    * 实例所属的地域ID。您可以调用 [DescribeRegions](~~25609~~) 查看最新的阿里云地域列表。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 实例ID。取值可以由多台实例ID组成一个JSON数组，最多支持20个ID，ID之间用半角逗号（`,`）隔开。
    * @example `["i-xxxxx1","i-xxxxx2"]`
    */ "InstanceIds": string;
    /**
    * @example `hide`
    */ "SourceRegionId"?: string;
    /**
    * RAM用户的虚拟账号ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
    /**
    * - `PeriodUnit=Week`时，`Period`取值：{“1”, “2”, “3”, “4”}
    * @example `2`
    */ "Period"?: number;
    /**
    * - Week
    * @example `month`
    */ "PeriodUnit"?: string;
    /**
    * 是否将实例挂载的所有按量付费数据盘一起转换为包年包月数据盘。默认值：true
    * @example `true`
    */ "IncludeDataDisks"?: boolean;
    /**
    * 是否只预检此次请求。
    * - true：发送检查请求，不会查询资源状况。检查项包括AccessKey是否有效、RAM用户的授权情况和是否填写了必需参数。如果检查不通过，则返回对应错误。如果检查通过，会返回错误码`DryRunOperation`。
    * - false（默认）：发送正常请求，通过检查后返回2XX HTTP状态码并直接查询资源状况。
    * @example `false`
    */ "DryRun"?: boolean;
    /**
    * 是否自动支付。当参数OperatorType被置为downgrade时，将忽略参数AutoPay。取值范围：
    * - true（默认）：自动支付。您需要确保账户余额充足，如果账户余额不足会生成异常订单，只能作废订单。
    * - false：只生成订单不扣费。更换计费方式后，默认自动扣费。您需要确保账户余额充足，否则会生成异常订单，此时只能作废订单。如果您的账户余额不足，可以将参数**AutoPay**置为**false**，此时会生成正常的未支付订单，您可以登录ECS管理控制台支付。
    * @example `false`
    */ "AutoPay"?: boolean;
    /**
    * 实例需要修改的目标计费方式。取值范围：
    * - PrePaid（默认）：将按量付费实例转换为包年包月实例。
    * - PostPaid：将包年包月实例转换为按量付费实例。
    * @example `PrePaid`
    */ "InstanceChargeType"?: string;
    /**
    * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多详情，请参见[如何保证幂等性](~~25693~~)。
    * @example `123e4567-e89b-12d3-a456-426655440000`
    */ "ClientToken"?: string;
    /**
    * 包年包月转换为按量计费时，是否返回订单费用详情。
    * 默认值：false。
    * @example `false`
    */ "IsDetailFee"?: boolean;
}
export { ModifyInstanceChargeTypeRequest };