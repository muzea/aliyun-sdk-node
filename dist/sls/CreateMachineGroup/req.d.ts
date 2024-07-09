export interface CreateMachineGroupRequest {
    /**
     * Project名称。
     * @example `ali-test-project`
     */
    "project": string;
    /**
     * 请求体参数。
     * @example `ali-test-project`
     */
    "body": {
        /**
         * 机器组名称。其命名规则如下：
         * - 同一个Project下，机器组名称不可重复。
         * - 只能包括小写字母、数字、短划线（-）和下划线（_）。
         * - 必须以小写字母或者数字开头和结尾。
         * - 长度为3-128字符。
         * @example `test-machine-group`
         */
        groupName: string;
        /**
         * 机器标识类型。
         * - ip：IP地址机器组。
         * - userdefined：用户自定义标识机器组。
         * @example `ip`
         */
        machineIdentifyType: string;
        /**
         * 机器组类型，可选值为空。
         * @example `""`
         */
        groupType: string;
        /**
         * 机器组的属性。
         */
        groupAttribute: {
            /**
             * 机器组的日志主题。
             * @example `testtopic`
             */
            groupTopic: string;
            /**
             * 机器组所依赖的外部管理系统标识。
             * @example `testgroup`
             */
            externalName: string;
        };
        /**
         * 机器组的标识信息。
         * - 如果machineIdentifyType配置为ip，则此处填写服务器的IP地址。
         * - 如果machineIdentifyType配置为userdefined，则此处填写自定义的标识。
         */
        machineList: string[];
    };
}
