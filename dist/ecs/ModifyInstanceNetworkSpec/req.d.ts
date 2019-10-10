interface ModifyInstanceNetworkSpecRequest {
    "RegionId"?: string;
    /**
    * 需要修改网络配置的实例ID。
    * @example `i-xxxxx1`
    */ "InstanceId": string;
    "SourceRegionId"?: string;
    /**
    * RAM 用户的虚拟账号 ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
    /**
    * 公网出带宽最大值，单位：Mbps（Megabit per second）。取值范围：0~100
    * @example `10`
    */ "InternetMaxBandwidthOut"?: number;
    /**
    * 设置公网入带宽最大值，单位：Mbps（Megabit per second）。取值范围：1~200
    * @example `10`
    */ "InternetMaxBandwidthIn"?: number;
    /**
    * - PayByBandwidth：按固定带宽计费
    * @example `PayByTraffic`
    */ "NetworkChargeType"?: string;
    /**
    * 是否分配公网 IP 地址。默认值：false
    * @example `false`
    */ "AllocatePublicIp"?: boolean;
    /**
    * 临时带宽升级开始时间。按照[ISO8601](~~25696~~)标准表示，并使用UTC +0时间，格式为yyyy-MM-ddThh:mmZ。精确到**分钟**（mm）。
    * @example `2017-12-05T22:40Z`
    */ "StartTime"?: string;
    /**
    * 临时带宽升级结束时间。按照[ISO8601](~~25696~~)标准表示，并使用UTC +0时间，格式为yyyy-MM-ddThhZ。精确到**小时**（hh）。
    * @example `2017-12-06T22Z`
    */ "EndTime"?: string;
    /**
    * - false：变更带宽配置后，只生成订单不扣费。如果您的支付方式余额不足，可以将参数Autopay置为false，即取消自动支付，此时调用该接口会生成正常的未支付订单，此订单可登录[ECS管理控制台](https://ecs.console.aliyun.com)支付。
    * @example `true`
    */ "AutoPay"?: boolean;
    /**
    * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多详情，请参见[如何保证幂等性](~~25693~~)。
    * @example `123e4567-e89b-12d3-a456-426655440000`
    */ "ClientToken"?: string;
}
export { ModifyInstanceNetworkSpecRequest };