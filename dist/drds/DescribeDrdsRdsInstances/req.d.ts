export interface DescribeDrdsRdsInstancesRequest {
    /**
     * <props="china">PolarDB-X实例ID。</props>
     * <props="intl">DRDS实例ID。</props>
     * > 您可以调用[DescribeDrdsInstances](~~139284~~)查看目标账号下所有实例详情，包括实例ID。
     * @example `drds*************`
     */
    "DrdsInstanceId": string;
}
