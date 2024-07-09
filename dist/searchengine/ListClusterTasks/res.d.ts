export interface ListClusterTasksResponse {
    /**
     * id of request
     * @example `CC5EC8FA-5C0D-56AF-BEF4-6FCCEABD0511`
     */
    requestId: string;
    /**
     * 索引信息
     */
    result: {
        /**
         * 变更分组类型
         * @example `Table_Update`
         */
        groupType: string;
        /**
         * fsmId
         * @example `tisplus_opensearch@datasource_flow_fsm@1865410598556969-ha-cn-pl32rf0****_api2@bj_vpc_domain_1@null@MANUAL-ha-cn-pl32rf0****_api2@1649729867698@028315`
         */
        fsmId: string;
        /**
         * 卡片的名字
         * @example `ha-cn-pl32rf0****_qrs`
         */
        name: string;
        /**
         * 卡片的时间戳
         * @example `1657610520`
         */
        time: string;
        /**
         * 卡片的类型
         * @example `mra_table_config_trace_fsm`
         */
        type: string;
        /**
         * 触发生成fsm流程的用户
         * @example `admin`
         */
        user: string;
        /**
         * FSM整体状态
         * @example `onlyPublished`
         */
        status: string;
        /**
         * 卡片的额外属性
         * @example `{
            "consoleVersion": "",
            "domain": "hz_pre_vpc_domain_1",
            "configType": "offline"
        }`
         */
        extraAttribute: string;
        /**
         * 创建状态机时透传的field3字段
         * @example `{
            "ha-cn-pl32rf0****_offline_adv": 1,
            "ha-cn-pl32rf0****_offline_plugin": 1,
            "ha-cn-pl32rf0****_table_ha-cn-35t3r02iq03_test_api": 1,
            "ha-cn-pl32rf0****@ha-cn-pl32rf0****_test_api@hz_pre_vpc_domain_1@test_api@index_config": 1,
            "ha-cn-pl32rf0****_offline_dict": 1
        }`
         */
        field3: string;
        /**
         * 进度条的状态标签
         */
        tags: {
            /**
             * 展示tag的等级
             * @example `1`
             */
            tagLevel: string;
            /**
             * 展示tag内容
             * @example `test-tag`
             */
            msg: string;
        }[];
        /**
         * 任务信息
         */
        taskNodes: {
            /**
             * 任务名称
             * @example `publish config version`
             */
            name: string;
            /**
             * 此任务的序号
             * @example `4`
             */
            index: number;
            /**
             * 完成日期
             * @example `2024-06-17 18:40:48`
             */
            finishDate: string;
            /**
             * 任务状态
             * @example `SUCCESS`
             */
            status: string;
        }[];
    }[];
}
