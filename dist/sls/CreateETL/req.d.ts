export interface CreateETLRequest {
    /**
     * Project名称
     * @example `ali-test-project`
     */
    "project": string;
    /**
     * 数据加工任务配置
     */
    "body"?: {
        /**
         * 数据加工任务名称（project下唯一）
         * @example `etl-123456`
         */
        name: string;
        /**
         * 数据加工任务显示名称
         * @example `sls-test-etl`
         */
        displayName: string;
        /**
         * 数据加工任务描述
         * @example `this is ETL`
         */
        description: string;
        /**
         * 数据加工任务详细配置
         */
        configuration: any;
    };
}
