export interface UpdateExperimentStatusResponse {
    /**
     * 返回参数。
     */
    result: {
        /**
         * 是否为默认实验。
         * @example `true`
         */
        base: boolean;
        /**
         * 实验上线时间。
         * @example `2020-11-11T09:47:43.000Z`
         */
        onlineTime: string;
        /**
         * 实验下线时间。
         * @example `2020-11-11T09:47:43.000Z`
         */
        offlineTime: string;
        /**
         * 实验备注。
         * @example `xxx`
         */
        description: string;
        /**
         * 实验状态。
         * 取值：
         * - **Init**：未上线。
         * - **Online**：上线。
         * - **Finish**：推全。
         * - **Offline**：下线。
         * @example `init`
         */
        status: string;
        /**
         * 实验名称。
         * @example `test`
         */
        name: string;
        /**
         * 实验参数列表。
         */
        algorithms: {
            /**
             * 算法key。
             * 取值：
             * - **I2I**：I2I召回链路。
             * - **u2X2I**：U2X2I召回链路。
             * - **hot**：热门商品召回链路。
             * - **new**：新品召回链路。
             * - **embedding**：向量召回链路。
             * - **mtorder**：召回链路优先级。
             * - **rankservice**：排序服务。
             * @example `hot`
             */
            key: string;
            /**
             * 子配置项列表。
             */
            config: {
                /**
                 * 算法配置项key。
                 * @example `hot`
                 */
                key: string;
                /**
                 * 算法配置项默认值。
                 * @example `xxx`
                 */
                defaultValue: string;
                /**
                 * 实验值。
                 * @example `xxx`
                 */
                experimentValue: string;
                /**
                 * 子配置名称。
                 * @example `xxx`
                 */
                name: string;
            }[];
            /**
             * 默认召回数量。
             * @example `swing`
             */
            defaultValue: string;
            /**
             * 算法类别。
             * 取值：
             * - **SYSTEM**：系统默认类型。
             * - **CUSTOM**：用户自定义类型。
             * @example `SYSTEM`
             */
            type: string;
            /**
             * 实验值。
             * @example `xxx`
             */
            experimentValue: string;
            /**
             * 是否有子配置项。
             * 取值：
             * - **true**：是
             * - **false**：否
             * @example `false`
             */
            hasConfig: boolean;
            /**
             * 算法类目。
             * 取值：
             * - **RECALL**：召回。
             * - **RANK**：排序。
             * @example `RECALL`
             */
            category: string;
            /**
             * 实验名称。
             * @example `xxx`
             */
            name: string;
        }[];
        /**
         * 分桶列表，上线实验时该字段才生效。
         */
        buckets: string[];
        /**
         * 实验ID。
         * @example `123`
         */
        experimentId: string;
    };
    /**
     * 请求ID。
     * @example `E3D6FE3B-B7C2-43DA-9A13-5EA837ACED9B`
     */
    requestId: string;
}
