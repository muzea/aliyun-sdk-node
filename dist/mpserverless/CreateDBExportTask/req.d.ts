export interface CreateDBExportTaskRequest {
    /**
     * 服务空间ID。
     * @example `0e16bb12-14af-4635-b24c-5ac1a9a*****`
     */
    "SpaceId": string;
    /**
     * 集合名称。
     * @example `article`
     */
    "Collection": string;
    /**
     * 导出文件类型。可选值为：
     * - JSON
     * - CSV
     * @example `CSV`
     */
    "FileType": string;
    /**
     * 导出的字段列表，以逗号（,）分隔。当文件类型为CSV时该字段必选。
     * @example `name,content`
     */
    "Fields"?: string;
}
