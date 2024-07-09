export interface ModifyReadWriteSplittingConnectionRequest {
    /**
     * 主实例ID。可调用DescribeDBInstances获取。
     * @example `rm-uf6wjk5****`
     */
    "DBInstanceId": string;
    /**
     * 读写分离地址前缀名，不可重复，由小写字母和中划线组成，需以字母开头，长度不超过30个字符。
     * >默认以“实例名+rw”字符串组成前缀。
     * @example `rm-m5****rw.mysql.rds.aliyuncs.com`
     */
    "ConnectionStringPrefix"?: string;
    /**
     * 读写分离地址端口号。
     * @example `3306`
     */
    "Port"?: string;
    /**
     * 延迟阈值，单位为秒。当只读实例延迟时间超过该阈值时，读取流量不发往该实例。不传该参数则保持原值。
     * > * 参数**MaxDelayTime**不适用于SQL Server 2017集群版实例。
     * > * 至少传入**MaxDelayTime**或**DistributionType**中的一个。
     * @example `12`
     */
    "MaxDelayTime"?: string;
    /**
     * 读权重分配模式，取值：
     * * **Standard**：按规格权重自动分配
     * * **Custom**：自定义分配权重
     * >至少传入**MaxDelayTime**或**DistributionType**中的一个。
     * @example `Standard`
     */
    "DistributionType"?: string;
    /**
     * 读权重分配，即传入主实例和只读实例的读请求权重。以100递增，最大值为10000。
     * * RDS实例格式：`{"<只读实例ID>":<权重>,"master":<权重>,"slave":<权重>}`
     * * MyBASE实例格式：`[{"instanceName":"<主实例ID>","weight":<权重>,"role":"master"},{"instanceName":"<主实例ID>","weight":<权重>,"role":"slave"},{"instanceName":"<只读实例ID>","weight":<权重>,"role":"master"}]`
     * > * 当**DistributionType**为**Custom**时，必须传入该参数。
     * > * 当**DisrtibutionType**为**Standard**时，传入该参数无效。
     * @example `{
          "rm-bp1****": 800,
          "master": 400,
          "slave": 400
    }`
     */
    "Weight"?: string;
}
