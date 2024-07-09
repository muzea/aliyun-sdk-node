export interface DescribeApplicationsResponse {
    /**
     * 查询结果总数
     * @example `1`
     */
    TotalCount: number;
    /**
     * 请求ID
     * @example `132BF104-A660-40C7-936B-F805967*****`
     */
    RequestId: string;
    /**
     * 响应消息，若成功请求为success
     * @example `success`
     */
    Message: string;
    /**
     * 查询页面大小
     * @example `20`
     */
    PageSize: number;
    Applications: {
        /**
         * 应用列表
         */
        Application: {
            /**
             * 应用中总环境数量
             * @example `2`
             */
            TotalEnvs: number;
            /**
             * 应用上次更新时间
             * @example `1562226969419`
             */
            UpdateTime: number;
            /**
             * 应用上次更新者
             * @example `webx-test`
             */
            UpdateUsername: string;
            /**
             * 运行中的环境数量
             * @example `2`
             */
            RunningEnvs: number;
            /**
             * 应用创建时间
             * @example `1562226969419`
             */
            CreateTime: number;
            /**
             * 应用类型
             * @example `Java`
             */
            CategoryName: string;
            /**
             * 使用OSS共享存储空间
             * @example `true`
             */
            UsingSharedStorage: string;
            /**
             * 应用创建者
             * @example `webx-test`
             */
            CreateUsername: string;
            /**
             * 应用名称
             * @example `appName`
             */
            AppName: string;
            /**
             * 应用ID
             * @example `wa-5d1af9c802470221ab7*****`
             */
            AppId: string;
            /**
             * 已终止的环境数量
             * @example `0`
             */
            TerminatedEnvs: number;
            /**
             * 应用描述
             * @example `This is an application.`
             */
            AppDescription: string;
        }[];
    };
    /**
     * 查询页面数量
     * @example `1`
     */
    PageNumber: number;
    /**
     * 响应代码，若成功请求为OK
     * @example `OK`
     */
    Code: string;
}
