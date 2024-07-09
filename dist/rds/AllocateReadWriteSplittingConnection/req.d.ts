export interface AllocateReadWriteSplittingConnectionRequest {
    /**
     * 主实例ID。可调用DescribeDBInstances获取。
     * @example `rm-uf6wjk5****`
     */
    "DBInstanceId": string;
    /**
     * 只读地址前缀名，不可重复，由小写字母和中划线组成，需以字母开头，长度不超过30个字符。
     * > 默认以“实例名+rw”字符串组成前缀。
     * @example `rr-m5e****-rw.mysql.rds.aliyuncs.com`
     */
    "ConnectionStringPrefix"?: string;
    /**
     * 只读地址端口，取值为1000~5999，默认为1433。
     * @example `1433`
     */
    "Port"?: string;
    /**
     * 延迟阈值，范围是0~7200，单位：秒，默认为30。
     * > 当只读实例延迟超过该阈值时，读取流量不发往该实例。
     * @example `30`
     */
    "MaxDelayTime"?: string;
    /**
     * 只读地址的网络类型，取值：
     * - **Internet**：外网
     * - **Intranet**：内网
     * > 默认为内网，且内网类型与主实例保持一致。
     * @example `Intranet`
     */
    "NetType"?: string;
    /**
     * 读权重分配模式，取值：
     * - **Standard**：按规格权重自动分配
     * - **Custom**：自定义分配权重
     * @example `Standard`
     */
    "DistributionType"?: string;
    /**
     * 读权重分配，即传入主实例和只读实例的读请求比例。以100进行递增，最大值为10000。
     * * RDS实例格式：`{"<只读实例ID>":<权重>,"master":<权重>,"slave":<权重>}`
     * * MyBASE实例格式：`[{"instanceName":"<主实例ID>","weight":<权重>,"role":"master"},{"instanceName":"<主实例ID>","weight":<权重>,"role":"slave"},{"instanceName":"<只读实例ID>","weight":<权重>,"role":"master"}]`
     * > - 当**DistributionType**为**Custom**时，必须传入该参数。
     * > - 当**DisrtibutionType**为**Standard**时，传入该参数无效。
     * @example `{
          "rm-bp1****": 800,
          "master": 400,
          "slave": 400
    }`
     */
    "Weight"?: string;
}
