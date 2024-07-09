export interface GetDIJobRequest {
    /**
     * 任务ID。
     * @example `11588`
     */
    "DIJobId": number;
    /**
     * 是否返回详细配置信息，详细配置信息包括TransformationRules、TableMappings、JobSettings。默认返回。
     * @example `true`
     */
    "WithDetails"?: boolean;
}
