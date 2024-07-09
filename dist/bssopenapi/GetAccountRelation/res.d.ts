export interface GetAccountRelationResponse {
    /**
     * 提示信息
     * @example `提示信息`
     */
    Message: string;
    /**
     * 请求标识
     * @example `RequestId`
     */
    RequestId: string;
    /**
     * data
     */
    Data: {
        /**
         * 关联
         * @example `关联id`
         */
        Id: number;
        /**
         * 父账号uid
         * @example `主账号的阿里云UID`
         */
        ParentUserId: number;
        /**
         * 子账号uid
         * @example `子账号的阿里云账号UID`
         */
        ChildUserId: number;
        /**
         * 账号关联开始时间
         * @example `2021-11-01`
         */
        StartTime: number;
        /**
         * 账号关联结束时间
         * @example `2021-12-01`
         */
        EndTime: number;
        /**
         * 关联关系类型
         * @example `enterprise_group`
         */
        Type: string;
        /**
         * 账号关联状态：
         * RELATED 【已建立关联】
         * CONFIRMING 【待对方确认】
         * REJECTED 【对方拒绝】
         * CONNECTION_CANCELED 【财务子账号取消申请】
         * CONNECTION_MASTER_CANCEL【财务主账号取消邀请】
         * CHANGE_CONFIRMING 【关系变更待确认中】
         * INITIAL 【初始新建关联状态】
         * @example `RELATED 【已建立关联】`
         */
        Status: string;
        /**
         * 账号关联更新时间
         * @example `2021-12-01`
         */
        GmtModified: number;
    };
    /**
     * 请求状态码
     * @example `200`
     */
    Code: string;
    /**
     * 请求是否成功标识
     * @example `true`
     */
    Success: boolean;
}
