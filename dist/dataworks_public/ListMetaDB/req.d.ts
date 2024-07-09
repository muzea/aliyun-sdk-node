export interface ListMetaDBRequest {
    /**
     * DataWorks工作空间的ID。您可以调用[ListProjects](~~178393~~)，获取工作空间ID。
     * @example `123`
     */
    "ProjectId": number;
    /**
     * 数据类型，当前仅支持取值为emr。
     * @example `emr`
     */
    "DataSourceType": string;
    /**
     * 页码数。
     * @example `1`
     */
    "PageNum"?: number;
    /**
     * 每页显示的条数，默认为10条，最大为100条。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * EMR集群的ID。您可以登录[EMR的控制台](https://emr.console.aliyun.com/?spm=a2c4g.11186623.0.0.965cc5c2GeiHet#/cn-hangzhou)，获取集群ID。
     * @example `abc`
     */
    "ClusterId"?: string;
}
