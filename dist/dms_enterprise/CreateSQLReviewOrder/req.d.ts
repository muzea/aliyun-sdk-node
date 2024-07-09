export interface CreateSQLReviewOrderRequest {
    /**
     * 业务背景，描述任务的原因或目标，以减少沟通成本。
     * @example `test`
     */
    "Comment": string;
    /**
     * 相关人列表。设置的相关人可查看工单，并协同工作，非相关人员不能查看工单（管理员、DBA除外）。
     */
    "RelatedUserList"?: number[];
    /**
     * 工单参数。
     */
    "Param": {
        /**
         * 项目名称。
         * @example `xxx业务SQL审核`
         */
        ProjectName: string;
        /**
         * 数据库ID，可调用[SearchDatabases](~~141876~~)接口获取。
         * > 当前仅支持物理库，暂不支持逻辑库。
         * @example `123321`
         */
        DbId: number;
        /**
         * SQL审核文件列表。审核的内容支持多个文件。
         */
        AttachmentKeyList: string[];
    };
    /**
     * 租户ID。您可以调用[GetUserActiveTenant](~~198073~~)或[ListUserTenants](~~198074~~)接口获取该参数。
     * @example `1`
     */
    "Tid"?: number;
}
