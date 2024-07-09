export interface DsgDesensPlanQueryListResponse {
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
     * 分页数据。
     */
    PageData: {
        /**
         * 页码。
         * @example `1`
         */
        PageNumber: number;
        /**
         * 每页显示的数据条数，最大为100。
         * @example `10`
         */
        PageSize: number;
        /**
         * 返回的脱敏规则条数。
         * @example `100`
         */
        TotalCount: number;
        /**
         * 脱敏规则信息。
         */
        Data: {
            /**
             * 脱敏规则ID。
             * @example `123`
             */
            Id: number;
            /**
             * 敏感字段类型。
             * @example `phone`
             */
            DataType: string;
            /**
             * 脱敏规则名称。
             * @example `phone_hash`
             */
            RuleName: string;
            /**
             * 脱敏规则详情。
             */
            DesensPlan: {
                /**
                 * 脱敏规则类型。
                 * @example `hash`
                 */
                DesensPlanType: string;
                /**
                 * 脱敏规则参数。参数信息可参考[DsgDesensPlanAddOrUpdate](~~2786295~~)接口文档。
                 */
                ExtParam: any;
            };
            /**
             * 脱敏规则的负责人。
             * @example `user1`
             */
            Owner: string;
            /**
             * 脱敏规则的创建时间。
             * @example `2024-05-09 15:46:20`
             */
            GmtCreate: string;
            /**
             * 脱敏规则的修改时间。
             * @example `2024-05-09 15:46:20`
             */
            GmtModified: string;
            /**
             * 脱敏规则的生效状态。取值如下：
             * - 0：失效。
             * - 1：生效。
             * @example `1`
             */
            Status: number;
            /**
             * 脱敏方式。
             * @example `HASH`
             */
            DesensWay: string;
            /**
             * 脱敏方式类型。
             * @example `HASH`
             */
            DesenMode: string;
            /**
             * 脱敏规则。
             * @example `HASH`
             */
            DesensRule: string;
            /**
             * 脱敏规则所属的一级脱敏场景Code。取值如下：
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
             * 是否添加水印。取值如下：
             * - true：添加。
             * - false：不添加。
             * @example `true`
             */
            CheckWatermark: boolean;
            /**
             * 脱敏规则所属的二级脱敏场景名称。
             * @example `test_scene`
             */
            SceneName: string;
        }[];
    };
    /**
     * 请求的ID。用于定位日志，排查问题。
     * @example `102400001`
     */
    RequestId: string;
}
