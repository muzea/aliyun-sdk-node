export interface CreateHybridMonitorSLSGroupRequest {
    /**
     * Logstore组名称。
     * 长度为2~32个字符，由大写字母、小写字母、数字和下划线（_）组成。开头必须为大写字母或小写字母。
     * @example `Logstore_test`
     */
    "SLSGroupName": string;
    /**
     * Logstore组描述。
     * @example `阿里云产品归属的Logstore组。`
     */
    "SLSGroupDescription"?: string;
    /**
     * Logstore组的配置信息。
     * N的取值范围：1~25。
     */
    "SLSGroupConfig": {
        /**
         * 地域。
         * N的取值范围：1~25。
         * @example `cn-hangzhou`
         */
        SLSRegion: string;
        /**
         * 日志项目。
         * N的取值范围：1~25。
         * @example `aliyun-project`
         */
        SLSProject: string;
        /**
         * 日志库。
         * N的取值范围：1~25。
         * @example `Logstore-ECS`
         */
        SLSLogstore: string;
        /**
         * 成员ID。
         * N的取值范围：1~25。
         * 当您通过管理账号调用API时，可以选择将资源目录中的任意成员的阿里云产品接入企业云监控。通过资源目录实现企业跨账号统一监控目标阿里云产品。
         * > 如果目标成员初次使用云监控，则需要确保该成员已授权云监控服务关联角色（AliyunServiceRoleForCloudMonitor）。更多信息，请参见[云监控服务关联角色](~~170423~~)。
         * @example `120886317861****`
         */
        SLSUserId: string;
    }[];
}
