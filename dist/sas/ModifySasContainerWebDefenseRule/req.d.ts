export interface ModifySasContainerWebDefenseRuleRequest {
    /**
     * 规则ID。
     * @example `200634`
     */
    "RuleId": number;
    /**
     * 规则名称。
     * @example `wwwwwww`
     */
    "RuleName"?: string;
    /**
     * 规则防御路径列表。
     */
    "PathConfDTOList"?: {
        /**
         * 防御路径。
         * @example `/test/home/`
         */
        DefensePath: string;
        /**
         * 备份路径。
         * @example `/tmp/test`
         */
        BackupPath: string;
        /**
         * 排除文件路径。
         * @example `/test/home/qq`
         */
        ExcludeFilePath: string;
        /**
         * 排除文件类型。
         * @example `php`
         */
        ExcludeFileType: string;
        /**
         * 排除的文件。
         * @example `/usr/test`
         */
        ExcludeFile: string;
        /**
         * 防护模式 。
         * - **0** ： 基础模式 （白名单）
         * - **1** ：复杂模式（黑名单）
         * @example `0`
         */
        GuardType: number;
        /**
         * 包含文件的类型。
         * @example `jsp`
         */
        IncludeFileType: string;
        /**
         * 包含的文件。
         * @example `/home/admin/test`
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
        /**
         * 路径ID。
         * @example `12345678`
         */
        PathConfId: number;
    }[];
}
