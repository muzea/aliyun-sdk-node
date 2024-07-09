export interface ListFileVersionsResponse {
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 错误信息。
     * @example `The connection does not exist.`
     */
    ErrorMessage: string;
    /**
     * 请求ID。
     * @example `0000-ABCD-EFG****`
     */
    RequestId: string;
    /**
     * 错误码。
     * @example `Invalid.Tenant.ConnectionNotExists`
     */
    ErrorCode: string;
    /**
     * 调用是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 文件的版本列表。
     */
    Data: {
        /**
         * 当前数据页的页码。
         * @example `1`
         */
        PageNumber: number;
        /**
         * 当前数据页的大小。
         * @example `10`
         */
        PageSize: number;
        /**
         * 满足查询条件的数据总条数。
         * @example `13`
         */
        TotalCount: number;
        /**
         * 文件的版本详情。
         */
        FileVersions: {
            /**
             * 生成本次文件版本的文件代码。
             * @example `SHOW TABLES;`
             */
            FileContent: string;
            /**
             * 文件版本当前的状态，包括COMMITTING（提交中）、COMMITTED或CHECK_OK（已提交）、PACKAGED（准备发布）、DEPLOYING（发布中）、DEPLOYED（已发布）和CANCELLED（取消发布）。
             * @example `COMMITTED`
             */
            Status: string;
            /**
             * 本次文件版本是否为当前生产环境的最新版本。
             * @example `false`
             */
            IsCurrentProd: boolean;
            /**
             * 生成本次文件版本的阿里云用户UID。
             * @example `73842342****`
             */
            CommitUser: string;
            /**
             * 生成本次文件版本的调度配置。
             * @example `{"cycleType":0,"cronExpress":"00 05 00 * * ?"}`
             */
            NodeContent: string;
            /**
             * 本次文件版本的说明。
             * @example `第二次版本提交`
             */
            Comment: string;
            /**
             * 生成本次文件版本的文本基本信息。
             * @example `{"fileName":"ods_user_info_d","fileType":10}`
             */
            FilePropertyContent: string;
            /**
             * 生成本次文件版本的文件名。
             * @example `ods_user_info_d`
             */
            FileName: string;
            /**
             * 文件所属的功能模块，包括NORMAL（数据开发）、MANUAL（手动任务）、MANUAL_BIZ（手动工作流）、SKIP（数据开发的空跑调度）、ADHOCQUERY（临时查询）和COMPONENT（组件管理）。
             * @example `NORMAL`
             */
            UseType: string;
            /**
             * 本次文件版本的变更类型，包括CREATE、UPDATE和DELETE。
             * @example `UPDATE`
             */
            ChangeType: string;
            /**
             * 文件的版本。
             * @example `2`
             */
            FileVersion: number;
            /**
             * 生成文件版本的毫秒时间戳。
             * @example `1593881265000`
             */
            CommitTime: number;
            /**
             * 生成文件版本时对应的调度任务ID。
             * @example `1234`
             */
            NodeId: number;
        }[];
    };
}
