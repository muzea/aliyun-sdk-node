export interface RevokeTablePermissionRequest {
    /**
     * 需要撤销权限的MaxCompute表所属的DataWorks工作空间ID。您可以登录DataWorks控制台，进入工作空间配置页面，查询工作空间ID。
     * @example `12345`
     */
    "WorkspaceId": number;
    /**
     * 需要撤销权限的表所在的MaxCompute项目名称。您可以登录DataWorks控制台，进入工作空间配置页面，查询DataWorks工作空间绑定的MaxCompute项目名称。
     * @example `aMaxcomputeProjectName`
     */
    "MaxComputeProjectName": string;
    /**
     * 需要撤销权限的MaxCompute表名称。您可以调用[SearchMetaTables](~~173919~~)接口，获取MaxCompute表名称。
     * @example `aTableName`
     */
    "TableName": string;
    /**
     * 需要撤销的表的操作权限，一次撤销多种操作权限时使用逗号（,）分隔。
     * 目前仅支持撤销MaxCompute表的Select、Describe、Download等操作权限。
     * @example `Select,Describe`
     */
    "Actions": string;
    /**
     * 撤销表权限的云账号名称。账号格式与MaxCompute的账号格式一致。
     * - 主账号为ALIYUN$+账号名。
     * - 子账号为RAM$+账号名。
     * 该参数与RevokeUserId参数配置一个即可。如果同时配置了该参数与RevokeUserId参数，但二者取值不同，则系统会以RevokeUserId参数的配置内容为准。
     * @example `RAM$dataworks_3h1_1:stsramuser`
     */
    "RevokeUserName"?: string;
    /**
     * 撤销表权限的阿里云账号ID。您可以登录DataWorks控制台，进入安全设置页面获取账号ID。
     * 该参数与RevokeUserName参数配置一个即可。如果同时配置了该参数与RevokeUserName参数，但二者取值不同，则系统会以RevokeUserId参数的配置为准。
     * @example `267842600408993176`
     */
    "RevokeUserId"?: string;
}
