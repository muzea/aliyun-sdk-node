export interface GenerateDISyncTaskConfigForCreatingRequest {
    /**
     * DataWorks工作空间的ID。您可以登录[DataWorks控制台](https://workbench.data.aliyun.com/console)，进入工作空间配置页面获取工作空间ID。
     * 该参数用来确定本次API调用操作使用的DataWorks工作空间。
     * @example `10000`
     */
    "ProjectId": number;
    /**
     * 使用异步方式创建数据集成同步任务的任务类型。取值如下：
     * - DI_REALTIME：表示实时同步任务。
     * - DI_SOLUTION：表示其他同步类型的同步任务。
     * 仅支持使用异步方式生成数据集成实时同步任务和其他同步类型的同步任务。
     *
     * @example `DI_REALTIME`
     */
    "TaskType": string;
    /**
     * 数据集成同步任务的脚本。
     * 目前支持创建的同步任务类型如下：
     * - 同步MySQL数据至MaxCompute。
     * - 同步MySQL数据至Kafka。
     * - 同步MySQL数据至Hologres。
     * SelectedTables用于多库模式选择同步表，Tables用于单库模式选择同步表。
     * - 当脚本中包含SelectedTables语句时，系统会使用SelectedTables语句中的表信息进行同步。
     * - 当脚本中包含Tables语句时，系统会使用Tables的字段信息进行同步。
     * 同步MySQL数据至MaxCompute，示例语句如下。
     * ```
     * {
     *   "type": "realtime",
     *   "version": "1.0",
     *   "setting": {
     *     "resourceGroup": "S_res_group_280749521950784_1623033752022",
     *     "taskType": "oneclick_to_odps"
     *   },
     *   "steps": [
     *     {
     *       "stepType": "mysql",
     *       "parameter": {
     *         "connection": [
     *           {
     *             "datasourceType": "mysql",
     *             "datasource": "mysql_pub1",
     *             "selectedTables": [
     *               {
     *                 "dbName": "mysql_db",
     *                 "schema": [
     *                   {
     *                     "tableInfos": [
     *                       {
     *                         "table": "molin_di_test_in_pk_v4"
     *                       }
     *                     ]
     *                   }
     *                 ]
     *               }
     *             ]
     *           }
     *         ]
     *       },
     *       "name": "Reader",
     *       "category": "reader"
     *     },
     *     {
     *       "stepType": "odps",
     *       "parameter": {
     *         "datasource": "odps_source"
     *       },
     *       "name": "Writer",
     *       "category": "writer"
     *     }
     *   ]
     * }
     * ```
     * 同步MySQL数据至Kafka，示例语句如下。
     * ```
     * {
     *   "type": "realtime",
     *   "version": "1.0",
     *   "setting": {
     *     "resourceGroup": "S_res_group_280749521950784_1623033752022",
     *     "taskType": "oneclick_to_kafka"
     *   },
     *   "steps": [
     *     {
     *       "stepType": "mysql",
     *       "parameter": {
     *         "connection": [
     *           {
     *             "datasourceType": "mysql",
     *             "datasource": "pkset_test",
     *             "selectedTables": [
     *               {
     *                 "dbName": "mysql_db",
     *                 "schema": [
     *                   {
     *                     "tableInfos": [
     *                       {
     *                         "table": "molin_di_test_in_pk_v4"
     *                       }
     *                     ]
     *                   }
     *                 ]
     *               }
     *             ]
     *           }
     *         ]
     *       },
     *       "name": "Reader",
     *       "category": "reader"
     *     },
     *     {
     *       "stepType": "kafka",
     *       "parameter": {
     *         "datasource": "azn_kafka"
     *       },
     *       "name": "Writer",
     *       "category": "writer"
     *     }
     *   ]
     * }
     * ```
     * 同步MySQL数据至Hologres，示例语句如下。
     * ```
     * {
     *   "type": "realtime",
     *   "version": "1.0",
     *   "setting": {
     *     "resourceGroup": "S_res_group_280749521950784_1623033752022",
     *     "taskType": "oneclick_to_holo"
     *   },
     *   "steps": [
     *     {
     *       "stepType": "mysql",
     *       "parameter": {
     *         "connection": [
     *           {
     *             "datasourceType": "mysql",
     *             "datasource": "mysql_pub",
     *             "selectedTables": [
     *               {
     *                 "dbName": "mysql_db",
     *                 "schema": [
     *                   {
     *                     "tableInfos": [
     *                       {
     *                         "table": "molin_di_test_in2_pk_v3"
     *                       }
     *                     ]
     *                   }
     *                 ]
     *               }
     *             ]
     *           }
     *         ]
     *       },
     *       "name": "Reader",
     *       "category": "reader"
     *     },
     *     {
     *       "stepType": "holo",
     *       "parameter": {
     *         "datasource": "holo"
     *       },
     *       "name": "Writer",
     *       "category": "writer"
     *     }
     *   ]
     * }
     * ```
     * @example `{  "type": "realtime",  "version": "1.0",  "setting": {  "resourceGroup": "S_res_group_280749521950784_1623033752022",  "taskType": "oneclick_to_odps"  },  "steps": [{ "stepType": "mysql", "parameter": { "connection": [ { "datasourceType": "mysql", "datasource": "mysql_pub1", "selectedTables": [ { "dbName": "mysql_db", "schema": [ { "tableInfos": [ { "table": "molin_di_test_in_pk_v4" }]  }  ]  }  ]  }  ]  },  "name": "Reader",  "category": "reader"  },  {  "stepType": "odps",  "parameter": {  "datasource": "odps_source"  },  "name": "Writer",  "category": "writer"  }  ]  }`
     */
    "TaskParam": string;
    /**
     * 幂等参数。用于避免多次调用导致操作重复。
     * @example `ABFUOEUOTRTRJKE`
     */
    "ClientToken"?: string;
}
