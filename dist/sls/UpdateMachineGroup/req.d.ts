export interface UpdateMachineGroupRequest {
    /**
     * Project名称。
     * @example `ali-test-project`
     */
    "project": string;
    /**
     * 机器组名称。
     * @example `test-group`
     */
    "groupName": string;
    /**
     * 请求体结构。
     * @example `ali-test-project`
     */
    "body": {
        /**
         * 机器组名称。
         * @example `test-machine-group`
         */
        groupName: string;
        /**
         * 机器组标识类型。
         * - ip：IP地址机器组。
         * - userdefined：用户自定义标识机器组。
         * @example `userdefined`
         */
        machineIdentifyType: string;
        /**
         * 机器组类型，固定为空字符串。
         * @example `""`
         */
        groupType: string;
        /**
         * 机器组的属性，默认为空。
         */
        groupAttribute: {
            /**
             * 机器组的日志主题。默认为空。
             * @example `testtopic2`
             */
            groupTopic: string;
            /**
             * 机器组所依赖的外部管理系统标识。默认为空。
             * @example `testgroup2`
             */
            externalName: string;
        };
        /**
         * 机器组的标识信息。
         * - 如果machineIdentifyType配置为ip，则此处填写服务器的IP地址。
         * - 如果machineIdentifyType配置为userdefined，则此处填写自定义的标识。
         * @example `[uu_id_1，uu_id_2]`
         */
        machineList: string[];
    };
}
