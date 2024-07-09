export interface CreateTagRequest {
    /**
     * 实例id
     * @example `174952ab-9825-4cc9-a5e2-de82d7fa4cdd`
     */
    "InstanceId": string;
    /**
     * 话术id
     * @example `797203ac-3874-422f-838f-d4cd63c72681`
     */
    "ScriptId": string;
    /**
     * 标签
     * @example `研究生`
     */
    "TagName": string;
    /**
     * 标签组，标签所在的组，如果明知指定的标签组不存在，系统会自动创建一个名字参数指定的标签组
     * @example `目标学历`
     */
    "TagGroup": string;
}
