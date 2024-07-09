export interface CreateAppRequest {
    /**
     * 工作空间名称
     * @example `TestWorkspace`
     */
    "Workspace": string;
    /**
     * 应用名称
     * @example `TestApp`
     */
    "AppName": string;
    /**
     * 应用定义
     * @example `import "./task/echo.wdl" as echo workflow wf_echo {   call echo.echo }`
     */
    "Definition": string;
    /**
     * 主WDL路径
     * @example `main.wdl`
     */
    "Path": string;
    /**
     * 应用版本标签，在所有版本间具有唯一性
     * @example `ProduceVersion`
     */
    "RevisionTag"?: string;
    /**
     * 应用描述
     * @example `This is a test app`
     */
    "Description"?: string;
    /**
     * 应用描述语言
     * @example `WDL`
     */
    "Language"?: string;
    /**
     * 应用描述语语言版本
     * @example `1.0`
     */
    "LanguageVersion"?: string;
    /**
     * 应用类型
     * @example `App`
     */
    "AppType"?: string;
    /**
     * 应用使用文档
     * @example `Example documentation content`
     */
    "Documentation"?: string;
    /**
     * 应用当前版本说明
     * @example `Example revision comment`
     */
    "RevisionComment"?: string;
    /**
     * 应用标签
     * @example `{"key":"value"}`
     */
    "Labels"?: string;
    /**
     * 幂等Token
     * @example `TestToken`
     */
    "ClientToken"?: string;
    /**
     * 依赖应用
     * @example `{"key":"value"}`
     */
    "Dependencies"?: {
        /**
         * 依赖路径
         * @example `./task/echo.wdl`
         */
        Path: string;
        /**
         * 依赖内容
         * @example `task echo {   String txt_out = "default_txt_out"   String dd_out = "default_dd_out"    command {     echo Hello > ${txt_out}     /bin/bash -c "dd if=/dev/zero of=${dd_out} bs=1M count=15"     echo "This is a test std out."   }    runtime {     cpu: "2"     memory: "4G"     autoReleaseJob: false     reserveOnFail: true     userData: "key1 value1"     disks: "local-disk 40 cloud_ssd, /home/mount/ 40 cloud_efficiency"     tag: "TestTag"   }    output {     File outTxtFile = "${txt_out}"     File outDdFile = "${dd_out}"   } }`
         */
        Content: string;
    }[];
    /**
     * 参考输入
     * @example `TestToken`
     */
    "Configs"?: {
        /**
         * 配置路径
         * @example `./config/example.json`
         */
        Path: string;
        /**
         * 配置内容
         * @example `{     "wgs.apply_bqsr.cpu": 4,     "wgs.apply_bqsr.disks": "local-disk 250 cloud_ssd",     "wgs.apply_bqsr.gatk_Launcher": "/usr/local/bin/gatk-4.1.4.1/gatk",     "wgs.apply_bqsr.java_opts": "'-XX:GCTimeLimit=50 -XX:GCHeapFreeLimit=10 -Xms3000m -Djava.io.tmpdir=/mnt'",     "wgs.apply_bqsr.memory": "8G"}`
         */
        Content: string;
    }[];
}
