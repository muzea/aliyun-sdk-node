export interface ImportDataSourcesRequest {
    /**
     * DataWorks工作空间的ID。您可以登录[DataWorks控制台](https://workbench.data.aliyun.com/console)，进入工作空间配置页面获取工作空间ID。
     * @example `10000`
     */
    "ProjectId": number;
    /**
     * 待导入数据源的数据源内容数组。其中Name，DataSourceType，SubType，Description，Content，EnvType参数为必填参数。参数的详情请参见[CreateDataSource](~~211429~~)接口。
     * @example `[{"SubType":"","DataSourceType":"mysql","EnvType":1,"Name":"mysql_dms2","Description":"aaa","Content":"{\"database\":\"mysql_chengdu_old\",\"password\":\"***\",\"instanceName\":\"rm-2vcrckb37163g7l3w\",\"regionId\":\"cn-chengdu\",\"tag\":\"rds\",\"rdsOwnerId\":\"333\",\"username\":\"mysql_chengdu2\"}"},{"SubType":"","DataSourceType":"mysql","EnvType":1,"Name":"mysql_dms2","Description":"aaa","Content":"{\"database\":\"mysql_chengdu_old\",\"password\":\"***\",\"instanceName\":\"rm-2vcrckb37163g7l3w\",\"regionId\":\"cn-chengdu\",\"tag\":\"rds\",\"rdsOwnerId\":\"143\",\"username\":\"mysql_chengdu2\"}"}]`
     */
    "DataSources": string;
}
