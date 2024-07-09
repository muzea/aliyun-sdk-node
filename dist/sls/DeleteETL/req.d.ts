export interface DeleteETLRequest {
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
}
