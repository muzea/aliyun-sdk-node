export interface SuspendTriggerRequest {
    /**
     * 项目名称，获取方式请参见[创建项目](~~478153~~)。
     * @example `test-project`
     */
    "ProjectName": string;
    /**
     * 数据接入ID，获取方式请参见[创建触发器](~~479912~~)。
     * @example `trigger-9f72636a-0f0c-4baf-ae78-38b27b******`
     */
    "Id": string;
}
