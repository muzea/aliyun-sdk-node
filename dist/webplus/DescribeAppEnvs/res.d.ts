export interface DescribeAppEnvsResponse {
    /**
     * 总记录条数
     * @example `1`
     */
    TotalCount: number;
    /**
     * 请求ID
     * @example `D435EBFB-623E-47FB-A55A-C0F4C8B*****`
     */
    RequestId: string;
    /**
     * 响应消息，若成功请求为success
     * @example `success`
     */
    Message: string;
    /**
     * 查询页数
     * @example `1`
     */
    PageSize: number;
    /**
     * 每页查询数据量
     * @example `10`
     */
    PageNumber: number;
    AppEnvs: {
        /**
         * 环境列表
         */
        AppEnv: {
            /**
             * 更新时间
             * @example `1562557466136`
             */
            UpdateTime: number;
            /**
             * 环境总实例数
             * @example `1`
             */
            TotalInstances: number;
            /**
             * 部署包版本文件
             * @example `webplus-demo-java-0.1.0-SNAPSHOT-exec.jar`
             */
            PkgVersionStorageKey: string;
            /**
             * 环境上次变更ID
             * @example `wc-5d22c046b767ab0fc64*****`
             */
            LatestChangeId: string;
            /**
             * 环境运行状态
             * @example `RUNNING`
             */
            EnvStatus: string;
            /**
             * 环境创建时间
             * @example `1560246554242`
             */
            CreateTime: number;
            /**
             * 环境上次变更前状态
             * @example `RUNNING`
             */
            LastEnvStatus: string;
            /**
             * 部署版本包ID
             * @example `wp-5d1c0a5d913567334af*****`
             */
            PkgVersionId: string;
            /**
             * 环境描述信息
             * @example `This is an env.`
             */
            EnvDescription: string;
            /**
             * 环境是否正在变更
             * @example `false`
             */
            ApplyingChange: boolean;
            /**
             * 环境类型
             * @example `web`
             */
            EnvType: string;
            /**
             * 应用名称
             * @example `test`
             */
            AppName: string;
            /**
             * 创建环境的用户名
             * @example `test`
             */
            CreateUsername: string;
            /**
             * 环境所属的应用ID
             * @example `wa-5cef9f96dd351b61df0*****`
             */
            AppId: string;
            /**
             * 数据文件存储根目录
             * @example `wproot`
             */
            DataRoot: string;
            /**
             * 环境存储根目录
             * @example `resources/yourJava-java/environments/Test2/`
             */
            StorageBase: string;
            /**
             * 更新用户名
             * @example `test`
             */
            UpdateUsername: string;
            /**
             * 环境名称
             * @example `test`
             */
            EnvName: string;
            /**
             * 日志存储根目录
             * @example `logs/yourJava-java/environments/Test2/`
             */
            LogBase: string;
            /**
             * 技术栈名称
             * @example `Java 8 / Aliyun Linux 2.1903`
             */
            StackName: string;
            /**
             * 环境技术栈类型
             * @example `Java`
             */
            CategoryName: string;
            /**
             * 是否使用共享oss存储
             * @example `true`
             */
            UsingSharedStorage: boolean;
            /**
             * 变更提示
             * @example `Web+正在变更您的环境`
             */
            ChangeBanner: string;
            /**
             * 技术栈ID
             * @example `ws-6c937c98a9c0296d0c48*****`
             */
            StackId: string;
            /**
             * 部署版本名称
             * @example `20190703.095155`
             */
            PkgVersionLabel: string;
            /**
             * 环境ID
             * @example `we-5d22b3816f48e5478fd*****`
             */
            EnvId: string;
            /**
             * 环境是否正在取消变更
             * @example `false`
             */
            AbortingChange: boolean;
        }[];
    };
    /**
     * 响应代码，若成功请求为OK
     * @example `OK`
     */
    Code: string;
}
