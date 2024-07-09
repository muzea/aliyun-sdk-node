export interface TestNetworkConnectionRequest {
    /**
     * 目标数据源所在的DataWorks工作空间ID。您可以调用[ListProjects](~~178393~~)接口获取工作空间ID。
     * @example `10000`
     */
    "ProjectId": number;
    /**
     * 目标数据源的名称。
     * @example `mysql_name`
     */
    "DatasourceName": string;
    /**
     * 目标数据源所属的环境。取值如下：
     * - 0：开发环境。
     * - 1：生产环境。
     * @example `1`
     */
    "EnvType": string;
    /**
     * 目标数据源所使用的资源组的标识（Identifier）。您可以调用[ListResourceGroups](~~173913~~)接口获取资源组的标识（Identifier）。
     * @example `S_res_group_2XXXX4_1619100XXXXX`
     */
    "ResourceGroup": string;
}
