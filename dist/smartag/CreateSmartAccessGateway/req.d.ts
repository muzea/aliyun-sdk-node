interface CreateSmartAccessGatewayRequest {
    /**
    * 智能接入网关实例的地域。
    * 您可以通过调用 DescribeRegions接口获取地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 购买时长，单位月。如果取值超过12，必须是12的倍数。
    * @example `12`
    */ "Period": number;
    /**
    * 是否是自动支付预付费实例的账单。
    * 取值：**true|false**
    * 默认值：**false**。
    * @example `true`
    */ "AutoPay": boolean;
    /**
    * 实例类型，取值：**sag-100wm|sag-1000**
    * @example `sag-100wm`
    */ "HardWareSpec": string;
    /**
    * 收货国家。
    * @example `中国`
    */ "ReceiverCountry": string;
    /**
    * 收货省份。
    * @example `浙江`
    */ "ReceiverState": string;
    /**
    * 收货城市。
    * @example `杭州`
    */ "ReceiverCity": string;
    /**
    * 收货街区。
    * @example `西湖`
    */ "ReceiverDistrict": string;
    /**
    * 收货乡镇。
    * @example `转塘`
    */ "ReceiverTown": string;
    /**
    * 收货省份邮编。
    * @example `310000`
    */ "ReceiverZip": string;
    /**
    * 收件人手机号。
    * @example `13*********`
    */ "ReceiverMobile": string;
    /**
    * 收件人姓名。
    * @example `张三`
    */ "ReceiverName": string;
    /**
    * 收货人的电子邮箱。
    * @example `xx@example.com`
    */ "ReceiverEmail": string;
    /**
    *  买家留言信息。
    * @example `留言`
    */ "BuyerMessage": string;
    /**
    * 网关设备的收货地址。
    * @example `XX号`
    */ "ReceiverAddress": string;
    /**
    * 选择一种使用方式，取值：
    *
    * - no_backup：只购买一台智能接入网关设备接入阿里云。
    * - cold_backup：购买两台网关设备共享带宽，主设备故障时切换到备用设备。
    * @example ` no_backup`
    */ "HaType": string;
    /**
    * 实例的计费类型，取值：
    * - PayOnDemand：按量付费
    *
    * - PREPAY：预付费
    * > 当前只支持预付费。`
    * @example `PREPAY`
    */ "ChargeType": string;
    /**
    * 智能接入网关的带宽。
    * - 如果网关设备规格为sag-100wm，带宽取值：2~50Mbps
    * - 如果网关设备规格为sag-1000，带宽取值：10~500Mbps
    * @example `12`
    */ "MaxBandWidth"?: number;
    "OwnerId"?: number;
    /**
    * 智能接入网关实例名称。
    * @example `test`
    */ "Name"?: string;
    /**
    * 智能接入网关实例描述。
    * @example `sag`
    */ "Description"?: string;
    /**
    * 收件人电话。
    * @example `13*********`
    */ "ReceiverPhone"?: string;
    "UserCount"?: number;
    "InstanceType"?: string;
    "DataPlan"?: number;
}
export { CreateSmartAccessGatewayRequest };