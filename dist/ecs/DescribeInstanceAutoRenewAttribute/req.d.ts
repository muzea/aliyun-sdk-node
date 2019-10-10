interface DescribeInstanceAutoRenewAttributeRequest {
    /**
    * 实例所属的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    "SourceRegionId"?: string;
    /**
    * RAM用户的虚拟账号ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
    /**
    * 实例ID。支持最多100台包年包月实例批量查询，多个实例ID以半角逗号分隔。
    * @example `i-instance1,i-instance2`
    */ "InstanceId"?: string;
    /**
    * 实例的自动续费状态。取值范围：
    * - AutoRenewal：设置为自动续费。
    * - Normal：取消自动续费。
    * - NotRenewal：不再续费，系统不再发送到期提醒，只在到期前第三天发送不续费提醒。不再续费的ECS实例可以通过[ModifyInstanceAutoRenewAttribute](~~52843~~)更改成待续费（`Noramal`）后，再自行续费或设置为自动续费。
    * @example `AutoRenewal`
    */ "RenewalStatus"?: string;
    /**
    * 分页展示响应信息时设置的每页行数，单位：行。
    * 最大值：100。
    * 默认值：10。
    * @example `10`
    */ "PageSize"?: string;
    /**
    * 查询接口返回资源信息列表的页码。
    * 起始值：1。
    * 默认值：1。
    * @example `1`
    */ "PageNumber"?: string;
}
export { DescribeInstanceAutoRenewAttributeRequest };