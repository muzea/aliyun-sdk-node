export interface QueryPublicModelEngineRequest {
    /**
     * 输入查询引擎信息的FML语句，详情请参见[使用FML语句配置并管理数据表](~~298128~~)。
     * 当前仅支持show语句。
     * @example `show dim tables`
     */
    "Text": string;
    /**
     * DataWorks工作空间的ID。您可以登录[DataWorks控制台](https://workbench.data.aliyun.com/console)，进入工作空间管理页面获取ID。
     * @example `1234`
     */
    "ProjectId": string;
}
