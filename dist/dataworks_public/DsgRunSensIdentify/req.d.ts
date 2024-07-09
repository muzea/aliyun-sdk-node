export interface DsgRunSensIdentifyRequest {
    /**
     * 租户ID。您可登录[DataWorks控制台](https://workbench.data.aliyun.com/console)，进入数据开发（DataStudio）页面，单击右上方当前登录用户名称，选择菜单 > 用户信息，获取租户ID。
     * @example `10241024`
     */
    "TenantId": string;
    /**
     * 指定元数据扫描的参数对象列表。
     */
    "EsMetaParams"?: {
        /**
         * 数据源类型，取值如下：
         * - ODPS.ODPS
         * - EMR
         * - HOLO.POSTGRES
         * @example `ODPS.ODPS`
         */
        DbType: string;
        /**
         * 集群ID。根据您自己的数据源集群获取。
         * @example `101010`
         */
        ClusterId: string;
        /**
         * DataWorks工作空间的名称。您可以登录[DataWorks控制台](https://workbench.data.aliyun.com/console)，进入工作空间配置页面获取工作空间名称。
         * @example `1666676756691024`
         */
        ProjectName: string;
        /**
         * Schema名称。
         * @example `default`
         */
        SchemaName: string;
        /**
         * 表名称。
         * @example `table1`
         */
        TableName: string;
        /**
         * 表名称列表。
         */
        TableNameList: string[];
        /**
         * 操作者的用户名。建议填写您的阿里云账号名称。
         * @example `xxx-uat`
         */
        User: string;
        /**
         * 实例ID。根据您的数据源获取。
         * @example `hgprecn-cn-9lb37k181024`
         */
        InstanceId: number;
    }[];
}
