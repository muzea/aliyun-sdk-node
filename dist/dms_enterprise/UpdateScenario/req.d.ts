export interface UpdateScenarioRequest {
    /**
     * 租户ID。
     * > 取自系统右上角头像处悬停展示的租户ID信息，详情请参见[查看租户信息](~~181330~~)。
     * @example `3***`
     */
    "Tid"?: number;
    /**
     * 业务场景ID。
     * @example `12***`
     */
    "ScenarioId": string;
    /**
     * 业务场景名称。
     * @example `业务场景-测试`
     */
    "ScenarioName": string;
    /**
     * 业务场景描述。
     * @example `test`
     */
    "Description"?: string;
}
