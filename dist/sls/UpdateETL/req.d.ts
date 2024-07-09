export interface UpdateETLRequest {
    /**
     * Project名称
     * @example `ali-test-project`
     */
    "project": string;
    /**
     * 数据加工名称
     * @example `etl-123456`
     */
    "etlName": string;
    /**
     * 更新的数据加工配置
     */
    "body"?: {
        /**
         * 数据加工显示名称
         * @example `this is update`
         */
        displayName: string;
        /**
         * 数据加工描述
         * @example `this is description`
         */
        description: string;
        /**
         * 数据加工详细配置
         */
        configuration: any;
    };
}
