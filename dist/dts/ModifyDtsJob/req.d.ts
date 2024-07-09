export interface ModifyDtsJobRequest {
    /**
     * 实例所在区域，详情请参见[支持的地域列表](~~141033~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 同步实例ID。
     * @example `dtsbi6e22ay243****`
     */
    "DtsInstanceId": string;
    /**
     * 指定同步方向，取值：
     * - **Forward**：正向。
     * - **Reverse**：反向。
     * > - 默认取值为**Forward**。
     * - 只有当数据同步实例的同步拓扑为双向同步时，才需要传入本参数。
     * @example `Forward`
     */
    "SynchronizationDirection"?: string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。
     * @example `0c593ea1-3bea-11e9-b96b-88e9fe63****`
     */
    "ClientToken"?: string;
    /**
     * 修改后的同步对象，格式为JSON串。详细定义，请参见[迁移、同步或订阅对象说明](~~209545~~)。
     * > - 原DbList会被新传入的DbList覆盖，请确保新传入的DbList数据中包含所有需要同步的对象，否则可能会导致同步对象丢失，请谨慎修改。
     * - 建议您提前调用[DescribeDtsJobDetail](~~208925~~)查询当前同步对象，然后根据业务需要输入修改后的同步对象。例如，当前对象为表A、B，现需要新增对象表C，那么您需要在本参数同时传入表A、B、C。
     * - DbList最多支持传入10 MB的数据。
     * @example `{"dtstest":{"name":"dtstest","all":true}}`
     */
    "DbList"?: any;
    /**
     * T+1业务专用的字段，ETL算子，为业务专用字段。
     * @example `{
      "configKeyMap": [
        {
          "moduleCode": "03",
          "etlOperatorColumnReference": "etlOperatorColumnReference",
          "etlOperatorSetting": "etlOperatorSetting"
        },
        {
          "moduleCode": "07",
          "etlOperatorColumnReference": "etlOperatorColumnReference",
          "etlOperatorSetting": "etlOperatorSetting"
        }
      ],
      "amp.increment.replicator.compare.all.columns.enable": false,
      "srcNetType": "VPC",
      "etlOperatorColumnReference": {
        "MODIFY_TIME": [
          {
            "datasynchron.test_timing_user_000": "user_create_date"
          },
          {
            "datasynchron.test_timing_user_001": "user_create_date"
          },
          {
            "datasynchron.test_timing_user_002": "user_create_date"
          },
          {
            "datasynchron.test_timing_user_003": "user_create_date"
          }
        ]
      },
      "destNetType": "VPC",
      "originalSrcDbInst": "sg-sit-db2-primary.mysql.polardb.rds.aliyuncs.com",
      "etlOperatorSetting": "adb_time_travel",
      "sjobUseJobTask": "1",
      "srcVpcNetMappingInst": "172.19.XXX.XXX:4261",
      "destVpcNetMappingInst": "172.19.XXX.XXX:4260",
      "useJobTask": "1"
    }`
     */
    "EtlOperatorColumnReference"?: string;
    /**
     * 指示修改同步任务的方式，不填默认修改同步对象；填写UPDATE_RESERVED为修改预留参数。
     * @example `UPDATE_RESERVED`
     */
    "ModifyTypeEnum"?: string;
    /**
     * DTS预留参数，更新方式为新增而非覆盖，格式为MAP JSON串，您可以传入本参数实现特殊需求（例如是否自动启动预检查）。更多信息，请参见[MigrationReserved参数说明](~~176470~~)。
     * @example `{\"srcHostPorts\":\"\",\"whitelist.dms.online.ddl.enable\":false,\"filterDDL\":false,\"sqlparser.dms.original.ddl\":true,\"srcOracleType\":\"sid\",\"maxRetryTime\":43200,\"destSSL\":\"0\",\"destOracleType\":\"sid\",\"srcSSL\":\"0\",\"dbListCaseChangeMode\":\"default\",\"SourceEngineVersion\":\"8.0.18\",\"srcNetType\":\"VPC\",\"destNetType\":\"VPC\",\"srcVpcNetMappingInst\":\"172.16.1**.**:10803\",\"destVpcNetMappingInst\":\"172.16.1**.**:11077\",\"useJobTask\":\"1\"}`
     */
    "Reserved"?: string;
    /**
     * 同步文件的OSS地址。
     * @example `http://db-list-os-file.oss-cn-shanghai.aliyuncs.com/8e42_12185******43989_************`
     */
    "FileOssUrl"?: string;
    /**
     * 需要过滤的表名。
     * @example `testtable`
     */
    "FilterTableName"?: string;
    /**
     * 是否执行库表结构迁移或初始化，取值：
     * - **true**：是。
     * - **false**：否。
     * @example `true`
     */
    "StructureInitialization"?: boolean;
    /**
     * 是否执行全量数据迁移或全量数据初始化，取值：
     * - **true**：是。
     * - **false**：否。
     * @example `true`
     */
    "DataInitialization"?: boolean;
    /**
     * 是否执行增量数据迁移或同步，取值：
     * - **false**：否。
     * - **true**：是。
     * @example `true`
     */
    "DataSynchronization"?: boolean;
    /**
     * 同步任务的ID，可调用[DescribeDtsJobs](~~209702~~)查询。
     * @example `fpx1149rw7p***`
     */
    "DtsJobId"?: string;
    /**
     * 是否无感集成（Zero-ETL）任务，取值：
     * - **true**：是。
     * - **false**：否。
     * @example `false`
     */
    "ZeroEtlJob"?: boolean;
    /**
     * 资源组ID。
     * @example `rg-acfmzawhxxc****`
     */
    "ResourceGroupId"?: string;
}
