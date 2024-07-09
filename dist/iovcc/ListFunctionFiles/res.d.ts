export interface ListFunctionFilesResponse {
    /**
     * 请求ID
     * @example `629586FE-CB2E-4742-995E-121F952CEB72`
     */
    RequestId: string;
    /**
     * 文件列表
     */
    FileList: {
        /**
         * 分页信息
         */
        Pagination: {
            /**
             * 目标页号
             * @example `1`
             */
            PageIndex: number;
            /**
             * 记录总页数
             * @example `2`
             */
            TotalPageCount: number;
            /**
             * 每页所显示的项数
             * @example `10`
             */
            PageSize: number;
            /**
             * 记录总数
             * @example `11`
             */
            TotalCount: number;
        };
        /**
         * 文件数组
         */
        Files: {
            /**
             * 文件状态。0：正常；1：已删除
             * @example `0`
             */
            Status: number;
            /**
             * 生成环境的部署时间，精确到毫秒的Unix时间戳
             * > 只有当生成环境的部署状态为已部署，才可获取到该值，否则该字段不返回。
             * @example `1535604251000`
             */
            ProductionDeployTime: number;
            /**
             * 生成环境的部署状态。0：未部署，1：已部署
             * @example `1`
             */
            ProductionDeployStatus: number;
            /**
             * 文件描述
             * @example `This is description`
             */
            Description: string;
            /**
             * 沙箱环境的部署时间，精确到毫秒的Unix时间戳
             * > 只有当沙箱环境的部署状态为已部署，才可获取到该值，否则该字段不返回。
             * @example `1535604251000`
             */
            SandboxDeployTime: number;
            /**
             * 创建时间，精确到毫秒的Unix时间戳
             * @example `1535604251000`
             */
            GmtCreate: number;
            /**
             * 沙箱环境的部署状态。0：未部署，1：已部署
             * @example `1`
             */
            SandboxDeployStatus: number;
            /**
             * 修改时间，精确到毫秒的Unix时间戳
             * @example `1535604251000`
             */
            GmtModified: number;
            /**
             * 文件名
             * @example `hello.zip`
             */
            Name: string;
            /**
             * 文件内容ID
             * @example `1`
             */
            ContentId: number;
            /**
             * 文件ID
             * @example `1`
             */
            Id: number;
        }[];
    };
}
