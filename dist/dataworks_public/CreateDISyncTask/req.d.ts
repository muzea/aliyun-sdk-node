export interface CreateDISyncTaskRequest {
    /**
     * DataWorks工作空间的ID。您可以登录[DataWorks控制台](https://workbench.data.aliyun.com/console)，进入工作空间配置页面获取工作空间ID。
     * @example `10000`
     */
    "ProjectId": number;
    /**
     * 创建的数据集成同步任务的任务类型。
     * 目前支持使用CreateDISyncTask接口创建数据集成离线同步任务（DI_OFFLINE），实时同步任务（DI_REALTIME）和解决方案（DI_SOLUTION）。
     * @example `DI_OFFLINE`
     */
    "TaskType": string;
    /**
     * 使用脚本模式配置数据集成离线同步任务的配置内容。详情请参见[通过脚本模式配置任务](~~137717~~)。
     * @example `{"type":"job","version":"2.0","steps":[{"stepType":"mysql","parameter":{"envType":1,"datasource":"mysql_pub","column":["id","name","create_time","age","score","t_01"],"connection":[{"datasource":"mysql_pub","table":["u_pk"]}],"where":"","splitPk":"id","encoding":"UTF-8"},"name":"Reader","category":"reader"},{"stepType":"odps","parameter":{"partition":"pt=${bizdate}","truncate":true,"datasource":"odps_source","envType":1,"column":["id","name","create_time","age","score","t_01"],"emptyAsNull":false,"tableComment":"null","table":"u_pk"},"name":"Writer","category":"writer"}],"setting":{"executeMode":null,"errorLimit":{"record":""},"speed":{"concurrent":2,"throttle":false}},"order":{"hops":[{"from":"Reader","to":"Writer"}]}}`
     */
    "TaskContent": string;
    /**
     * 数据集成同步任务的配置参数。目前支持配置如下参数：
     * - FileFolderPath：表示数据集成同步任务的存放路径。
     * - ResourceGroup：表示数据集成同步任务所使用的数据集成资源组标识（Identifier）。您可以调用[ListResourceGroups](~~173913~~)，获取资源组标识。
     * @example `{"FileFolderPath":"业务流程/XXX/数据集成","ResourceGroup":"S_res_group_XXX_XXXX"}`
     */
    "TaskParam"?: string;
    /**
     * 创建的数据集成同步任务的名称。
     * @example `new_di_task`
     */
    "TaskName"?: string;
    /**
     * 幂等参数，该参数可为空。
     * @example `0000-ABCD-EFG****`
     */
    "ClientToken"?: string;
}
