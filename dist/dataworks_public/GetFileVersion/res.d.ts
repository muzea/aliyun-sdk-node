export interface GetFileVersionResponse {
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
     * 本次调用的唯一ID。出现错误后，您可以根据该ID排查问题。
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
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 文件的版本详情。
     */
    Data: {
        /**
         * 生成本次文件版本的文件代码。
         * @example `SHOW TABLES;`
         */
        FileContent: string;
        /**
         * 本次文件版本是否为当前生产环境的最新版本。
         * - true：是最新版本。
         * - false：不是最新版本。
         * @example `true`
         */
        IsCurrentProd: boolean;
        /**
         * 文件版本当前的状态，取值如下：
         * - COMMITTING（提交中）
         * - COMMITTED或CHECK_OK（已提交）
         * - PACKAGED（准备发布）
         * - DEPLOYING（发布中）
         * - DEPLOYED（已发布）
         * - CANCELLED（取消发布）
         * @example `COMMITTED`
         */
        Status: string;
        /**
         * 本次文件版本生成时的调度配置。
         * @example `{"cycleType":0,"cronExpress":"00 05 00 * * ?"}`
         */
        NodeContent: string;
        /**
         * 生成本次文件版本的阿里云用户ID。
         * @example `7384234****`
         */
        CommitUser: string;
        /**
         * 本次文件版本的说明。
         * @example `第二次版本提交`
         */
        Comment: string;
        /**
         * 生成本次文件版本的文件基本信息。
         * @example `{"fileName":"ods_user_info_d","fileType":10}`
         */
        FilePropertyContent: string;
        /**
         * 生成本次文件版本的文件名。
         * @example `ods_user_info_d`
         */
        FileName: string;
        /**
         * 文件所属的功能模块，取值如下：
         * - 0：NORMAL（数据开发）
         * - 1：MANUAL（手动任务）
         * - 2：MANUAL_BIZ（手动工作流）
         * - 3：SKIP（数据开发的空跑调度）
         * - 10：ADHOCQUERY（临时查询）
         * - 30：COMPONENT（组件管理）
         * @example `0`
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
         * 文件版本生成的毫秒时间戳。
         * @example `1593881265000`
         */
        CommitTime: number;
        /**
         * 文件版本生成时对应的调度任务ID。
         * @example `3000001`
         */
        NodeId: number;
    };
}
