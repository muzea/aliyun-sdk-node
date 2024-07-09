export interface DsgSceneQuerySceneListByNameResponse {
    /**
     * 调用是否成功。取值如下：
     * - true：调用成功。
     * - false：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误码。
     * @example `1029030003`
     */
    ErrorCode: string;
    /**
     * 错误信息。
     * @example `param error`
     */
    ErrorMessage: string;
    /**
     * HTTP状态码。
     * @example `400`
     */
    HttpStatusCode: number;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 脱敏场景ID。
         * @example `123`
         */
        Id: number;
        /**
         * 一级脱敏场景Code。取值如下：
         * - 数据开发/数据地图展示脱敏：dataworks_display_desense_code
         * - MaxCompute引擎层脱敏：maxcompute_desense_code
         * - MaxCompute引擎层脱敏（新）：maxcompute_new_desense_code
         * - Hologres引擎层脱敏：hologres_display_desense_code
         * - 数据集成静态脱敏：dataworks_data_integration_desense_code
         * - 数据分析展示脱敏：dataworks_analysis_desense_code
         * @example `dataworks_display_desense_code`
         */
        SceneCode: string;
        /**
         * 脱敏场景描述信息。
         * @example `测试用场景`
         */
        Desc: string;
        /**
         * 脱敏场景名称。
         * @example `test_scene`
         */
        SceneName: string;
        /**
         * 脱敏场景的用户组名称列表。使用英文逗号（,）隔开。
         * @example `user1,user2`
         */
        UserGroups: string;
        /**
         * 脱敏场景级别。取值如下：
         * - 0：一级场景
         * - 1：二级场景
         * @example `1`
         */
        SceneLevel: number;
        /**
         * 脱敏场景生效的引擎信息。
         */
        Projects: {
            /**
             * 引擎类型。取值如下：
             * - ODPS：ODPS.ODPS
             * - HOLO：HOLO.POSTGRES
             * - EMR：EMR
             * @example `ODPS.ODPS`
             */
            DbType: string;
            /**
             * 引擎实例名称。
             * @example `dev_project`
             */
            ProjectName: string;
            /**
             * EMR集群ID。仅当脱敏场景生效的数据范围为EMR引擎时，会返回该参数。
             * @example `c-1234`
             */
            ClusterId: string;
        }[];
        /**
         * 多级脱敏场景参数信息。
         */
        Children: any[];
    }[];
    /**
     * 请求的ID。用于定位日志，排查问题。
     * @example `102400001`
     */
    RequestId: string;
}
