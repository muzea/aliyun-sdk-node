export interface CreateGADInstanceRequest {
    /**
     * 中心节点所在地域ID，可调用DescribeRegions查询。
     * @example `cn-hangzhou`
     */
    "CentralRegionId": string;
    /**
     * 主实例ID，可调用DescribeDBInstances获取。该实例将作为RDS全球多活数据库集群的中心节点（主节点）。
     * > * 一个主实例ID仅能作为一个RDS全球多活数据库集群的中心节点。
     * > * 当前仅华东1（杭州）、华东2（上海） 、华北1（青岛）、华北2（北京）、华北3（张家口）、华南1（深圳）、西南1（成都）地域中的RDS MySQL主实例可作为RDS全球多活数据库集群的中心节点。
     * @example `rm-uf6wjk5****`
     */
    "CentralDBInstanceId": string;
    /**
     * 中心节点中数据库信息的JSON数组，该数组中所有数据库信息将同步至当前单元节点（备节点）。参数说明：
     * * **name**：数据库名称。
     * * **all**：是否同步当前库或表中的所有数据。取值：**true**|**false**
     * * **Table**：表名称。若**all**参数为**false**，则还需要在JSON数组中套入需要同步的表名称。
     * 示例：`{
     *    "testdb": {
     *     "name": "testdb",
     *     "all": false,
     *     "Table": {
     *       "order": {
     *         "name": "order",
     *         "all": true
     *       },
     *       "ordernew": {
     *         "name": "ordernew",
     *         "all": true
     *       }
     *     }
     *   }
     * }`
     * @example `{    "testdb": {     "name": "testdb",     "all": false,     "Table": {       "order": {         "name": "order",         "all": true       },       "ordernew": {         "name": "ordernew",         "all": true       }     }   } }`
     */
    "DBList": string;
    /**
     * RDS全球多活数据库集群的名称。
     * @example `test`
     */
    "Description"?: string;
    /**
     * 单元节点信息。
     */
    "UnitNode": {
        /**
         * 新建单元节点所在的地域ID，可调用DescribeRegions查询。
         * @example `cn-hangzhou`
         */
        RegionID: string;
        /**
         * 新建单元节点所在的可用区ID，可调用DescribeRegions查询。
         * @example `cn-hangzhou-j`
         */
        ZoneID: string;
        /**
         * 新建单元节点的专有网络（VPC）ID。
         * @example `vpc-bp19ame5m1r3o****`
         */
        VpcID: string;
        /**
         * 新建单元节点的存储空间大小。单位：GB。每5GB进行递增，取值范围请参见[实例规格表](~~26312~~)。您也可以调用DescribeAvailableResource接口查询目标实例规格中可用的存储空间范围。
         * @example `20`
         */
        DBInstanceStorage: number;
        /**
         * 新建单元节点的[IP白名单](~~43185~~)。多条记录请以英文逗号（,）隔开，不可重复，最多1000条记录。支持如下两种格式：
         * * IP地址形式，例如：`10.10.10.10`。
         * * CIDR形式，例如：`10.10.10.10/24`（无类域间路由，**24**表示了地址中前缀的长度，范围为**1~32**）。
         * @example `10.10.10.10`
         */
        SecurityIPList: string;
        /**
         * 新建单元节点的虚拟交换机（vSwitch） ID。
         * @example `vsw-bp1tg609m5j85****`
         */
        VSwitchID: string;
        /**
         * 新建单元节点的备节点可用区ID。可调用DescribeRegions查询。
         * * 如果和当前单元节点的**ZoneId**相同，则为单可用区部署。
         * * 如果和当前单元节点的**ZoneId**不同，则为多可用区部署。
         * @example `cn-hangzhou-j`
         */
        ZoneIDSlave1: string;
        /**
         * 新建单元节点的日志节点可用区ID。可调用DescribeRegions查询。
         * * 如果和当前单元节点的**ZoneId**相同，则为单可用区部署。
         * * 如果和当前单元节点的**ZoneId**不同，则为多可用区部署。
         * @example `cn-hangzhou-j`
         */
        ZoneIDSlave2: string;
        /**
         * 新建单元节点的数据同步链路规格。取值：
         * * **small**
         * * **medium**
         * * **large**
         * * **micro**
         * >关于各规格的区别，请参见[数据同步规格链路说明](~~26605~~)。
         * @example `medium`
         */
        DtsInstanceClass: string;
        /**
         * 新建单元节点的实例规格。取值详情请参见[主实例规格表](~~26312~~)。您也可以调用DescribeAvailableResource接口查询目标地域中可用的实例规格列表。
         * @example `rds.mysql.t1.small`
         */
        DbInstanceClass: string;
        /**
         * 新建单元节点的付费类型。取值：
         * * **Postpaid**：后付费（按量付费）。
         * * **Prepaid**：预付费（包年包月）。
         * >系统会自动生成订单并自动完成支付，无需手动确认支付。
         * @example `Postpaid`
         */
        PayType: string;
        /**
         * 新建单元节点的名称。命名规则如下：
         * - 长度为**2~255**个字符。
         * - 以中文、英文字母开头，可以包含数字、中文、英文、下划线（_）、短横线（-）。
         * - 不能以`http://`或`https://`开头。
         * @example `test`
         */
        DBInstanceDescription: string;
        /**
         * 新建单元节点的数据库引擎。当前仅支持**MySQL**。
         * @example `MySQL`
         */
        Engine: string;
        /**
         * 新建单元节点的数据库版本。取值：
         * * **8.0**
         * * **5.7**
         * * **5.6**
         * * **5.5**
         * @example `8.0`
         */
        EngineVersion: string;
        /**
         * 新建单元节点在同步时发生主键冲突采取的修复策略。取值：
         * * **overwrite**：覆盖目标节点中发生冲突的主键。
         * * **interrupt**：中止同步任务，报错并退出。
         * * **ignore**：隐藏当前节点中发生冲突的主键。
         * @example `overwrite`
         */
        DtsConflict: string;
        /**
         * 实例存储类型，取值：
         * * **local_ssd**：本地SSD盘（推荐）。
         * * **cloud_ssd**：SSD云盘（不推荐，部分地域已经停止售卖）。
         * * **cloud_essd**：ESSD PL1云盘。
         * * **cloud_essd2**：ESSD PL2云盘。
         * * **cloud_essd3**：ESSD PL3云盘。
         * 本参数的默认值根据**DBInstanceClass**参数中传的规格代码自动判断：
         * - 规格代码为本地盘规格：默认值为**local_ssd**。
         * - 规格代码为云盘规格：默认值为**cloud_essd**。
         * @example `cloud_essd2`
         */
        DBInstanceStorageType: string;
    }[];
    /**
     * 中心节点的高权限账号，可调用DescribeAccounts查询。
     * @example `test`
     */
    "CentralRdsDtsAdminAccount": string;
    /**
     * 中心节点的高权限账号对应的密码。
     * @example `Test12345`
     */
    "CentralRdsDtsAdminPassword": string;
    /**
     * 标签列表。
     */
    "Tag"?: {
        /**
         * 标签键。可以同时创建N个标签键，N的取值范围：**1~20**。不允许传入空字符串。
         * @example `testkey1`
         */
        Key: string;
        /**
         * 标签键对应的标签值。可以同时创建N个标签值，N的取值范围：**1~20**。允许传入空字符串。
         * @example `testvalue1`
         */
        Value: string;
    }[];
    /**
     * 资源组ID。
     * @example `rg-acfmy****`
     */
    "ResourceGroupId"?: string;
}
