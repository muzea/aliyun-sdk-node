export interface DsgSceneAddOrUpdateSceneRequest {
    /**
     * 二级脱敏场景信息。
     */
    "scenes": {
        /**
         * 二级脱敏场景ID。
         * - 不配置该参数：表示当前操作为新增二级脱敏场景。
         * - 配置该参数：表示编辑指定二级脱敏场景信息。您可调用[DsgSceneQuerySceneListByName](~~2786322~~)接口查询二级脱敏场景ID。
         * @example `123`
         */
        id: string;
        /**
         * 二级脱敏场景名称。
         * @example `dev_scene`
         */
        sceneName: string;
        /**
         * 二级脱敏场景所属的一级脱敏场景Code。取值如下：
         * - 数据开发/数据地图展示脱敏：dataworks_display_desense_code
         * - MaxCompute引擎层脱敏：maxcompute_desense_code
         * - MaxCompute引擎层脱敏（新）：maxcompute_new_desense_code
         * - 数据分析展示脱敏：dataworks_analysis_desense_code
         * @example `dataworks_display_desense_code`
         */
        sceneCode: string;
        /**
         * 脱敏场景生效的引擎信息。
         */
        projects: {
            /**
             * 若脱敏场景生效的数据范围为EMR引擎，此处需输入EMR集群ID。仅当使用EMR引擎时需配置该参数。
             * @example `c-1234`
             */
            clusterId: string;
            /**
             * 脱敏场景生效的引擎实例名称。
             * @example `dev_project`
             */
            projectName: string;
            /**
             * 脱敏场景生效的引擎类型。取值如下：
             * - ODPS：ODPS.ODPS
             * - HOLO：HOLO.POSTGRES
             * - EMR：EMR
             * @example `ODPS.ODPS`
             */
            dbType: string;
        }[];
        /**
         * 描述。
         * @example `测试用场景`
         */
        desc: string;
        /**
         * 脱敏场景生效的用户组信息。
         */
        userGroupIds: number[];
    }[];
}
