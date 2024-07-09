export interface ListMigrationsResponse {
    /**
     * 请求ID，一次请求的唯一标识。
     * @example `F9198AA3-9010-53D5-9714-DC4461427D3E`
     */
    RequestId: string;
    /**
     * 请求是否成功。取值如下：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 迁移任务列表。
         */
        Migrations: {
            /**
             * 主键ID。
             * @example `436064`
             */
            Id: number;
            /**
             * 任务名称。
             * @example `test_task_1638498642279`
             */
            Name: string;
            /**
             * 导入导出包的类型，取值如下：
             * - DWMA（标准格式）
             * - DATAWORKS_MODEL（标准格式）
             * - DATAWORKS_V2（专有云（V3.6.1-V3.11））
             * - DATAWORKS_V3（专有云（V3.12及以上））
             * DWMA和DATAWORKS_MODEL可通用
             * @example `DATAWORKS_MODEL`
             */
            PackageType: string;
            /**
             * 迁移任务的操作类型。
             * - IMPORT
             * - EXPORT
             * @example `EXPORT`
             */
            MigrationType: string;
            /**
             * 创建时间。
             * @example `123124123123123`
             */
            CreateTime: number;
            /**
             * 更新时间。
             * @example `123123123123123`
             */
            UpdateTime: number;
            /**
             * 创建人。
             * @example `123123****`
             */
            CreateUser: string;
            /**
             * 创建人名称。
             * @example `3h1_test`
             */
            CreateUserName: string;
            /**
             * 更新人。
             * @example `1231****`
             */
            UpdateUser: string;
            /**
             * 更新人名称。
             * @example `3h1_test`
             */
            UpdateUserName: string;
            /**
             * 任务所在DataWorks空间的ID。
             * @example `72132`
             */
            ProjectId: number;
            /**
             * 租户ID。
             * @example `16307`
             */
            TenantId: number;
            /**
             * 导入导出迁移任务的执行状态。取值如下：
             * - INIT：任务为初始状态。
             * - EDITING：任务在编辑中。
             * - RUNNING，任务在运行中。
             * - FAILURE，任务运行失败。
             * - SUCCESS，任务运行成功。
             * @example `SUCCESS`
             */
            Status: string;
            /**
             * 错误信息。
             * @example `An internal system error occurred. datasource kafka region is not cn-chengdu, can't open network for it`
             */
            Message: string;
            /**
             * 导出任务包的下载链接。您可以通过该链接下载导出任务。
             * @example `http://geoip-sdk-user.oss-cn-zhangjiakou.aliyuncs.com/product/v1/ipv4/trace/v1.20220424123842.dex?Expires=1650780849&OSSAccessKeyId=XXXXXXeF4Lv5j&Signature=qxxxxx`
             */
            DownloadUrl: string;
            /**
             * 导出任务的描述信息。
             * @example `自动化测试创建`
             */
            Description: string;
        }[];
        /**
         * 当前的页数。
         * @example `1`
         */
        PageNumber: number;
        /**
         * 每页显示的条数，默认为10条，最大为50条。
         * @example `10`
         */
        PageSize: number;
        /**
         * 总记录数。
         * @example `20`
         */
        TotalCount: number;
    };
}
