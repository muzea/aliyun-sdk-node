export interface UpdateDISyncTaskRequest {
    /**
     * DataWorks工作空间的ID。您可以登录[DataWorks控制台](https://workbench.data.aliyun.com/console)，进入工作空间配置页面获取工作空间ID。
     * 该参数用来确定本次API调用操作使用的DataWorks工作空间。
     * @example `10000`
     */
    "ProjectId": number;
    /**
     * 修改的数据集成同步任务的任务类型。
     * 目前仅支持使用UpdateDISyncTask接口修改数据集成离线同步任务（DI_OFFLINE）。
     * @example `DI_OFFLINE`
     */
    "TaskType": string;
    /**
     * 更新已创建的数据集成同步任务通过脚本模式配置的任务内容。详情请参见[通过脚本模式配置任务](~~137717~~)。当前仅支持通过UpdateDISyncTask接口更新数据集成离线同步任务。如果您无需更新数据集成同步任务的配置内容，则可将该参数置为空。
     * @example `{"type":"job","version":"2.0","steps":[{"stepType":"mysql","parameter":{"envType":1,"datasource":"mysql_pub","column":["id","name","create_time","age","score","t_01"],"connection":[{"datasource":"mysql_pub","table":["u_pk"]}],"where":"","splitPk":"id","encoding":"UTF-8"},"name":"Reader","category":"reader"},{"stepType":"odps","parameter":{"partition":"pt=${bizdate}","truncate":true,"datasource":"odps_source","envType":1,"column":["id","name","create_time","age","score","t_01"],"emptyAsNull":false,"tableComment":"null","table":"u_pk"},"name":"Writer","category":"writer"}],"setting":{"executeMode":null,"errorLimit":{"record":""},"speed":{"concurrent":2,"throttle":false}},"order":{"hops":[{"from":"Reader","to":"Writer"}]}}`
     */
    "TaskContent"?: string;
    /**
     * 更新数据集成同步任务的配置参数，使用JSON格式。
     * 目前仅支持更新数据集成同步任务的配置参数ResourceGroup，即数据集成同步任务所使用的数据集成资源组标识（Identifier）。您可以调用[ListResourceGroups](~~173913~~)，获取资源组标识。
     * 如果您无需更新数据集成同步任务的配置参数，则可将TaskParam置为空。
     * @example `{"ResourceGroup":"S_res_group_XXX_XXXX"}`
     */
    "TaskParam"?: string;
    /**
     * 需要更新的数据集成同步任务的任务ID。您可以调用[ListFiles](~~173942~~)接口获取同步任务的ID。
     * @example `1000000`
     */
    "FileId": number;
}
