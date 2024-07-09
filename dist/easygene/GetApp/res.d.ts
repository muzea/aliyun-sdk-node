export interface GetAppResponse {
    /**
     * 工作流名称
     * @example `MyTestWorkflow`
     */
    WorkflowName: string;
    /**
     * 应用名称
     * @example `MyTestApp`
     */
    AppName: string;
    /**
     * 创建时间
     * @example `2021-06-16T15:09:14.378297+08:00`
     */
    CreateTime: string;
    /**
     * 应用定义
     * @example `WDL content`
     */
    Definition: string;
    /**
     * 应用简要描述
     * @example `This is a test app`
     */
    Description: string;
    /**
     * 应用详细文档
     * @example `example documentation content`
     */
    Documentation: string;
    /**
     * 主机ID
     * @example `easygene.cn-beijing.aliyuncs.com`
     */
    HostId: string;
    /**
     * 应用输入
     */
    Inputs: {
        /**
         * 任务名称
         * @example `TestTaskName`
         */
        TaskName: string;
        /**
         * 变量名称
         * @example `TestVariableName`
         */
        VariableName: string;
        /**
         * 变量类型
         * @example `TestVariableType`
         */
        VariableType: string;
        /**
         * 变量值
         * @example `TestVariableValue`
         */
        VariableValue: string;
        /**
         * 是否必须
         * @example `true`
         */
        Required: boolean;
        /**
         * 帮助
         * @example `help information`
         */
        Help: string;
        /**
         * 步骤顺序
         * @example `1`
         */
        StepOrder: number;
    }[];
    /**
     * 应用标签
     */
    Labels: any;
    /**
     * 应用描述语言
     * @example `WDL`
     */
    Language: string;
    /**
     * 应用描述语言版本
     * @example `1.0`
     */
    LanguageVersion: string;
    /**
     * 应用最后修改时间
     * @example `2021-06-16T15:09:14.378297+08:00`
     */
    LastModifiedTime: string;
    /**
     * 应用的输出参数
     */
    Outputs: {
        /**
         * 任务名称
         * @example `TestTaskName`
         */
        TaskName: string;
        /**
         * 参数名称
         * @example `TestVariableName`
         */
        VariableName: string;
        /**
         * 参数类型
         * @example `Int`
         */
        VariableType: string;
        /**
         * 参数值
         * @example `ExampleValue`
         */
        VariableValue: string;
        /**
         * 是否必须
         * @example `true`
         */
        Required: boolean;
        /**
         * 帮助信息
         * @example `Example help information`
         */
        Help: string;
        /**
         * 步骤编号
         * @example `1`
         */
        StepOrder: number;
    }[];
    /**
     * 请求ID
     * @example `DA980AD0-158F-44F3-847D-5EAB96C0EB6B`
     */
    RequestId: string;
    /**
     * 应用版本号
     * @example `1`
     */
    Revision: string;
    /**
     * 应用版本唯一标签
     * @example `TestTag`
     */
    RevisionTag: string;
    /**
     * 应用当前版本修改
     * @example `Example revision comment`
     */
    RevisionComment: string;
    /**
     * 应用的所有版本号
     */
    Revisions: {
        /**
         * 创建时间
         * @example `2021-06-16T15:09:14.378297+08:00`
         */
        CreateTime: string;
        /**
         * 版本号
         * @example `1`
         */
        Revision: string;
        /**
         * 应用当前版本修改
         * @example `Example revision comment`
         */
        RevisionComment: string;
        /**
         * 应用版本唯一标签
         * @example `ProduceVersion`
         */
        RevisionTag: string;
    }[];
    /**
     * 应用可见范围
     * @example `Public`
     */
    Scope: string;
    /**
     * 应用URL
     * @example `Example url`
     */
    URL: string;
    /**
     * 工作空间名称
     * @example `TestWorkspace`
     */
    Workspace: string;
    /**
     * 应用来源
     * @example `EasyGene`
     */
    Source: string;
    /**
     * 实体类型
     * @example `App`
     */
    AppType: string;
    /**
     * 依赖应用
     */
    Dependencies: {
        /**
         * 依赖路径
         * @example `./task/echo.wdl`
         */
        Path: string;
        /**
         * wdl内容
         * @example `task echo {   String txt_out = "default_txt_out"   String dd_out = "default_dd_out"    command {     echo Hello > ${txt_out}     /bin/bash -c "dd if=/dev/zero of=${dd_out} bs=1M count=15"     echo "This is a test std out."   }    runtime {     cpu: "2"     memory: "4G"     autoReleaseJob: false     reserveOnFail: true     userData: "key1 value1"     disks: "local-disk 40 cloud_ssd, /home/mount/ 40 cloud_efficiency"     tag: "TestTag"   }    output {     File outTxtFile = "${txt_out}"     File outDdFile = "${dd_out}"   } }`
         */
        Content: string;
    }[];
    /**
     * 参考输入
     */
    Configs: {
        /**
         * 参数路径
         * @example `./config/example.json`
         */
        Path: string;
        /**
         * 参数内容
         * @example `{     "wgs.apply_bqsr.cpu": 4,     "wgs.apply_bqsr.disks": "local-disk 250 cloud_ssd",     "wgs.apply_bqsr.gatk_Launcher": "/usr/local/bin/gatk-4.1.4.1/gatk",     "wgs.apply_bqsr.java_opts": "'-XX:GCTimeLimit=50 -XX:GCHeapFreeLimit=10 -Xms3000m -Djava.io.tmpdir=/mnt'",     "wgs.apply_bqsr.memory": "8G"}`
         */
        Content: string;
    }[];
    /**
     * 主WDL路径
     * @example `main.wdl`
     */
    Path: string;
}
