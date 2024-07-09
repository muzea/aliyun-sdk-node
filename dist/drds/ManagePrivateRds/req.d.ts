export interface ManagePrivateRdsRequest {
    /**
     * <props="china">PolarDB-X实例所在的地域ID。</props>
     * <props="intl">DRDS实例实例所在的地域ID。</props>
     * > 您可以调用[DescribeDrdsInstances](~~139284~~)查看目标账号下所有实例详情，包括地域ID。
     * @example `cn-hanzhou`
     */
    "RegionId"?: string;
    /**
     * <props="china">PolarDB-X实例ID。</props>
     * <props="intl">DRDS实例ID。</props>
     * > 您可以调用[DescribeDrdsInstances](~~139284~~)查看目标账号下所有实例详情，包括实例ID。
     * @example `drds*************`
     */
    "DrdsInstanceId": string;
    /**
     * 存储层私有定制RDS实例ID。
     * > 您可以调用[DescribeDrdsRdsInstances](~~215526~~)查看所有存储层私有定制RDS实例详情，包括实例ID。
     * @example `rm-***************`
     */
    "DBInstanceId": string;
    /**
     * 当前支持对私有定制RDS实例执行如下管理操作：
     * * **DescribeDBInstanceAttribute**：查询私有定制RDS实例的详细信息。
     * * **DescribeAvailableClasses**：查询私有定制RDS实例可购买规格，包括规格代码和存储空间。
     * * **DescribeSQLCollectorPolicy**：查询私有定制RDS实例的SQL洞察（SQL审计）状态。
     * * **ModifySQLCollectorPolicy**：开启或关闭私有定制RDS实例的SQL洞察（SQL审计）功能。
     * * **DescribeParameters**：查询私有定制RDS实例当前的参数配置。
     * * **ModifyParameter**：修改私有定制RDS实例参数。
     * * **DescribeDBInstanceHAConfig**：查询私有定制RDS实例的高可用模式和数据复制方式。
     * * **SwitchDBInstanceHA**：切换私有定制RDS实例的主备实例。
     * @example `SwitchDBInstanceHA`
     */
    "RdsAction": string;
    /**
     * 需要转发的私有定制RDS接口的请求参数及其值的JOSN串，参数的值都是字符串类型，例如`{NodeId:"1797****"}`。
     * 各私有定制RDS接口的请求参数及取值范围，请参见如下文档中请求参数的部分：
     * * [DescribeDBInstanceAttribute](~~26231~~)
     * * [DescribeAvailableClasses](~~196546~~)
     * * [DescribeSQLCollectorPolicy](~~26292~~)
     * * [ModifySQLCollectorPolicy](~~26293~~)
     * * [DescribeParameters](~~26285~~)
     * * [ModifyParameter](~~26286~~)
     * * [DescribeDBInstanceHAConfig](~~26244~~)
     * * [SwitchDBInstanceHA](~~26251~~)
     * > 针对上述各接口的必选请求参数，`Action`和`DBInstanceId`参数值无需传入，其他必选请求参数必须传入。
     * @example `{NodeId:"1797****"}`
     */
    "Params"?: string;
}
