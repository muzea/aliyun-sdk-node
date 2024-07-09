export interface DeleteModelRequest {
    /**
     * 模型的名称
     * @example `Test`
     */
    "ModelName": string;
    /**
     * 模型所属的分组编号
     * @example `30e792398d6c4569b04c0e53a3494381`
     */
    "GroupId": string;
}
