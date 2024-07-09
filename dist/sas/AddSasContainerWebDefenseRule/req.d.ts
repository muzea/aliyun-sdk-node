export interface AddSasContainerWebDefenseRuleRequest {
    /**
     * 规则名称。
     * @example `test-2020`
     */
    "RuleName"?: string;
    /**
     * 规则防御路径列表。
     */
    "PathConfDTOList"?: {
        /**
         * 防御路径。
         * @example `/usr/test/`
         */
        DefensePath: string;
        /**
         * 备份路径。
         * @example `/tmp/test`
         */
        BackupPath: string;
        /**
         * 排除文件路径。
         * @example `/usr/test/tt`
         */
        ExcludeFilePath: string;
        /**
         * 排除文件类型。
         * @example `jsp`
         */
        ExcludeFileType: string;
        /**
         * 排除的文件。
         * @example `/usr/test/aa`
         */
        ExcludeFile: string;
        /**
         * 防护模式 。
         * - **0** ：基础模式 （白名单）
         * - **1** ：复杂模式（黑名单）
         * @example `0`
         */
        GuardType: number;
        /**
         * 包含文件的类型。
         * @example `*.jsp`
         */
        IncludeFileType: string;
        /**
         * 包含的文件。
         * @example `/usr/test/t1`
         */
        IncludeFile: string;
        /**
         * 防护模式 。
         * - **block** ：阻断
         * - **audit** ：审计
         * @example `audit`
         */
        DefenseMode: string;
        /**
         * 白名单进程列表。
         */
        ProcessPathList: string[];
    }[];
}
