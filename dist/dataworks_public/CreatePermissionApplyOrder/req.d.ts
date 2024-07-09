export interface CreatePermissionApplyOrderRequest {
    /**
     * 申请权限的阿里云账户UID，当同时为多个账号申请权限时，使用逗号（,）隔开。
     * @example `267842600408993176,267842600408993177`
     */
    "ApplyUserIds": string;
    /**
     * 申请权限的到期时间。此处需要输入一个unix时间戳，不输入默认到期时间为2065年1月1日。
     * 如果MaxCompute项目未开启LabelSecurity，或申请的表字段安全等级为0或小于等于申请账号的安全等级时，只能申请永久权限。
     * 您可以进入DataWorks工作空间的管理页面，在MaxCompute引擎的高级配置页面，查看是否启动列级别访问控制。
     * 您可以进入DataWorks工作空间，在数据地图查看字段的安全等级，在成员管理页面查看账号的安全等级。
     * @example `1617115071885`
     */
    "Deadline"?: number;
    /**
     * 申请的原因。用于管理员进行评估审批。
     * @example `I need to use this table`
     */
    "ApplyReason": string;
    /**
     * 申请权限的MaxCompute项目名称。
     * @example `aMaxcomputeProjectName`
     */
    "MaxComputeProjectName": string;
    /**
     * 申请权限的MaxCompute项目所属的DataWorks工作空间ID，您可以进入DataWorks工作空间配置页面，查询工作空间ID。
     * @example `12345`
     */
    "WorkspaceId": number;
    /**
     * 申请单类型。目前仅支持取值为1，表示对象ACL权限申请。
     * @example `1`
     */
    "OrderType"?: number;
    /**
     * 申请权限的计算引擎类型。目前仅支持取值为odps，表示仅支持申请MaxCompute计算引擎的权限。
     * @example `odps`
     */
    "EngineType"?: string;
    /**
     * 申请对象列表。
     */
    "ApplyObject": {
        /**
         * 申请的权限类型，一次申请多种类型权限时使用逗号（,）分隔。目前仅支持申请Select、Describe、Drop、Alter、Update、Download类型。
         * @example `Select,Describe`
         */
        Actions: string;
        /**
         * 字段对象列表。
         */
        ColumnMetaList: {
            /**
             * 申请目标列的权限，此处输入列名称。如果申请全表的权限，则需要输入表的所有列名。
             * 仅当MaxCompute项目开启了labelSecurity，才可以申请部分列的权限。如果MaxCompute项目没有开启labelSecurity，则只能申请全表的权限。
             * @example `aColumnName`
             */
            Name: string;
        }[];
        /**
         * 申请的对象。目前仅支持申请MaxCompute表的权限，此处需要输入目标表的名称。
         * @example `aTableName`
         */
        Name: string;
    }[];
}
