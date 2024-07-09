export interface CreateDBImportTaskRequest {
    /**
     * 服务空间ID。
     * @example `0e16bb12-14af-4635-b24c-5ac1a9a*****`
     */
    "SpaceId": string;
    /**
     * 集合名称。
     * @example `test`
     */
    "Collection": string;
    /**
     * 导入文件类型，可选值为：
     * - JSON
     * - CSV
     * @example `CSV`
     */
    "FileType": string;
    /**
     * 冲突处理模式，可选值为：
     * - INSERT（默认） ：导入出现冲突则忽略。
     * - UPSERT：导入出现冲突则使用文件中的内容更新。
     * @example `UPSERT`
     */
    "Mode"?: string;
}
