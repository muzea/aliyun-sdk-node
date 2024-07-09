export interface GetDeploymentResponse {
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
     * @example `true`
     */
    Success: boolean;
    /**
     * 发布包的详情。
     */
    Data: {
        /**
         * 发布包的详情。
         */
        Deployment: {
            /**
             * 发布包当前的状态，包括0（就绪）、1（成功）和2（失败）。
             * @example `1`
             */
            Status: number;
            /**
             * 当发布包执行失败（status为2）后，该字段记录具体的错误信息。
             * @example `成功`
             */
            ErrorMessage: string;
            /**
             * 执行本次发布所在的环境，包括0（本地）和1（开发环境）。
             * @example `0`
             */
            FromEnvironment: number;
            /**
             * 发布文件信息的目标环境，包括1（开发环境）和2（生产环境）。
             * @example `1`
             */
            ToEnvironment: number;
            /**
             * 当前发布包涉及节点的检查状态，当发布包的目标环境是开发环境（toEnviroment=1）时，只有发布包的Status为1并且CheckingStatus为空时，才可以继续进行文件到生产环境的发布。
             * - 7：检查未通过
             * - 8：正在处于检查中的状态
             * @example `7`
             */
            CheckingStatus: number;
            /**
             * 发布包生成的毫秒时间戳。
             * @example `1593877765000`
             */
            CreateTime: number;
            /**
             * 发布包执行者的阿里云用户ID。
             * @example `2003****`
             */
            HandlerId: string;
            /**
             * 发布包创建者的阿里云用户ID。
             * @example `20030****`
             */
            CreatorId: string;
            /**
             * 发布包开始执行的毫秒时间戳。
             * @example `1593877765000`
             */
            ExecuteTime: number;
            /**
             * 发布包的名称，显示在任务发布>发布包列表页面。
             * @example `ods_user_info_d-2020-07-04_20030****`
             */
            Name: string;
        };
        /**
         * 发布项列表。
         */
        DeployedItems: {
            /**
             * 文件的ID。
             * @example `507642378`
             */
            FileId: number;
            /**
             * 文件的版本。
             * @example `7`
             */
            FileVersion: number;
            /**
             * * UNPUBLISHED(0): 未发布
             * * SUCCESS(1): 发布成功
             * * ERROR(2): 发布失败
             * * CLONED(3): 克隆成功
             * * DEPLOY_ERROR(4): 发布失败
             * * CLONING(5): 克隆中
             * * REJECT(6): 发布驳回
             * @example `1`
             */
            Status: number;
        }[];
    };
}
