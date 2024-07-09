export interface UpdatePrivateRdsClassRequest {
    /**
     * 更新后的存储层私有定制RDS实例规格码。
     * > 您可以调用[DescribeAvailableClasses](~~196546~~)接口查看可购买的存储层私有定制RDS实例规格，包括规格代码和存储空间范围。
     * @example `rds.mysql.c1.xlarge`
     */
    "RdsClass"?: string;
    /**
     * <props="china">PolarDB-X实例ID。</props>
     * <props="intl">DRDS实例ID。</props>
     * > 您可以调用[DescribeDrdsInstances](~~139284~~)查看目标账号下所有实例详情，包括实例ID。
     * @example `drds*************`
     */
    "DrdsInstanceId": string;
    /**
     * 存储层私有定制RDS实例ID。
     * <props="china">> 您可以调用[DescribeDrdsRdsInstances](~~xxxx~~)查看目标PolarDB-X实例下所有存储层私有定制RDS实例详情，包括实例ID。</props>
     * <props="intl">> 您可以调用[DescribeDrdsRdsInstances](~~xxxx~~)查看目标DRDS实例下所有存储层RDS实例详情，包括实例ID。</props>
     * @example `rm-***************`
     */
    "DBInstanceId": string;
    /**
     * 更新后的存储层私有定制RDS实例的存储空间。
     * > 您可以调用[DescribeAvailableClasses](~~196546~~)接口查看可购买的存储层私有定制RDS实例规格，包括规格代码和存储空间范围。
     * @example `50`
     */
    "Storage"?: string;
    /**
     * 是否使用代金券抵扣购买费用，取值为：**true**或**false**（默认值）。
     * > 使用代金券后，若需要进行降配操作，由代金券抵扣的金额将不会进行退款。
     * @example `true`
     */
    "AutoUseCoupon"?: boolean;
    /**
     * 无效字段。
     * @example `12`
     */
    "PrePayDuration"?: number;
}
