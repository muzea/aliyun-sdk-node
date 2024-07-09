export interface ListFilesResponse {
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
     * 请求ID。用于出现错误后排查问题。
     * @example `0000-ABCD-EFG`
     */
    RequestId: string;
    /**
     * 错误码。
     * @example `Invalid.Tenant.ConnectionNotExists`
     */
    ErrorCode: string;
    /**
     * 调用是否成功。取值如下：
     * - true：调用成功。
     * - false：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 满足条件的文件列表。
     */
    Data: {
        /**
         * 请求的数据页数。
         * @example `1`
         */
        PageNumber: number;
        /**
         * 每页显示的数据条数。
         * @example `10`
         */
        PageSize: number;
        /**
         * 满足条件的数据总条数。
         * @example `13`
         */
        TotalCount: number;
        /**
         * 文件详情。
         */
        Files: {
            /**
             * 文件当前的提交状态，包括0（未提交最新的代码）和1（已提交最新的代码）。
             * @example `1`
             */
            CommitStatus: number;
            /**
             * 文件是否开启自动解析功能。取值如下：
             * - true：文件会自动解析代码。
             * - false：文件不会自动解析代码。
             * 该参数与[DataWorks控制台](https://workbench.data.aliyun.com/console)中，数据开发任务的“调度配置>调度依赖”选择“同周期”时的“代码解析”对应。
             * @example `true`
             */
            AutoParsing: boolean;
            /**
             * 文件责任人的阿里云用户ID。
             * @example `3872572****`
             */
            Owner: string;
            /**
             * 文件创建时间的毫秒时间戳。
             * @example `1593950832000`
             */
            CreateTime: number;
            /**
             * 文件的代码类型。常用的代码及其对应的文件类型包括6（Shell）、10（ODPS SQL）、11（ODPS MR）、23（数据集成）、24（ODPS Script）、99（虚拟节点）、221（PyODPS 2）、225（ODPS Spark）、227（EMR Hive）、228（EMR Spark）、229（EMR Spark SQL）、230（EMR MR）、239（OSS对象检查）、257（EMR Shell）、258（EMR Spark Shell）、259（EMR Presto）、260（EMR Impala）、900（实时同步）、1089（跨租户节点）、1091（Hologres开发）、1093（Hologres SQL）、1100（赋值节点）、1221（PyODPS 3）。
             * @example `10`
             */
            FileType: number;
            /**
             * 文件当前已经提交的最新版本号。
             * @example `2`
             */
            CurrentVersion: number;
            /**
             * 文件所属的业务流程ID。该字段已废弃，请使用BusinessId字段。
             * @example `300000`
             */
            BizId: number;
            /**
             * 最近一次编辑文件的用户阿里云用户ID。
             * @example `38748246285727`
             */
            LastEditUser: string;
            /**
             * 文件的名称。
             * @example `ods_user_info_d`
             */
            FileName: string;
            /**
             * 文件对应的任务执行时所使用的数据源名称。
             * @example `odps_source`
             */
            ConnectionName: string;
            /**
             * 文件所属的功能模块。取值如下：
             * - NORMAL：数据开发。
             * - MANUAL：手动任务。
             * - MANUAL_BIZ：手动业务流程。
             * - SKIP：数据开发的空跑调度。
             * - ADHOCQUERY：临时查询。
             * - COMPONENT：组件管理。
             * @example `NORMAL`
             */
            UseType: string;
            /**
             * 文件所在文件夹的ID。
             * @example `2735c2****`
             */
            FileFolderId: string;
            /**
             * 文件的ID。
             * @example `10000001`
             */
            FileId: number;
            /**
             * 如果当前文件是组合节点文件的内部文件，该字段标识对应组合节点文件的ID。
             * @example `-1`
             */
            ParentId: number;
            /**
             * 文件创建者的阿里云用户ID。
             * @example `382762****`
             */
            CreateUser: string;
            /**
             * 如果当前文件是MaxCompute资源文件，该字段标识该资源文件是否需要上传至MaxCompute。
             * 仅当文件是MaxCompute资源文件时才需要配置该参数。
             * @example `false`
             */
            IsMaxCompute: boolean;
            /**
             * 文件所属的业务流程ID。
             * @example `300000`
             */
            BusinessId: number;
            /**
             * 文件的描述信息。
             * @example `my test datastudio file`
             */
            FileDescription: string;
            /**
             * 最近一次编辑文件的毫秒时间戳。
             * @example `1593950832000`
             */
            LastEditTime: number;
            /**
             * 该参数已废弃。您可通过[GetFile](~~173954~~)接口查询。
             * @example `SHOW TABLES;`
             */
            Content: string;
            /**
             * 提交文件后，在调度系统生成的调度任务的ID。
             * @example `300001`
             */
            NodeId: number;
            /**
             * 文件所在的文件夹的路径
             * @example `业务流程/我的第一个业务流程/MaxCompute/ods层`
             */
            AbsoluteFolderPath: string;
        }[];
    };
}
